import { useContext, useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import viteLogo from '/vite.svg'
import './index.css'
import Home from './pages/Home'
import Result from './pages/Result'
import BuyCredit from './pages/BuyCredit'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './components/Login'
import { AppContext } from './context/AppContext'



const  App =()  =>{

  const{showLogin} = useContext(AppContext)


  return (
    <>
      <div className='px-4 sm:px-10 md:px-14 lg:px-18 
      min-h-screen bg-gradient-to-b from-teal-100 to bg-orange-50'>
        <ToastContainer position='bottom-right'/>

        <Navbar/>
        { showLogin &&
          <Login/>}

      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/result' element={<Result/>}/>
      <Route path='/buycredit' element={<BuyCredit/>}/>


      </Routes>
      <Footer/>

      </div>

    </>
  )
}

export default App
