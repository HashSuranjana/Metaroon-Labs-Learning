import React, {useState} from 'react'
import {assets} from '../assets'
import { navLinks } from '../constants'

const Navbar = () => {
  return (
    <nav className='w-full flex p-6 items-center justify-between navbar '>
      <img src={assets.logo} alt='LogoImage'/>
    </nav>
  )
}

export default Navbar
