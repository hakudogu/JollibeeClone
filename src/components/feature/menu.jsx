import React from 'react'

function Menu() {
    const items =[{
        title: 'Chickenjoy Bucket',
        description: 'Philippines best tasting crispylicious, juicylicious.',
        image: <img id='cjoy' src='https://queen.jollibee.com.ph/2021/12/chickenjoy.png'/>
    },
        {title: 'Spaghetti Pan',
        description: 'The meatiest, cheesiest, and sweet sarap Jolly Spaghetti!',
        image: <img id='spag' src='https://queen.jollibee.com.ph/2022/02/CSyirkKq-Jolly-Spaghetti-Pan_750x750-v4-300x207.png'/>
    },
        {
            title:'Yumburger',
            description:'Your favorite 100% Beefy Langhap-sarap Burgers.',
            image: <img id='yum' src='https://queen.jollibee.com.ph/2021/12/burger.png'/>
        } ,   
        {
            title:'Burger Steak',
            description:'100% Pure beef patty with a hearty serving of flavorful mushroom gravy',
            image: <img id='b_steak'src ='https://queen.jollibee.com.ph/2022/02/LnnuI5ic-1pc-bsteak-300x174.png'/>
        }  

]
const listItems= items.map((item)=>
        
                
        <div className='feature_container'  key={item.title}>
            <h2 className='card'>{item.title}</h2>
            <p className='card'>{item.description}</p>
            {item.image}
        </div>
            
)

  return (
    <div className='Background'>
        <h1>Featured Items</h1>
    <div className='BG__Feature'>
    
        {listItems}          
        </div>
        <a href='/'>
        <button id='view-menu'>View Menu</button> 
        </a>
        <hr/>
    </div>
    
    
  )
}

export default Menu