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
import ContatForm from '../../components/contact-form/contact-form.component';
import ProductCard from '../../components/product-card/product-card.component';
import FooterHomePage from '../../components/footer-home-page/footer-home-page.component';



const Home = () => {

  useEffect(() => {
    AOS.init({ duration: 800 });
    AOS.refresh();
  }, []);

  return (
    <div className='home-wrapper'>

      <HeaderHomePage />
      <InfoSection />
      <ContatForm />
      <ProductCard
        url='https://i.ibb.co/481qkwP/img-reel-2.jpg'
        title='Rainbow'
        subtitle='Rowatti'
        content='Поливна макара Irrimec ф90, 360 м. - редуктор с турбина. Лафетен лагер. Помпа Rowatti 80 m3, 9 bar. Плюс комплект маркучи. Много запазена и поддържана. Готова за ползване. Внос Нидерландия. Пистолет Twin spruier '
        imgSide='left'
      />
      <FooterHomePage />
      <Outlet />
    </div>
  )
}

export default Home