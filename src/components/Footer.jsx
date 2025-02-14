import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div className="text-white py-6 px-4 sm:px-6 lg:px-4 
         mt-28">
            {/* Footer Wrapper */}
            <div className="max-w-5xl mx-auto flex flex-col items-center text-center sm:flex-row sm:justify-between lg:flex-row lg:justify-between lg:items-center
            ">

                {/* Logo (Left on lg) */}
                <div className="lg:flex-1 lg:text-left lg:ml-0 lg:-translate-x-44">
                    <img
                        src={assets.logo}
                        alt="PixScript Logo"
                        width={140}
                        className="mb-4 sm:mb-0"
                    />
                </div>


                {/* Copyright (Centered on lg) */}
                <div className="lg:flex-1 lg:text-left lg:ml-6">
                    <p className="text-gray-500 text-sm lg:text-lg">
                        © 2024 @PixScript | All rights reserved.
                    </p>
                </div>


                {/* Social Icons (Right on lg) */}
                <div className="flex gap-3 mt-4 sm:mt-0 lg:flex-1 lg:flex lg:justify-end
                 lg:translate-x-20 ">
                    <img
                        src={assets.facebook_icon}
                        alt="Facebook"
                        width={30}
                        className="hover:opacity-80 transition-all duration-300 lg:w-10 lg:h-10"
                    />
                    <img
                        src={assets.twitter_icon}
                        alt="Twitter"
                        width={30}
                        className="hover:opacity-80 transition-all duration-300 lg:w-10 lg:h-10"
                    />
                    <img
                        src={assets.instagram_icon}
                        alt="Instagram"
                        width={30}
                        className="hover:opacity-80 transition-all duration-300 lg:w-10 lg:h-10"
                    />
                </div>

            </div>
        </div>



    )
}

export default Footer