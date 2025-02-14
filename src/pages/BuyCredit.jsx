import React, { useContext } from 'react'
import { assets, plans } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'


const BuyCredit = () => {



  const { user, backendUrl, loadCreditsData, token, setshowLogin, } = useContext(AppContext)

  const navigate = useNavigate()

  const initpay = async (order) => {

    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: 'Credits Payment',
      description: 'Credits Payment',
      order_id: order.id,
      receipt: order.receipt,
      handler: async (response) => {
        try {

          const {data} = await axios.post(backendUrl + '/api/user/verify-razor',response,{headers:{token}})

          if(data.success){
            loadCreditsData();
            navigate('/')
            toast.success('Credit Added Succesfully')
          }

        } catch (error) {
          toast.error(error.message)
        }

      }
    }

    const rzp = new window.Razorpay(options)
    rzp.open()

  }

  const paymentRazorpay = async (planId) => {
    try {

      if (!user) {
        setshowLogin(true)
      }
      const { data } = await axios.post(backendUrl + '/api/user/pay-razor', { planId }, { headers: { token } })

      if (data.success) {

        initpay(data.order)
      }

    } catch (error) {
      toast.error(error.message)
    }

  }



  return (
    <motion.div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-teal-200 to-yellow-100
    rounded-xl py-12 px-6"
      initial={{ opacity: 0, x: window.innerWidth > 1024 ? 50 : 0, y: window.innerWidth <= 1024 ? -50 : 0 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}>

      {/* Header */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-8">
        Our Plans
      </h2>

      {/* Plans Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl mx-auto py-12 px-6">
        {plans.map((item, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center bg-white/80  
                 border border-gray-300 rounded-2xl shadow-lg p-6 sm:p-8 md:p-10 lg:p-12 
                 transition-all duration-500 transform hover:scale-[1.08] hover:shadow-2xl 
                  border-gradient"
          >
            {/* Gradient Border Effect */}
            <div className="absolute inset-0 rounded-2xl border-2 border-transparent "></div>

            {/* Logo */}
            <img src={assets.logo_icon} alt="Logo" className="w-16 h-16 mb-4 transition-transform duration-300 hover:scale-110" />

            {/* Plan Name */}
            <p className="text-lg sm:text-xl font-semibold text-gray-900">{item.id}</p>

            {/* Plan Description */}
            <p className="text-gray-600 text-sm sm:text-base mt-2 text-center">{item.desc}</p>

            {/* Price & Credits */}
            <p className="mt-4 text-gray-700 text-lg sm:text-xl font-medium">
              <span className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-500">
                ₹{item.price}
              </span>
              <span className="text-sm sm:text-base text-gray-500"> / {item.credits} Credits</span>
            </p>

            {/* Button */}
            <div className="mt-6">
              <button onClick={() => paymentRazorpay(item.id)} className="relative px-8 py-3 bg-black text-white font-semibold rounded-lg shadow-lg 
                   transition-all duration-300 hover:bg-gradient-to-r from-blue-500 to-teal-500 
                   hover:shadow-xl group">
                {user ? 'Purchase' : 'Get Started'}
                <span className="absolute inset-0 bg-white opacity-10 rounded-lg blur-md"></span>
              </button>

            </div>
          </div>
        ))}
      </div>


    </motion.div>
  )
}

export default BuyCredit