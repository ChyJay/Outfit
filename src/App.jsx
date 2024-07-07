import React from 'react'
import { Navbar } from './Components/Navbar'
import { About } from './Components/About'
import { Catergories } from './Components/Categories'

export const App = () => {
  return (
    <div>
      <Navbar />
      <About />
      <Catergories />
     
    </div>
  )
}
