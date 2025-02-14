import React from 'react'
import { assets, testimonialsData } from '../assets/assets'
import { motion } from 'framer-motion'

const Testimonials = () => {
  return (
    <motion.div 
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true }}
     className="text-center max-w-3xl mx-auto mt-12 mb-12 px-6">
    
    {/* Section Title */}
    <h1 className="text-3xl font-bold text-gray-900 mb-3
    ">
        Customer Testimonials
    </h1>
    
    <p className="text-lg text-gray-600 mb-8">
        What Our Users Say
    </p>

    {/* Testimonials Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {testimonialsData.map((testimonial, index) => (
            <div 
                key={index} 
                className="bg-white border border-neutral-200 shadow-md rounded-xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg
                "
            >
                {/* Avatar */}
                <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="rounded-full w-16 h-16 mb-4 border-2 border-neutral-700"
                />

                {/* Name & Role */}
                <h2 className="text-xl font-semibold text-gray-900
                ">
                    {testimonial.name}
                </h2>
                <p className="text-gray-500 text-sm mb-2">
                    {testimonial.role}
                </p>

                {/* Star Ratings */}
                <div className="flex gap-1 my-2">
                    {Array(testimonial.stars).fill().map((_, index) => (
                        <img 
                            key={index} 
                            src={assets.rating_star} 
                            alt="Star" 
                            className="w-5 h-5"
                        />
                    ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 text-base leading-relaxed">
                    {testimonial.text}
                </p>
            </div>
        ))}
    </div>
</motion.div>

  )
}

export default Testimonials