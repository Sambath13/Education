import './Title.css';

import React from 'react'

const Title = ({subtitle , Title}) => {
  return (
    <div className='title'>
      <p>{subtitle} </p>
      <h2> {Title}</h2>
    </div>
  )
}

export default Title
