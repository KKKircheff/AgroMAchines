import './SlickDots.scss';

export default function SlickDots (dots:any){
    return  (
            <div 
              className="slick-dots-wrapper"
              style={{
                margin:'0 0 3rem 0'
              }}
            >
              <ul 
              style={{ 
                color: 'white',
                //  background: '#76B82A',
                //  border:'1px solid white',
                //  width: '80%',
                //  height: '20vw',
                //  display: 'inline-block',
                //  margin: '0 8px',
                 }}>{dots}</ul>
            </div>
          )
}