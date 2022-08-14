import React, { useState } from 'react'
import Logo from '../assets/Logo.svg'
import { TbGridDots } from 'react-icons/tb'
import moon from '../assets/moon.svg'
import sun from '../assets/sun.svg'
import { Link } from 'react-router-dom'

const Navbar = ({ darkMode, setDarkMode }) => {
    const [Scrolled, setScrolled] = useState(false)


    const changeNavBg = () => {
        if (window.scrollY > 0) {
            setScrolled(true)
        }
        else {
            setScrolled(false)
        }
    }
    window.addEventListener('scroll', changeNavBg);

    return (
        <div className={`w-full px-8 py-4  flex items-center justify-around  shadow-lg  ${Scrolled ? 'bg-blue-lightmd' : ''} ${Scrolled ? 'dark:bg-blue-darkmd' : ''}`}>
            <div className='w-[80%] flex items-center justify-between'>
                <div className='flex justify-center items-center'>
                    <Link to='/'>
                        <img src={Logo} alt="Logo-image" />
                    </Link>

                </div>
                <div className='md:flex  md:justify-center text-white font-medium gap-6 '>
                    <Link to='/tutorial'><p >HOME</p></Link>
                    <Link to='/channel'><p >CHANNELS</p></Link>
                    <Link to='/setup'><p >SETUP</p></Link>
                    <Link to='/reseller'><p >RESELLERS</p></Link>
                </div>
                <div className='flex items-center  md:w-[35%]  justify-end gap-4 relative'>
                    <button type='button'
                        className='text-blue-lightmd-blue bg-white px-2 py-1 rounded-sm font-semibold'>
                        LOG IN
                    </button>
                    <button className='bg-green-200 text-white px-2 py-1 rounded-sm'>
                        ORDER NOW
                    </button>
                    <button type='button'
                        onClick={() => setDarkMode(!darkMode)} >
                        {darkMode ?
                            <img src={sun} alt="moon-logo" /> :
                            <img src={moon} alt="sun-logo" />
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar