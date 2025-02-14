import React from 'react'
import { stepsData } from '../assets/assets'
import { motion } from 'framer-motion'

const Steps = () => {
    return (
        <motion.div initial={{ opacity: 0, y: 100 }}  // Starts invisible & lower
        whileInView={{ opacity: 1, y: 0 }} // Animates when scrolled into view
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
         className="text-center py-10 px-4">
            {/* Title */}
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
                Our  <span className="text-teal-600">Methodology</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-lg mx-auto mb-8">
                Seamlessly convert your words into striking visuals.
            </p>

            {/* Steps Container */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto px-4">
                {stepsData.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center text-center bg-white shadow-lg rounded-2xl p-6 border border-neutral-300 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                    >
                        {/* Step Icon */}
                        <div className=" p-4 rounded-full">
                            <img
                                src={item.icon}
                                alt=""
                                className="w-16 h-16"
                            />
                        </div>

                        {/* Step Title */}
                        <h2 className="text-2xl font-semibold text-gray-900 mt-4 mb-2">
                            {item.title}
                        </h2>

                        {/* Step Description */}
                        <p className="text-gray-600 text-base leading-relaxed">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>

        </motion.div>


    )
}

export default Steps