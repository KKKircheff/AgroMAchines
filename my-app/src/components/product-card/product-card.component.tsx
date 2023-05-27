import React, { Component } from 'react';
import { isMobile } from 'react-device-detect';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


import './product.card.style.scss';

type CardProps = {
  url: string,
  title: string,
  subtitle: string,
  content: string,
  imgSide: 'left' | 'right',
}

const ProductCard = ({ url, title, subtitle, content, imgSide }: CardProps) => {

  return (
    <div className={`product-card ${imgSide}`} data-aos="fade-in">
      <div className="carousel-wrapper">
        <Carousel
          emulateTouch={isMobile}
          showThumbs={false}
          swipeable={isMobile}
          showStatus={false}
          showArrows={!isMobile}
        >
          <div className='test-div'>
            <img src={url} alt='поливна макра / система втора употреба снимки' />
            {/* <p className="legend">Legend 1</p> */}
          </div>
          <div>
            <img src={url} alt='поливна макра / система втора употреба снимки' />
            {/* <p className="legend">Legend 2</p> */}
          </div>
          <div>
            <img src={url} alt='поливна макра / система  втора употреба снимки' />
            {/* <p className="legend">Legend 3</p> */}
          </div>
        </Carousel>
      </div>
      <div className="content-section" data-aos="fade-down" >
        <div className="title-group">
          <h2 className='title'>Макара за напояване</h2>
          <h2 className='subtitle'>Mарка: {title}</h2>
          <h3 className="subtitle">Помпа:  {subtitle}</h3>
        </div>
        <h4>Описане:</h4>
         <p className="content">{content}</p>
      </div>
    </div>
  )
}

export default ProductCard