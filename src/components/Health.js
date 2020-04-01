import React from 'react';
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons';
import Showhide from './Showhide';
import {Simulation} from './Simulation';
import './Health.css';

class Health extends React.Component {
  render() {
    const query = new URLSearchParams(window.location.search);
    return (
      <Parallax ref={ref => (this.parallax = ref)} pages={3}>
        <ParallaxLayer offset={0.15} speed={0.8}>
          <img
            src={
              'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/SARS-CoV-2_without_background.png/220px-SARS-CoV-2_without_background.png'
            }
            style={{display: 'block', width: '20%', marginLeft: '55%'}}
          />
          <ParallaxLayer offset={0.5} speed={1.2}>
            <img
              src={
                'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/SARS-CoV-2_without_background.png/220px-SARS-CoV-2_without_background.png'
              }
              style={{display: 'block', width: '10%', marginLeft: '15%'}}
            />
          </ParallaxLayer>
        </ParallaxLayer>
        <ParallaxLayer
          offset={0.6}
          speed={0.4}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}
        >
          <img
            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/the-us-naval-hospital-ship-comfort-sits-docked-at-the-port-news-photo-1585323139.jpg?crop=0.668xw:1.00xh;0.00680xw,0&resize=980:*"
            style={{width: '75%', borderRadius: '20px 0px 0px 20px'}}
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={-0.01}
          speed={0.4}
          style={{
            display: 'flex',
            alignItems: 'center',
            // justifyContent: 'center',
          }}
        >
          <a
            style={{position: 'absolute', marginBottom: 50}}
            onClick={() => this.parallax.scrollTo(1)}
          >
            <h1>SYMPTOMS</h1>
          </a>
        </ParallaxLayer>
        <ParallaxLayer
          offset={0.1}
          speed={0.2}
          style={{
            display: 'flex',
            alignItems: 'right',
            // justifyContent: 'center',
          }}
        >
          <a onClick={() => this.parallax.scrollTo(2)}>
            <h1>SIMULATION</h1>
          </a>
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={1}
          style={{alignItems: 'center', justifyContent: 'center'}}
        >
          <a onClick={() => this.parallax.scrollTo(0)}>
            <h1>Back to top</h1>
          </a>
          <Simulation
            cx={400}
            cy={200}
            width={400}
            height={300}
            defaultMortality={query.get('mortality') || 4}
            defaultVirality={query.get('virality') || 50}
            defaultLengthOfInfection={query.get('lengthOfInfection') || 40}
            defaultSocialDistancing={query.get('socialDistancing') || 0}
            defaultReinfectability={query.get('reinfectability') || 30}
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
