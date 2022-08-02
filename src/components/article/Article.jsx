import React from 'react'
import styles from './Article.css'

const Article = () => {
  const details = [
    {image: <img id='crew' alt='Jollibee crew'src='https://queen.jollibee.com.ph/2022/05/what_we_stand_for.webp'/>,
     headline: 'What We Do',
     tag: 'Jollibee\'s Mission is to serve great-tasting food, bringing the joy of eating to everyone. '

  },
    {
      image: <img id='family'alt='Family eating'src='https://queen.jollibee.com.ph/2021/12/what_we_do.png'/>,
      headline: 'What We Stand For',
      tag: 'Jollibee is a family-centric brand that promotes family values and togetherness and espouses Filipino pride'
    }]
const listItems = details.map((item)=> 

<li className='article_list'>
        <td className='article_text'>{item.image}</td>
        <span>
        <h1 className='article_text'>{item.headline}</h1></span>
        <span> <p className='article_text'>{item.tag}</p></span>
        
         </li>
        
  )

  
  return (
    <div className='BG__Article'>
    <div className='BG__container'>
    
<div className='image_container'>
      {listItems}
    </div>
    </div>
 </div> 
 )
}

export default Article