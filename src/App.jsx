import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Route ,Routes} from 'react-router-dom'
import Homepage from './components/home page/Index.jsx'
import Login from './components/login page/Index'
import Offerspage from './components/offers page/Index'
import Resto1 from '../src/components/Restaurants/Resto1'
import Resto2 from '../src/components/Restaurants/Resto2'
import Resto from '../src/components/Restaurants/RestautantPage'
import LoginPage from '../src/components/login page/Login'
import SignupPage from '../src/components/login page/Signup'
import Otpverify from '../src/components/login page/OtpVerification'
import GroupOrder from '../src/components/Group Order/GroupOrderPage'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/Offerspage" element={<Offerspage/>}/>
      <Route path="/restaurant/1" element={<Resto1/>}/>
      <Route path="/restaurant/2" element={<Resto2/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/signup" element={<SignupPage/>}/>
      <Route path="/otpverify" element={<Otpverify/>}/>
      <Route path="/grouporder" element={<GroupOrder/>}/>

      <Route path="/Resto" element={<Resto/>}/>
    </Routes>
  )
}

export default App
