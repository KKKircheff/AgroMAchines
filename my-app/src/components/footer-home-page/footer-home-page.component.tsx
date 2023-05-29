import React from 'react'
import './footer-home-page.style.scss'
import AOS from 'aos';

const FooterHomePage = () => {
  // useEffect(() => {
    AOS.init({ duration: 800 });
    AOS.refresh();
  // }, []);
  return (
    <div className='footer-home-page-container'>
      <div className="company">
        <p>Agro Machines Nederland</p>
        </div>
        
        <div className="contacts">
          <p>е-майл: office@agro-machines.nl</p>
          <p>телефон / Viber: +359 876 962484</p>
          </div>
        <div className="contacts">
          <p>7513EG, Haaksbergersraat 294,</p>
          <p>Enschede. Netherland</p>
          </div>
    </div>
  )
}

export default FooterHomePage