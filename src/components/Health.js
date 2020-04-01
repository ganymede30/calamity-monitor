import React from 'react';
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons';

class Health extends React.Component {
  render() {
    return (
      <Parallax ref={ref => (this.parallax = ref)} pages={3}>
        {/* <ParallaxLayer offset={1} speed={1} style={{backgroundColor: 'red'}} /> */}
        <ParallaxLayer offset={1} speed={0.8}>
          <img
            src={
              'https://previews.123rf.com/images/lightwise/lightwise1110/lightwise111000420/10945951-virus-and-bacterium-medical-symbol-represented-by-a-single-microscopic-bacteria-intruder-cell-causin.jpg'
            }
            style={{display: 'block', width: '20%', marginLeft: '55%'}}
          />
          <ParallaxLayer offset={0.5} speed={1.2}>
            <img
              src={
                'https://previews.123rf.com/images/lightwise/lightwise1110/lightwise111000420/10945951-virus-and-bacterium-medical-symbol-represented-by-a-single-microscopic-bacteria-intruder-cell-causin.jpg'
              }
              style={{display: 'block', width: '10%', marginLeft: '15%'}}
            />
          </ParallaxLayer>
        </ParallaxLayer>
        <ParallaxLayer
          offset={0}
          speed={1.4}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/the-us-naval-hospital-ship-comfort-sits-docked-at-the-port-news-photo-1585323139.jpg?crop=0.668xw:1.00xh;0.00680xw,0&resize=980:*"
            style={{width: '75%'}}
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={0}
          speed={0.7}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <a
            style={{position: 'absolute'}}
            onClick={() => this.parallax.scrollTo(1)}
          >
            <h1>SIMULATION</h1>
          </a>
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={0.2}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <h1 style={{position: 'absolute'}}>VIRRRRRUS</h1>
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={1}
          style={{alignItems: 'center', justifyContent: 'center'}}
        >
          <a onClick={() => this.parallax.scrollTo(0)}>
            <h1>go to top</h1>
          </a>
          <img
            src="https://www.genengnews.com/wp-content/uploads/2020/02/Feb27_2020_CDC_Coronavirus.jpg"
            style={{width: '100%'}}
          />
        </ParallaxLayer>
        {/* <ParallaxLayer
          offset={0}
          speed={0}
          style={{backgroundImage: url('stars', true), backgroundSize: 'cover'}}
        >
          Pink
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={2}
          onClick={() => this.parallax.scrollTo(1)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundImage: url(
              'https://www.genengnews.com/wp-content/uploads/2020/02/Feb27_2020_CDC_Coronavirus.jpg'
            ),
          }}  
        >
          PAGE ZERO TO ONE
        </ParallaxLayer>


        <ParallaxLayer
          offset={2}
          speed={-0}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={() => this.parallax.scrollTo(0)}
        >
          PAGE TWO TO ZERO
          <img href={url('bash')} style={{width: '40%'}} />
        </ParallaxLayer> */}
      </Parallax>
    );
  }
}

export default Health;
