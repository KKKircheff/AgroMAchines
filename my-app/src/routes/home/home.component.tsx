import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';

import './home.style.scss'

import AOS from 'aos';
import "aos/dist/aos.css";
import RenderIfVisible from 'react-render-if-visible';

import Button from '../../components/button/button.component';
import HeaderHomePage from '../../components/header-home-page/header-home-page.component';
import InfoSection from '../../components/info-section/info-section.component';
import ContatForm from '../../components/contact-form/contact-form.component';
import ProductCard from '../../components/product-card/product-card.component';
import FooterHomePage from '../../components/footer-home-page/footer-home-page.component';
import { productsData } from '../../application-data/products-data';


const Home = () => {

  useEffect(() => {
    AOS.init({ duration: 800 });
    AOS.refresh();
  }, []);

  return (
    <div className='home-wrapper'>

      <HeaderHomePage />
      <InfoSection />
      { productsData.map((product, index)=>{
      return <ProductCard
          key={product.url[0]+index}
          url={product.url}
          mainTitle={product.mainTitle}
          title={product.title}
          subtitle={product.subtitle}
          content={product.content}
          price={product.price}
          imgSide='left'
      />})}
      <ContatForm />
      <FooterHomePage />
      <Outlet />
    </div>
  )
}

export default Home