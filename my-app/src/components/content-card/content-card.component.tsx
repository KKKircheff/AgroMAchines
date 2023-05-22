import React from 'react'
import './content-card.style.scss'

const ContentCard = () => {
  return (
    <div className='content-card'>
    <div className="image">here is the image</div>
    <h2 className='title'>ContentCard Title</h2>
    <h3 className="subtitle">Sub title</h3>
    <p className="content"></p>
    </div>
  )
}

export default ContentCard