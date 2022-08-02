import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    
    <div className='footer_background'>
      <div className='container'>
        <div className='logo_button'>
        <img className='Jolly_logo'src='https://queen.jollibee.com.ph/2022/02/jollibee-logo-footer-2x.png' alt='jollibee logo'/>
        <button>Order Now</button>
        </div>
        </div>
        <div className='gplay_appstore'>
          {/* <img src='https://queen.jollibee.com.ph/2022/01/Google-Play-Badge.png'/>
          <img src='https://queen.jollibee.com.ph/2022/01/Apple-Store-Badge.png'/> */}
        </div>
        <div className='gplink_container'>
        <div className='group_container'>
        <h1>How To Order</h1>
        <a href='/'>View Menu</a>
        <a href='/'>Delivery</a>
        <a href='/'>Multi-Delivery</a>
        <a href='/'>Locations</a>
        </div>
        <div className='group_container'>
        <h1>Promotions</h1>
        <a href='/'>Promos</a>
        <a href='/'>Gift Cards</a>
        </div>
        <div className='group_container'>
        <h1>About Us</h1>
        <a href='/'>About Jollibee</a>
        <a href='/'>Safety</a>
        <a href='/'>Investors</a>
        <a href='/'>Franchising</a>
        <a href='/'>Careers</a>
        <a href='/'>Jollibee Group Foundation</a>
        <a href='/'>Contact Us</a>
        <a href='/'>Rate Our Stores</a>
        </div>
        <div className='group_container'>
        <h1>About Our Website</h1>
        <a href='/'>Privacy Policy</a>
        <a href='/'>Terms & Conditions</a>
        <a href='/'>Accessibility</a>
         </div>
        </div>
        </div>
    
  )
}

export default Footer