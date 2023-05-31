import React, { useEffect, useState } from 'react';
import  {useToggleContext} from '../../App';
import './pop-up-image.styles.scss';
const bodyScroll = require('body-scroll-toggle');

type PopUpProps = {
  url: string;
  isClicked: boolean;
  setIsClicked: (newValue: boolean) => void;
};

 
const PopUpImage = ({ url, isClicked, setIsClicked }: PopUpProps) => {

  const viewport = document.querySelector('meta[name="viewport"]')!;
  console.log('first:',viewport);
  viewport.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=2');
  console.log('second:',viewport);

  const {toggleView, setToggleView} = useToggleContext() || {};
  
  useEffect(() => {
    console.log('inside effect');
    console.log(viewport);
  }, [isClicked]);


  const handelClick = (() => {
    viewport.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1');
    console.log('set',viewport);
    bodyScroll.enable();
    setToggleView!(!toggleView);
    setIsClicked(false);
    // setViewPortSize({...viewPortSize,
    //   content: 'width=device-width, initial-scale=1, maximum-scale=1'
    // });
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