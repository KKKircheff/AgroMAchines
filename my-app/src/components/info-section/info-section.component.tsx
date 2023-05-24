import React from 'react'
import AOS from 'aos';
import CountUp from 'react-countup';
import RenderIfVisible from 'react-render-if-visible';

import './info-section.style.scss'

const InfoSection = () => {

    return (
        <div className='info-section-wrapper'>

            <div className='info-card' data-aos="fade-in">
                <RenderIfVisible visibleOffset={1}>
                    <div className="counter-wrapper">
                        <CountUp
                            start={0}
                            end={30}
                            duration={2.75}
                            redraw={true}
                            className='count-up'
                        />
                        <span>%</span>
                    </div>

                    <div className='separator'></div>

                </RenderIfVisible >
                <div className='content-wrapper'>
                    <h2>Увеличение на добива</h2>
                    <h2>при използване на</h2>
                    <h2>поливни системи до</h2>
                </div>
            </div>

            <div className='info-card' data-aos="fade-in">
                <RenderIfVisible visibleOffset={1}>
                    <div className="counter-wrapper">
                        <CountUp
                            start={0}
                            end={1000}
                            duration={2.75}
                            redraw={true}
                            className='count-up'
                        />
                        <span>+</span>
                    </div>
                    <div className='separator'></div>
                </RenderIfVisible >
                <div className='content-wrapper'>
                    <h2>Оферти на пазара</h2>
                    <h2>за поливни системи</h2>
                    <h2>в Нидерландия</h2>
                </div>
            </div>

            <div className='info-card' data-aos="fade-in">
                <RenderIfVisible visibleOffset={1}>
                    <div className="counter-wrapper">
                        <CountUp
                            start={0}
                            end={2000}
                            duration={2.75}
                            redraw={true}
                            className='count-up'
                        />
                        <span>+</span>
                    </div>
                    <div className='separator'></div>
                </RenderIfVisible >
                <div className='content-wrapper'>
                    <h2>Доставени машини</h2>
                    <h2>на клиенти в България</h2>
                    <h2>от нас!</h2>
                </div>
            </div>

        </div>
    )
}

export default InfoSection