import React from 'react'
import './cta.css'

const Cta = () => {
  return (
    <div className='BG__CTA'>
      <div className='CTA_container'>
        
            <div className='cta_card'>
          <img src='https://queen.jollibee.com.ph/2021/12/order_pickup-150x150.png' alt= 'Hand holding a phone trying to order'/>
          <span className='texts'>Order & Pick Up</span>  
          </div>
          <div className='cta_card'>
          <img src='https://queen.jollibee.com.ph/2021/12/download_app-150x150.png' alt='Hand holding a phone using the app'/>
          
           <span className='texts'>
            Download the App
            </span>
            </div>
            <div className='cta_card'>
          <img src='https://queen.jollibee.com.ph/2021/12/8700-150x150.png' alt='Hand holding a phone using the telephone'/>
          <span className='texts'>
          Dial #8700
          </span>
          </div>
           
          </div>
          <hr className='line-break'></hr>
          </div>
      
    
  )
}

export default Cta