import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'

const CustomCard2 = ({ mainHeading, subHeading, subPara, buttonHeading, image }) => {
    return (
        <div className='flex flex-row items-center justify-center gap-4 bg-white dark:bg-blue-darkmd py-10 px-6 flex-wrap w-full rounded-md shadow-sm'>
            <div className='flex items-center justify-center p-4 w-[500px]' >
                <img src={image} alt="picture" />
            </div>
            <div className='flex flex-col items-start justify-start gap-4 w-[300px]'>
                <h1 className='dark:text-blue-700 text-5xl font-semibold'>{mainHeading}</h1>
                <h1 className='dark:text-white text-4xl font-bold'>{subHeading}</h1>
                <p className='text-justify dark:text-white font-lg font-normal'>
                    {subPara}
                </p>
                < div className='flex items-center justify-center' >
                    <button type='button' className=' py-2 px-16 rounded-md shadow-sm  bg-green-200 text-white'>JOIN US NOW</button>
                </div >
            </div>

        </div>
    )
}

export default CustomCard2