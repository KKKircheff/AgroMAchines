import React, { useEffect, useState } from 'react';
import './pop-up-image.styles.scss';
const bodyScroll = require('body-scroll-toggle');

type PopUpProps = {
  url: string;
  isClicked: boolean;
  setIsClicked: (newValue: boolean) => void;
};
const viewport = document.querySelector('meta[name="viewport"]')!;
console.log('first:',viewport);

const PopUpImage = ({ url, isClicked, setIsClicked }: PopUpProps) => {
  
  const [viewPortSize, setViewPortSize] = useState({
    content: 'width=device-width, initial-scale=1, maximum-scale=2'
  });


  useEffect(() => {
    console.log('inside effect');
    viewport.setAttribute('content', viewPortSize.content);
    console.log(viewport);
  }, []);


  const handelClick = (() => {
    viewport.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1');
    console.log('set',viewport);
    setIsClicked(false);
    bodyScroll.enable();
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