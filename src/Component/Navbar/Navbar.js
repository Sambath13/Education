import './Navbar.css'
import { Link } from 'react-router-dom';

import React, { useEffect, useState } from 'react'

const Navbar = () => {

  const [sticky, setsticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setsticky(true) : setsticky(false);
    })
  }, [])

  const [mobilemenu , setmobilemenu] = useState(false)

  const toggleMenu = ()=>{
    mobilemenu? setmobilemenu(false) : setmobilemenu (true)
  }

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <h1 className='educ'>educ<span>ation</span></h1>
      <ul className= {mobilemenu ? '' : ' hide-mobile-menu'}>
        <li> <Link to='hero' smooth={true} offset={0} duration={500} > Home </Link> </li>
        <li> <Link to='Program' smooth={true} offset={0} duration={500} >  Program </Link> </li>
        <li> <Link to='About us' smooth={true} offset={0} duration={500} >  About us </Link> </li>
        <li> <Link to='Campus' smooth={true} offset={0} duration={500} >  Campus </Link> </li>
        <li> <Link to='Testimonials' smooth={true} offset={0} duration={500} >  Testimonials </Link> </li>
        <li><button className='btn'>Contact us</button></li>
      </ul>
      <img src='image/menu-icon.png' alt='' className='menu-icon'onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar
