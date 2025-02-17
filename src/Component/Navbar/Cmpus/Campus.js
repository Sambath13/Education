import './Campus.css'

import React from 'react'

const Campus = () => {
  return (
    <div className='campus'>
      <div className='gallery'>
        <img src='image/gallery-1.png' alt=''></img>
        <img src='image/gallery-2.png' alt=''></img>
        <img src='image/gallery-3.png' alt=''></img>
        <img src='image/gallery-4.png' alt=''></img>
      </div>
      <button className='btn'>See More Here <img src='white-arrow.png' alt='' /> </button>
    </div>
  )
}

export default Campus
