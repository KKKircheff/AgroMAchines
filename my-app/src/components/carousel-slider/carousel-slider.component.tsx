import React, { useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Slider from "react-slick";
import { isMobile } from 'react-device-detect';
import { renderArrowNext, renderArrowPrev, renderIndicator } from '../../utils/custom_carousel_controls';
import './carousel-slider.styles.scss';

const bodyScroll = require('body-scroll-toggle');

type SliderProps = {
  url: string[];
  isClicked: boolean;
  setIsClicked: (newValue: boolean) => void;
  setPopUpUrl: (newValue: string) => void;
};

const CarouselSlider = ({ url, isClicked, setIsClicked, setPopUpUrl }: SliderProps) => {
  const [sliderIndex, setSliderIndex] = useState(0);
  // --- Carousel  handle click
  // const handleClick = (e: number) => {
  //   console.log(url[e]);
  //   setPopUpUrl(url[e])
  //   setIsClicked(true);
  //   bodyScroll.disable();
  // }


  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    console.log(url[sliderIndex]);
    setPopUpUrl(url[sliderIndex])
    setIsClicked(true);
    bodyScroll.disable();
  }


  const sliderSettings = {
    dots: (window.innerWidth < 720),
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    afterChange: (current: number) => setSliderIndex(current),
  };

  const renderImages: () => JSX.Element[] = () => {

    return url.map((imageUrl, index) => {
      return (
        <div key={imageUrl} className='slider-image-container' onClick={(e) => handleClick(e)}>
          <img src={imageUrl} alt='поливна макра система втора употреба снимки' />
        </div>
      )
    })
  }

  return (
    <div className="carousel-slider-wrapper">

      <Slider {...sliderSettings}>
        {renderImages()}
      </Slider>


      {/* <Carousel
            renderArrowPrev={renderArrowPrev}
            renderArrowNext={renderArrowNext}
            renderIndicator={renderIndicator}
            axis={'horizontal'}
            infiniteLoop={true}
            emulateTouch={true}
            showThumbs={false}
            swipeable={true}
            showStatus={false}
            showArrows={!isMobile}
            onClickItem={handleClick}
          >{renderImages()}
          </Carousel> */}

    </div>
  )
}
export default CarouselSlider