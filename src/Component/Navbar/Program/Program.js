import './Program.css';

import React from 'react'

const Program = () => {
  return (
    <div className='programs' >
      <div className='program'>
        <img src='image/program-1.png' alt=''/>
        <div className='caption'>
            <img src='image/program-icon-1.png' alt=''/>
            <p>Graduation Degree</p>
        </div>
      </div>
      <div className='program'>
        <img src='image/program-2.png' alt=''/>
        <div className='caption'>
            <img src='image/program-icon-2.png' alt=''/>
            <p>Master Degree</p>
        </div>
      </div>
      <div className='program'>
        <img src='image/program-3.png' alt=''/>
        <div className='caption'>
            <img src='image/program-icon-3.png' alt=''/>
            <p>Post Graduation Degree </p>
        </div>
      </div>
    </div>
  )
}

export default Program
