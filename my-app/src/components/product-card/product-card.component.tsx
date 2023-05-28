import React, {CSSProperties} from 'react';
import { isMobile } from 'react-device-detect';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { renderArrowNext, renderArrowPrev, renderIndicator } from '../../utils/custom_carousel_controls';
import './product.card.style.scss';
import { useEffect } from 'react';
import {GiWaterRecycling} from 'react-icons/gi'
import AOS from 'aos';


type CardProps = {
  url: string,
  title: string,
  subtitle: string,
  content: string,
  imgSide: 'left' | 'right',
}

const ProductCard = ({ url, title, subtitle, content, imgSide }: CardProps) => {

  useEffect(() => {
    AOS.init({ duration: 900 });
    AOS.refresh();
  }, []);

   console.log(isMobile);
  return (
    <div className={`product-card ${imgSide}`} data-aos="fade-in">
      <div className="carousel-wrapper">
        <Carousel
          renderArrowPrev={renderArrowPrev}
          renderArrowNext={renderArrowNext}
          renderIndicator={renderIndicator}
          emulateTouch={true}
          showThumbs={false}
          swipeable={true}
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
        <div className="top-banner-title-section" data-aos="fade-right"><span>избрана оферта</span></div>
        <div className="top-banner-icon-section" data-aos="fade-left"><span><GiWaterRecycling /></span></div>
        <div className="title-group">
          <h2 className='title'>Макара за напояване</h2>
          <h2 className='subtitle'>Mарка: <span>{title}</span></h2>
          <h3 className="subtitle">Помпа: <span>{subtitle}</span></h3>
        </div>
        <h4>Описане:</h4>
         <p className="content">{content}</p>
      </div>
    </div>
  )
}

export default ProductCard