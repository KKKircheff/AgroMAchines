import React, { useEffect, useState} from 'react';
import { useToggleContext, useToggleContextUpdate } from '../../context/viewport-context'
import './pop-up-image.styles.scss';
const bodyScroll = require('body-scroll-toggle');

type PopUpProps = {
  url: string;
  isClicked: boolean;
  setIsClicked: (newValue: boolean) => void;
};

const PopUpImage = ({ url, isClicked, setIsClicked }: PopUpProps) => {

  const viewPortToggle = useToggleContext();
  const toggleViewPortValue = useToggleContextUpdate();
  
  const viewport = document.querySelector('meta[name="viewport"]')!;
  console.log('first:',viewport);
  viewport.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=2');
  console.log('after first set:',viewport);

useEffect(()=>{
  console.log('rerender')
},[viewPortToggle])

  const handelClick = (() => {
    viewport.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1');
    console.log('After click',viewport);
    setIsClicked(false);
    bodyScroll.enable();
    toggleViewPortValue!();
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