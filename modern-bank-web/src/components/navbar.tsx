import React, {useState} from 'react'
import {assets} from '../assets'
import { navLinks } from '../constants'

const Navbar = () => {

  const [toggle,setToggle] = useState<boolean>(false)
  return (
    <nav className='w-full flex p-6 items-center justify-between navbar '>
      <img src={assets.logo} alt='LogoImage' className=' w-[124px] h-[32px]'/>
      <ul className='list-none sm:flex hidden justify-end items-center flex-1 text-white'>
        {navLinks.map((nav,index)=> (
          <li key={nav.id} className='font-poppins cursor-pointer me-10'><a href={`#${nav.id}`}>{nav.title}</a></li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img src={toggle ? assets.close : assets.menu} 
        alt="menu-icon" className='w-[28px] h-[28px] object-contain cursor-pointer' 
        onClick={()=>setToggle((prev) => !prev)} />
      </div>

      <div className={`${toggle ? 'flex':'hidden'} p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>

        <ul className='list-none flex flex-col justify-end items-center flex-1 text-white'>
          {navLinks.map((nav,index)=> (
            <li key={nav.id} className='font-poppins cursor-pointer mb-4'><a href={`#${nav.id}`}>{nav.title}</a></li>
          ))}
        </ul>
      </div>
    
      
    </nav>
  )
}

export default Navbar
