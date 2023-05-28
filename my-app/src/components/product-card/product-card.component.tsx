import React, { useState } from 'react';
import { isMobile } from 'react-device-detect';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { renderArrowNext, renderArrowPrev, renderIndicator } from '../../utils/custom_carousel_controls';
import './product.card.style.scss';
import { useEffect } from 'react';
import { GiWaterRecycling } from 'react-icons/gi'
import AOS from 'aos';
import PopUpImage from '../pop-up-image/pop-up-image.component'

type CardProps = {
  url: string[],
  mainTitle: string;
  title: string,
  subtitle: string,
  content: string,
  price: number,
  imgSide: 'left' | 'right',
}

const ProductCard = ({ url, mainTitle, title, subtitle, content, price, imgSide }: CardProps) => {

  const [isClicked, setIsClicked] = useState(false);
  const [popUpUrl, setPopUpUrl] = useState('');
 
  const handleClick = (e: number) => {
    console.log(url[e]);
    setPopUpUrl(url[e])
    setIsClicked(true);
  }

  useEffect(() => {
    AOS.init({ duration: 800 });
    AOS.refresh();
  }, [isClicked]);

  return (
  <section>
    {isClicked
     ? <PopUpImage
      url={popUpUrl}
      isClicked={isClicked}
      setIsClicked={setIsClicked}
    />
    :<div></div>
    }
    <div className={`product-card ${imgSide}`} data-aos='fade-in'>
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
          onClickItem={handleClick}
        >
          {
            url.map((imageUrl, index) => {
              return (<div
                key={index}
                className='test-div'>
                <img src={imageUrl} alt='поливна макра / система втора употреба снимки' />
                {/* <p className="legend">Legend 1</p> */}
              </div>
              )
            })
          }
        </Carousel>
      </div>

      <div className="content-section">
        <div className="top-banner-title-section" data-aos="fade-right">
          <p>избрана оферта</p>
          </div>
        <div className="top-banner-icon-section" data-aos="fade-left">
          <p><GiWaterRecycling /></p>
          </div>
        <div className="title-group" data-aos="fade-top">
          <h2 className='title'>{mainTitle}</h2>
          <h2 className='subtitle'>Mарка: <span>{title}</span></h2>
          <h2 className="subtitle">Помпа: <span>{subtitle}</span></h2>
        </div>
        <h4>Цена: <span>{price} лева</span> </h4>
        <p className="content">{content}</p>
      </div>

    </div>
  </section>
  )
}

export default ProductCard