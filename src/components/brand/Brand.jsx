import React, { Component } from 'react'
import './brand.css'
import Smallchicken from './JB BG 2 small.png'
class Brand extends Component {
  render(){
  return (
    <div className='BG__brand'>
      <div className='brand_container'>
      <div className='tag-line'>
        <h1 className='text'>Bringing joy to you</h1>
        <h2 className='text'>Have your Jollibee favorites delivered right to your doorstep</h2>
        <td>
        <button className='order'>Order Now</button>
        </td>
        </div>
        {/* <img id='brandimg'src={Smallchicken} alt=''/> */}
        
        
        {/* <picture>
          <source media='(max-width: 600px)' alt='bucket of chicken' srcSet='./JB BG 2 small.png'/>
          <img  src='./JB BG 2 small.png'srcSet='./JB BG 2 small.png' width='20rem' alt=''/>
          </picture>  */}
      </div>
      </div>
       
      
  ) 
}}

export default Brand