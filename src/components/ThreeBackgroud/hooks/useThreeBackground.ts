import { useEffect } from 'react'

export const useThreeBackground = (containerRef: React.RefObject<HTMLDivElement | null>) => {
	useEffect(() => {
		let scene: any, camera: any, renderer: any, rain: any, flash: any
		const cloudParticles: any[] = []
		const rainCount = 5000
		let initialized = false

		const initThree = async () => {
			const {
				Scene,
				PerspectiveCamera,
				WebGLRenderer,
				AmbientLight,
				DirectionalLight,
				PointLight,
				BufferGeometry,
				BufferAttribute,
				Vector3,
				Points,
				PointsMaterial,
				PlaneBufferGeometry,
				MeshLambertMaterial,
				Mesh,
				TextureLoader,
				FogExp2,
			} = await import('three')

			scene = new Scene()
			camera = new PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000)
			camera.position.z = 1
			camera.rotation.x = 1.16
			camera.rotation.y = -0.12
			camera.rotation.z = 0.27

			scene.add(new AmbientLight(0x555555))

			const directionalLight = new DirectionalLight(0xffeedd)
			directionalLight.position.set(0, 0, 1)
			scene.add(directionalLight)

			flash = new PointLight(0x062d89, 30, 500, 1.7)
			scene.add(flash)

			renderer = new WebGLRenderer()
			scene.fog = new FogExp2(0x11111f, 0.002)
			renderer.setClearColor(scene.fog.color)
			renderer.setSize(window.innerWidth, window.innerHeight)
			containerRef.current?.appendChild(renderer.domElement)

			const positions: number[] = []
			const rainGeo = new BufferGeometry()
			for (let i = 0; i < rainCount; i++) {
				const rainDrop = new Vector3(
					Math.random() * 400 - 200,
					Math.random() * 500 - 250,
					Math.random() * 400 - 200
				)
				positions.push(rainDrop.x, rainDrop.y, rainDrop.z)
			}
			rainGeo.setAttribute('position', new BufferAttribute(new Float32Array(positions), 3))
			const rainMaterial = new PointsMaterial({
				color: 0xaaaaaa,
				size: 0.1,
				transparent: true,
			})
			rain = new Points(rainGeo, rainMaterial)
			scene.add(rain)

			const loader = new TextureLoader()
			loader.load('/assets/images/clouds.webp', (texture) => {
				const cloudGeo = new PlaneBufferGeometry(500, 500)
				const cloudMaterial = new MeshLambertMaterial({
					map: texture,
					transparent: true,
				})
				for (let p = 0; p < 10; p++) {
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
			})

			window.addEventListener('resize', onWindowResize)
		}

		function animate() {
			cloudParticles.forEach((p) => (p.rotation.z -= 0.002))

			rain.position.z -= 0.7
			if (rain.position.z < -200) rain.position.z = 0

			if (Math.random() > 0.93 || flash.power > 100) {
				if (flash.power < 100) {
					flash.position.set(Math.random() * 400, 300 + Math.random() * 200, 100)
				}
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

		function initialize() {
			if (!initialized) {
				initialized = true
				initThree()
			}
		}

		const interactionEvents = ['click', 'mousemove', 'scroll', 'keydown']
		interactionEvents.forEach((event) =>
			window.addEventListener(event, initialize, { once: true })
		)

		const timer = setTimeout(initialize, 5000)

		return () => {
			interactionEvents.forEach((event) => window.removeEventListener(event, initialize))
			clearTimeout(timer)
			window.removeEventListener('resize', onWindowResize)
		}
	}, [containerRef])
}
