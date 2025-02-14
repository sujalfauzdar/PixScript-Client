import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'
import axios from 'axios'
import { AppContext } from '../context/AppContext'
import { toast } from 'react-toastify'

const Login = () => {
  const [state, setState] = useState('Login')
  const { setshowLogin,backendUrl,setToken,setUser } = useContext(AppContext)

  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

   const onSubmitHandler = async(e) =>{
    e.preventDefault();

    try {
      if (state === 'Login'){
        const {data} = await axios.post(backendUrl + '/api/user/login',{email,password}) 
        if(data.success){
          setToken(data.token)
          setUser(data.user)
          localStorage.setItem('token', data.token)
          setshowLogin(false)
        }
        else{
          toast.error(data.message)
        }   

      } else{
        const {data} = await axios.post(backendUrl + '/api/user/register',{name,email,password}) 
        if(data.success){
          setToken(data.token)
          setUser(data.user)
          localStorage.setItem('token', data.token)
          setshowLogin(false)
        }
        else{
          toast.error(data.message)
        } 
      }




    } catch (error) {
      toast.error(error.message)
      
    }


   }



  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    }
  }, [])


  return (
    <div className="fixed inset-0 flex items-center justify-center  bg-opacity-70 backdrop-blur-sm z-50">
      <motion.form onSubmit={onSubmitHandler}
        key={state}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{
          duration: 0.8,
          ease: [0.17, 0.67, 0.83, 0.67],
          type: "spring",
          stiffness: 120,
          damping: 15
        }}
        className="bg-yellow-50 rounded-xl shadow-lg p-6 sm:p-8 w-full max-w-xs sm:max-w-md lg:max-w-lg relative">

        {/* Close Button */}
        <button onClick={() => setshowLogin(false)}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 transition">
          ✖
        </button>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center flex flex-col items-center">
          <img src={assets.login_icon} alt="" className="w-8 h-8 mb-2"/>
          {state}
        </h1>

        <p className="text-gray-600 text-sm sm:text-base text-center mt-1">Welcome back! Please sign in to continue.</p>

        {/* Input Fields */}
        <div className="mt-6 space-y-4">

          {/* Full Name */}
          {state != 'Login' &&
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700">Full Name</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 transition-all"
                  >
                    <path d="M12 2a5 5 0 1 1-5 5 5 5 0 0 1 5-5zm0 7a3 3 0 1 0-3-3 3 3 0 0 0 3 3zm-7 11a7 7 0 1 1 14 0H5z" />
                  </svg>
                </span>
                <input onChange={e=> setName(e.target.value)} value={name} type="text" placeholder="Enter your name" required className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
              </div>
            </div>}

          {/* Email Address */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700">Email Address</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6   transition-all"
                >
                  <path d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6zm2 0v12h16V6H4zm8 6.75L4.5 7.5 3 9l9 6 9-6-1.5-1.5-7.5 5.25z" />
                </svg>
              </span>
              <input onChange={e=> setEmail(e.target.value)} value={email} type="email" placeholder="Enter your email" required className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700">Password</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 transition-all"
                >
                  <path d="M12 2a5 5 0 0 1 5 5v3h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h1V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v3h6V7a3 3 0 0 0-3-3zm0 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />
                </svg>
              </span>
              <input onChange={e=> setPassword(e.target.value)} value={password} type="password" placeholder="Enter your password" required className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>
          </div>
        </div>

        {/* Login Button */}
        <button 
         className="w-full bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold py-3 rounded-lg shadow-md hover:opacity-90 transition-all mt-6"
         type='submit'>
          {state === 'Login' ? 'Login ' : 'Create Account'}
        </button>

        {/* Links */}
        <div className="flex justify-between mt-4 text-sm sm:text-base text-gray-600">
          <a href="#" className="hover:underline">Forgot Password?</a>
          {state === 'Login' ?
            <p className="hover:underline">Don't have an account ?<span className='text-blue-600'
              onClick={() => setState('Sign Up')}> Sign Up </span></p>
            :
            <p className="hover:underline">Already have an account ?<span className='text-blue-600'
              onClick={() => setState('Login')}> Login </span></p>}
        </div>
      </motion.form>
    </div>


  )
}

export default Login