import React from 'react'
import ChromeCastImage from '../assets/ChromeCast.svg'
import AppleAirPlay from '../assets/AppleAirPlay.svg'
import MiraCast from '../assets/Miracast.png'
const CastingSetup = () => {
    return (
        <div className='flex items-start justify-between   flex-col max-w-full '>
            <h1 className='text-2xl font-semibold'>Cast Your IPTV with Any  TV Screen</h1>
            <p className='my-4'>Explore TV in all your Devices</p>
            <div className='flex items-between justify-start gap-24 my-6'>
                <div className='flex flex-col items-center justify-center gap-2'>
                    <h1 className='my-4 text-2xl font-semibold'>Google ChromCast</h1>
                    <img src={ChromeCastImage} alt="" />

                </div>
                <div className='flex flex-col items-center justify-center gap-2'>
                    <h1 className='my-4 text-2xl font-semibold'>Apple AirPlay</h1>
                    <img src={AppleAirPlay} alt="" />

                </div>

            </div>
            <div className='my-12 mt-24'>
                <h1 className='text-2xl font-semibold my-4'>MiraCast</h1>
                <img width={250} height={100} src={MiraCast} alt="" />
            </div>

        </div>
    )
}

export default CastingSetup