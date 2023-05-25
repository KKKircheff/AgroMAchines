import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';

import './home.style.scss'

import AOS from 'aos';
import "aos/dist/aos.css";
import CountUp from 'react-countup';
import RenderIfVisible from 'react-render-if-visible';

import Button from '../../components/button/button.component';
import HeaderHomePage from '../../components/header-home-page/header-home-page.component';
import InfoSection from '../../components/info-section/info-section.component';
import ContentCard from '../../components/content-card/content-card.component';
import urlData from '../../links-object.json';




const Home = () => {

  useEffect(() => {
    AOS.init({ duration: 800 });
    AOS.refresh();
  }, []);

  return (
    <div className='home-wrapper'>

      <HeaderHomePage />
      <InfoSection /> 
      <Outlet />
    </div>
  )
}

export default Home