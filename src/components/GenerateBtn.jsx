import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const GenerateBtn = () => {

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
        <motion.div
            initial={{ opacity: 0, rotateY: 90 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mt-12">
            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl font-bold text-black leading-snug mb-6">
                Your words, our vision—<span className="text-teal-600">create something amazing!</span>
            </h1>

            {/* Call to Action Button */}
            <button onClick={onClickHandler}
            className="relative bg-black text-white text-lg font-semibold px-6 py-3 rounded-full flex items-center gap-3 mx-auto shadow-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-teal-500
             mt-14">
                Generate Images
                <img src={assets.star_group} alt="" className="h-6 animate-pulse" />
            </button>

        </motion.div>

    )
}

export default GenerateBtn