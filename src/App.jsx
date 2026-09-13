import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from './components/Signuppage'
import Home from './components/Home'

const App = () => {
  return (
    <div>
      <Routes>
      <Route path='/signup' element={<Signup />} />
        <Route path='/' element={<Home />} />
     
      </Routes>
    </div>
  )
}

export default App