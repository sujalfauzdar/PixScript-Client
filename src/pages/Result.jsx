import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'
import { AppContext } from '../context/AppContext'

const Result = () => {

  const [image, setImage] = useState(assets.sample_img_3)
  const [isImageLoaded, setisImageLoaded] = useState(false)
  const [loading, setLoading] = useState(false)
  const [input, setInput] = useState('')

  const {generateImage} = useContext(AppContext)

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    setLoading(true)

    if(input){
      const image = await generateImage(input)
      if(image){
        setisImageLoaded(true)
        setImage(image)

      }
    }

    setLoading(false)

  }


  return (
    <motion.form onSubmit={onSubmitHandler}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true }}
      className="flex flex-col items-center justify-center space-y-6 md:space-y-8 lg:space-y-10 
    bg-gradient-to-b from-teal-200 to-orange-100 p-6 sm:p-8 md:p-10 lg:p-12 
    rounded-lg shadow-md w-full max-w-5xl mx-auto">

      {/* Image Preview Section */}
      <div className="relative flex flex-col items-center w-full">
        <img
          src={image}
          alt="Sample Preview"
          className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-md"
        />




        {loading && (
          <div className="flex flex-col items-center justify-center gap-2 mt-6 text-gray-800 text-sm">
            {/* SVG Loader */}
            <svg
              className="animate-spin h-6 w-6 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M12 2A10 10 0 002 12h2a8 8 0 018-8V2z"
              />
            </svg>
            <p>Loading...</p>
          </div>
        )}
      </div>

      {!isImageLoaded &&
        <div className="w-full max-w-3xl flex flex-col sm:flex-row gap-4 sm:gap-3 items-center 
      mb-28 lg:bg-neutral-100 lg:rounded-lg lg:shadow-lg lg:p-5 transition-all duration-300">


          <input
            type="text"
            placeholder="Describe what you want to generate"
            onChange={e => setInput(e.target.value)}
            value={input} // If undefined or null, placeholder won't work
            className="w-full px-4 py-3 text-gray-800 bg-white border border-gray-300 rounded-lg 
  shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 
  sm:flex-1 lg:rounded-l-lg lg:rounded-r-none lg:border-r-0"
          />

          <button
            type="submit"
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-teal-500 text-black 
        font-semibold rounded-lg shadow-md hover:opacity-90 transition-all duration-300
        lg:rounded-r-lg lg:rounded-l-none lg:border-l border-white lg:-ml-1"
          >
            Generate
          </button>

        </div>
      }


      {isImageLoaded &&
        <div className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-3 sm:gap-4 md:gap-6 w-full max-w-3xl">

          {/* Generate Another Button */}
          <button onClick={() => { setisImageLoaded(false) }}
            className="px-6 py-3 text-white bg-gradient-to-r from-blue-500 to-teal-500 
        font-semibold rounded-lg shadow-md cursor-pointer transition-all duration-300 
        hover:opacity-90 text-sm sm:text-base md:text-lg w-full sm:w-auto text-center">
            Generate Another
          </button>

          {/* Download Link */}
          <a href={image} download className="px-6 py-3 text-blue-600 font-semibold bg-white border border-blue-500 
        rounded-lg shadow-md hover:bg-blue-500 hover:text-white transition-all duration-300 
        text-sm sm:text-base md:text-lg w-full sm:w-auto text-center">
            Download
          </a>

        </div>}

    </motion.form>


  )
}

export default Result