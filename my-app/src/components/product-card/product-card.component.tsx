import React, {CSSProperties} from 'react';
import { isMobile } from 'react-device-detect';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { renderArrowNext, renderArrowPrev, renderIndicator } from '../../utils/custom_carousel_controls';
import './product.card.style.scss';

type CardProps = {
  url: string,
  title: string,
  subtitle: string,
  content: string,
  imgSide: 'left' | 'right',
}

const ProductCard = ({ url, title, subtitle, content, imgSide }: CardProps) => {

//   const arrowStyles: CSSProperties = {
//     position: 'absolute',
//     zIndex: 2,
//     top: 'calc(50% - 15px)',
//     width: 30,
//     height: 30,
//     cursor: 'pointer',
// };

// const indicatorStyles: CSSProperties = {
//     background: '#fff',
//     width: 8,
//     height: 8,
//     display: 'inline-block',
//     margin: '0 8px',
// };

// const renderArrowPrev = (onClickHandler: () => void, hasPrev: boolean, label: string): React.ReactNode => {
//   return hasPrev ? (
//     <button type="button" onClick={onClickHandler} title={label} style={{ ...arrowStyles, left: 15 }}>
//       <SlArrowLeft />
//     </button>
//   ) : null;
// };
// const renderArrowNext = (onClickHandler: () => void, hasNext: boolean, label: string): React.ReactNode => {
//   return hasNext ? (
//     <button type="button" onClick={onClickHandler} title={label} style={{ ...arrowStyles, left: 15 }}>
//       <SlArrowRight />
//     </button>
//   ) : null;
// };

// const renderIndicator = (
//   onClickHandler: (e: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>) => void,
//   isSelected: boolean,
//   index: number,
//   label: string
// ): React.ReactNode => {
//   if (isSelected) {
//     return (
//       <li
//         style={{ ...indicatorStyles, background: '#000' }}
//         aria-label={`Selected: ${label} ${index + 1}`}
//         title={`Selected: ${label} ${index + 1}`}
//       />
//     );
//   }
//   return (
//     <li
//       style={indicatorStyles}
//       onClick={onClickHandler}
//       onKeyDown={onClickHandler}
//       value={index}
//       key={index}
//       role="button"
//       tabIndex={0}
//       title={`${label} ${index + 1}`}
//       aria-label={`${label} ${index + 1}`}
//     />
//   );
// };

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