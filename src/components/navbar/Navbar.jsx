// import Button  from '@mui/material/Button'
import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <div className= 'navbar_BG'>
    < div className='navbar'>
      <div>
        <a target='_blank'href='https://www.jollibee.com.ph/delivery'>
          <img alt= 'Jollibee logo' id='Jollibee-logo'src='https://queen.jollibee.com.ph/2022/06/2P68rdrp-jollibee-logo-2x.png'/>
        </a>
        </div>
       <div className='padding'></div>
        <div className='buttons'>
          <a href='/'>
        <button className='button'
        >Delivery</button></a>
        <a href='/'>
        <button className='button'
        font-family= 'valera round'
        >Location</button></a>
        <a href='/'>
        <button className='button'
        font-family= 'valera round'
        >Menu</button></a>
        
        <button className='button'id='order-btn'>Order Now</button>        
        </div>
        <div media='(max-width:790px)'><hr/><hr/><hr/></div>
    </div>
    </div>

  )
}

export default Navbar