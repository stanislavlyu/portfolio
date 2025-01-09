'use client'

import {
	AmbientLight,
	BufferAttribute,
	BufferGeometry,
	DirectionalLight,
	FogExp2,
	Mesh,
	MeshLambertMaterial,
	PerspectiveCamera,
	PlaneBufferGeometry,
	PointLight,
	Points,
	PointsMaterial,
	Scene,
	TextureLoader,
	Vector3,
	WebGLRenderer,
} from 'three'
import React, { useEffect, useRef } from 'react'

const ThreeBackground: React.FC = () => {
	const containerRef = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		let scene: Scene,
			camera: PerspectiveCamera,
			renderer: WebGLRenderer,
			rain: Points,
			rainGeo: BufferGeometry,
			flash: PointLight

		const cloudParticles: Mesh[] = [],
			rainCount = 15000

		function init() {
			scene = new Scene()
			camera = new PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000)
			camera.position.z = 1
			camera.rotation.x = 1.16
			camera.rotation.y = -0.12
			camera.rotation.z = 0.27

			const ambient = new AmbientLight(0x555555)
			scene.add(ambient)

			const directionalLight = new DirectionalLight(0xffeedd)
			directionalLight.position.set(0, 0, 1)
			scene.add(directionalLight)

			flash = new PointLight(0x062d89, 30, 500, 1.7)
			flash.position.set(200, 300, 100)
			scene.add(flash)

			renderer = new WebGLRenderer()
			scene.fog = new FogExp2(0x11111f, 0.002)
			renderer.setClearColor(scene.fog.color)
			renderer.setSize(window.innerWidth, window.innerHeight)
			containerRef.current?.appendChild(renderer.domElement)

			const positions: number[] = []
			const sizes: number[] = []
			rainGeo = new BufferGeometry()
			for (let i = 0; i < rainCount; i++) {
				const rainDrop = new Vector3(
					Math.random() * 400 - 200,
					Math.random() * 500 - 250,
					Math.random() * 400 - 200
				)
				positions.push(rainDrop.x, rainDrop.y, rainDrop.z)
				sizes.push(30)
			}
			rainGeo.setAttribute('position', new BufferAttribute(new Float32Array(positions), 3))
			rainGeo.setAttribute('size', new BufferAttribute(new Float32Array(sizes), 1))
			const rainMaterial = new PointsMaterial({
				color: 0xaaaaaa,
				size: 0.1,
				transparent: true,
			})
			rain = new Points(rainGeo, rainMaterial)
			scene.add(rain)

			const loader = new TextureLoader()
			loader.load('/assets/images/clouds.webp', function (texture) {
				const cloudGeo = new PlaneBufferGeometry(500, 500)
				const cloudMaterial = new MeshLambertMaterial({
					map: texture,
					transparent: true,
				})

				for (let p = 0; p < 25; p++) {
					const cloud = new Mesh(cloudGeo, cloudMaterial)
					cloud.position.set(Math.random() * 800 - 400, 500, Math.random() * 500 - 450)
					cloud.rotation.x = 1.16
					cloud.rotation.y = -0.12
					cloud.rotation.z = Math.random() * 360
					cloud.material.opacity = 0.6
					cloudParticles.push(cloud)
					scene.add(cloud)
				}
				animate()
				window.addEventListener('resize', onWindowResize)
			})
		}

		function animate() {
			cloudParticles.forEach((p) => {
				p.rotation.z -= 0.002
			})

			rain.position.z -= 0.222
			if (rain.position.z < -200) {
				rain.position.z = 0
			}

			if (Math.random() > 0.93 || flash.power > 100) {
				if (flash.power < 100)
					flash.position.set(Math.random() * 400, 300 + Math.random() * 200, 100)
				flash.power = 50 + Math.random() * 500
			}

			renderer.render(scene, camera)
			requestAnimationFrame(animate)
		}

		function onWindowResize() {
			camera.aspect = window.innerWidth / window.innerHeight
			camera.updateProjectionMatrix()
			renderer.setSize(window.innerWidth, window.innerHeight)
		}

		init()

		return () => {
			window.removeEventListener('resize', onWindowResize)
		}
	}, [])

	return <div ref={containerRef} className='absolute left-0 top-0 -z-[1] h-full w-full' />
}

export default ThreeBackground
