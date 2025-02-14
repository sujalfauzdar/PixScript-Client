import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { motion } from "motion/react"
import { delay } from 'motion'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const {user,setshowLogin} = useContext(AppContext)
    const navigate = useNavigate()

    const onClickHandler = () =>{
        if(user){
            navigate('/result')
        }
        else{
            setshowLogin(true)
        }
        

    }
    return (
        <motion.div className="flex flex-col justify-center items-center py-8 px-4"
            initial={{ opacity: 0.2, y: 100 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >


            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{delay:0.1, duration: 0.8 }}
                className="relative bg-teal-50 shadow-lg rounded-2xl px-4 py-3 md:px-6 md:py-4 flex items-center gap-3 border border-gray-300 transition-all duration-300 hover:scale-105 w-full max-w-md">

                <div className="absolute -top-2 -left-2 bg-teal-200 w-5 h-5 rounded-full"></div>
                <div className="absolute -bottom-2 -right-2 bg-teal-200 w-3 h-3 rounded-full"></div>


                <p className="text-gray-900 text-lg md:text-xl font-semibold tracking-wide text-center">
                    Generate images in seconds with stunning details.
                </p>


                <img src={assets.star_icon} alt="Star Icon" className="w-7 h-7 md:w-8 md:h-8 drop-shadow-lg animate-pulse" />
            </motion.div>


            <div className="text-center mt-4 px-4">
                <motion.h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight"
                 initial={{opacity:0}}
                 animate = {{opacity :1}}
                 transition = {{ delay : 0.4,duration:2}}>
                    Turn text into <span className="text-teal-600">images</span> in seconds
                </motion.h1>
                <motion.p className="text-gray-700 text-base sm:text-lg md:text-xl mt-3 max-w-lg sm:max-w-xl md:max-w-2xl mx-auto leading-normal sm:leading-relaxed"
                 initial={{opacity:0,y:20}}
                 animate = {{opacity :1,y:0}}
                 transition = {{ delay : 0.6,duration:0.8}}
                 >
                    Transform your words into
                    <span className="font-bold"> stunning visuals </span>
                    with AI. Whether you need "artistic designs, realistic photos, or unique digital illustrations",
                    our advanced generator creates high-quality images from text in an instant.
                    <span className="font-bold text-gray-800"> Unleash your creativity like never before! </span>
                </motion.p>


                <div className="flex justify-center mt-6">
                    <motion.button onClick={onClickHandler} className="flex items-center gap-3 bg-black hover:bg-teal-500 text-white font-semibold text-lg md:text-xl px-8 py-4 rounded-2xl shadow-xl transition-all duration-300 "
                    whileHover={{scale:1.05}}
                    whileTap={{scale:0.95}}
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{default:{duration:0.5},opacity:{delay:0.8,duration:1}}}

                     >
                        Generate Images
                        <img src={assets.star_group} alt="Star Icon" className="w-7 h-7 md:w-8 md:h-8 drop-shadow-lg animate-pulse" />
                    </motion.button>
                </div>

                <motion.div
                initial={{opacity:0}}
                animate={{opacity :1}}
                transition={{delay:1,duration:1}}

                 className="flex flex-wrap gap-3 justify-center mt-12">
                    {Array(6).fill().map((item, index) => (
                        <motion.img
                        whileHover={{scale:1.05,duration:0.1}}
                            className="rounded hover:scale-105 transition-transform duration-300"
                            src={index % 2 === 0 ? assets.sample_img_2 : assets.sample_img_1}
                            alt=""
                            key={index}
                            width={70}
                        />
                    ))}
                </motion.div>
                <motion.p 
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{delay:1.2,duration:0.8}}
                className='mt-2 text-neutral-600'>Generated Images from Pixscript</motion.p>


            </div>



        </motion.div>


    )
}

export default Header