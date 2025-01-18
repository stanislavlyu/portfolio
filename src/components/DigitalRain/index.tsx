'use client'

import useDigitalRain from './hooks/useDigitalRain'

const DigitalRain = () => {
	const canvasRef = useDigitalRain()

	return <canvas ref={canvasRef} className='fixed inset-0 -z-[1] h-full w-full' />
}

export default DigitalRain
