import React, { useEffect, useState } from 'react';
import './pop-up-image.styles.scss';
const bodyScroll = require('body-scroll-toggle');

type PopUpProps = {
  url: string;
  isClicked: boolean;
  setIsClicked: (newValue: boolean) => void;
};

const PopUpImage = ({ url, isClicked, setIsClicked }: PopUpProps) => {
  const [viewPortSize, setViewPortSize] = useState('width=device-width, initial-scale=1, maximum-scale=2');
  const viewport = document.querySelector('meta[name="viewport"]')!;

  useEffect(() => {
    viewport.setAttribute('content', viewPortSize);
  }, [viewPortSize]);

  console.log('inside:', viewport);

  const handelClick = (() => {
    setIsClicked(false);
    bodyScroll.enable();
    setViewPortSize('width=device-width, initial-scale=1, maximum-scale=1');
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