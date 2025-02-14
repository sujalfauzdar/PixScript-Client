import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'

const Description = () => {
    return (
        <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mt-8 mb-8 px-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-snug">
                <span className="text-teal-600"> Smart AI </span>Image Generation
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mt-3">
                Convert imagination into <span className="font-semibold text-gray-800">high-quality visuals</span>.
            </p>
            <div className="flex flex-col items-center lg:items-start max-w-5xl mx-auto px-6 mt-12">

                {/* Heading - Centered on Small Screens, Left-Aligned on Large Screens */}
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-snug text-center lg:text-left w-full mb-6">
                    Introducing the <span className="text-orange-600">AI-Powered</span> Text-to-Image Generator
                </h2>

                <div className="flex flex-col lg:flex-row items-center gap-8 w-full">
                    {/* Image Section */}
                    <img
                        src={assets.sample_img_1}
                        alt="AI-Generated Image"
                        className="w-80 xl:w-96 rounded-bl-lg shadow-lg"
                    />

                    {/* Text Section */}
                    <div className="text-center lg:text-left">
                        <p className="text-gray-700 text-base sm:text-lg mt-2 leading-relaxed">
                            Unleash the power of artificial intelligence and transform your words into breathtaking visuals effortlessly.
                            Our AI-powered text-to-image generator allows you to create stunning, high-quality images simply by describing them.
                        </p>

                        <p className="text-gray-600 text-base sm:text-lg mt-3 leading-relaxed">
                            AI-powered text-to-image generation is based on advanced machine learning models that transform natural language
                            descriptions into visual representations.
                        </p>
                    </div>
                </div>
            </div>


        </motion.div>

    )
}

export default Description