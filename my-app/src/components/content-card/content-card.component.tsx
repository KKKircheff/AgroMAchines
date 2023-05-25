import React from 'react';
import './content-card.style.scss';
import '../../links-object.json';

type CardProps = {
  linkName: string,
  title: string,
  subtitle: string,
  content: string,
  imgSide: 'left'|'right',
}

const ContentCard = ({ linkName, title, subtitle, content, imgSide }: CardProps) => {
  
  
  return (
    <div className={`content-card ${imgSide}`}>
      <img src={linkName} alt="irrigation reel tumbnail" />
      <div className="content-sectrion">
        <h2 className='title'>{title}</h2>
        <h3 className="subtitle">{subtitle}</h3>
        <p className="content">{content}</p>
      </div>
    </div>
  )
}

export default ContentCard