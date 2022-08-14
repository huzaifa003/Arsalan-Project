import React from 'react'
import greenBar from '../assets/greenBar.svg'
import './style.css'

const ProgressBar = ({ mainHeading, perHeading, instruction }) => {
    return (
        <div className='wrapper flex md:items-center items-start  md:flex-row flex-col justify-between  overflow-hidden '>
            <h1 className=' dark:text-white heading w-[150px]   p-2  text-blue-darkmdbg font-semibold text-xl'>{mainHeading}</h1>
            <h1 className='text-green-600   w-[100px]  p-2 m-0 font-bold text-lg'>{perHeading}</h1>
            <img src={greenBar} className='image m-0 p-2' alt="bar" />
            <div className='blink w-5 h-5 rounded-full bg-green-800 p-1'>
                <div className='bg-green-500 w-full h-full rounded-full animate-fade'>

                </div>
            </div>
            <h1 className='text-green-600 font-bold text-normal md:block hidden instruction'>{instruction}</h1>
        </div>
    )
}

export default ProgressBar