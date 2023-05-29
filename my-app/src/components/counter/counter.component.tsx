import './counter.style.scss';
import React, { useEffect } from 'react'
import CountUp from 'react-countup';
import RenderIfVisible from 'react-render-if-visible';

type CounterProps = {
    countFrom: number,
    countTo: number,
    content: string
}

const Counter = ({ countFrom, countTo, content }: CounterProps) => {

    return (
        <div className='info-card' data-aos="fade-in">
            <RenderIfVisible visibleOffset={1}>
                <div className="counter-wrapper">
                    <CountUp
                        start={countFrom}
                        end={countTo}
                        duration={2.2}
                        redraw={true}
                        className='count-up'
                    />
                    <span>+</span>
                </div>

                <div className='separator'></div>
            </RenderIfVisible >
            <div className='content-wrapper'>
                <h2>{content}</h2>
            </div>
        </div>
    )
}
export default Counter