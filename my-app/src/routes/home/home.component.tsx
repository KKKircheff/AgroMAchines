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
      <ContentCard
        linkName={urlData.CARD_IMG_1}
        title={'Some title'}
        subtitle={'some subtitle'}
        content={
          'Според статистиката Нидерландия е вторият най-голям износител в света на селскостопанска продукция. В момента повече от половината от земеделската земя се използва за отглеждане на храни. Успешното развитие и производство се дължи на използването на най-новите технологии и машини.'
        }
        imgSide={'left'}
      />
      <ContentCard
        linkName={urlData.CARD_IMG_2}
        title={'Some title'}
        subtitle={'some subtitle'}
        content={
          'Ние от Agro-machines.nl търсим, проверяваме състоянието, закупуваме и доставяме до България вашата система за напояване на най-изгодни цени.'
        }
        imgSide={'right'}
      />
      <ContentCard
        linkName={urlData.CARD_IMG_3}
        title={'Some title'}
        subtitle={'some subtitle'}
        content={
          'Поради постоянното иновативно развитие на местните фермери, често на вторичния пазар се появяват интересни оферти за качествено замеделско оборудване втора употреба. Но изгодните оферти цена-качество се продават бързо...'
        }
        imgSide={'left'}
      />

      <Outlet />
    </div>
  )
}

export default Home