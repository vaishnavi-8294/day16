import React from 'react'
// import cric from '../assets/vk.jpeg'
// import cric1 from '../assets/rs.jpeg'

function Cards({pic,title,desc}) {
  return (
    <div className='card'>  
    <img className="photo"src={pic}alt='photo'></img>
    <h4 className='title'>{title}</h4>
    <p className='p'>{desc}</p>
    </div>
  )
}

export default Cards