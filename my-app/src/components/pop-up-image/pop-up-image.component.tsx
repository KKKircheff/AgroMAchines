import React from 'react';
import './pop-up-image.styles.scss';
const bodyScroll = require('body-scroll-toggle');

type PopUpProps = {
  url: string;
  isClicked: boolean;
  setIsClicked: (newValue: boolean) => void;
};

document.querySelector('meta[name="viewport"]')!.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=2');
const PopUpImage = ({ url, isClicked, setIsClicked }: PopUpProps) => {
    


  const handelClick=(()=>{
    setIsClicked(false);
    bodyScroll.enable();
    document.querySelector('meta[name="viewport"]')!.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1');
    console.log(window.visualViewport);    
    })
  
  return (
    <div
      onClick={handelClick}
      className={`${isClicked ? 'screen-overlay-active' : 'screen-overlay'}`}
    >
      {isClicked && <img src={url} alt="" />}
    </div>
  );
};

export default PopUpImage;