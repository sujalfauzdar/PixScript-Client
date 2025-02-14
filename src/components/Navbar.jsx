import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Navbar = () => {

   const {user,setshowLogin,Logout,credit} = useContext(AppContext)

    const navigate = useNavigate()


    return (

        <div className='flex items-center justify-between py-4'>
            <Link to='/'>
                <img src={assets.logo} alt=" " className='w-28 
        sm:w-32 lg:w-40'/></Link>

            <div>
                {user ?
                    <div className='flex items-center gap-2 sm:gap-3'>
                        <button onClick={() => navigate('/buycredit')} className='flex items-center gap-2 bg-black
                        px-4 sm:px-6 py-1.5 sm:py-3 rounded-full hover:scale-105 transition-all duration-700'>
                            <img className='w-5' src={assets.credit_star} alt='' />
                            <p className="text-xs sm:text-sm md:text-md lg:text-lg font-medium text-teal-50
                              px-4 py-2 rounded-md">
                                Credits left: {credit}
                            </p>

                        </button>
                        <p className='text-gray-800 max-sm:hidden pl-4'>
                            Hi,{user.name}</p>
                        <div className='relative group'>
                            <img src={assets.profile} className='w-10 drop-shadow'
                                alt="" />
                            <div className='absolute hidden group-hover:block
                            top-0 right-0 z-10 text-black rounded pt-12'>
                                <ul className='list-none m-0 p-2 bg-teal-100
                                rounded-md border text-sm '>
                                    <li onClick={Logout} className='py-1 px-2 cursor-pointer
                                    pr-10 '>
                                        LogOut
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>
                    :
                    <div className="flex items-center justify-between gap-3 sm:gap-6 md:gap-10 p-4 sm:p-5 md:p-6 w-full max-w-2xl mx-auto">
                        <p onClick={() => navigate('/buycredit')} className="text-orange-500 text-base sm:text-lg md:text-xl font-semibold tracking-wide hover:scale-105 transition-transform">
                            Pricing
                        </p>
                        <button onClick={() => setshowLogin(true)}
                         className="relative px-6 sm:px-7 md:px-8 py-2 sm:py-3 md:py-4 font-bold text-white bg-black rounded-2xl shadow-lg transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-2xl hover:from-red-500 hover:to-yellow-500">
                            <span className="absolute inset-0 w-full h-full bg-white opacity-10 rounded-full blur-md"></span>
                            Login
                        </button>
                    </div>
                



                }

            </div>
        </div>
  
    )
}

export default Navbar