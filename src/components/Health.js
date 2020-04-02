import React from 'react';
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons';
import {Showhide, Showhide2, Showhide3} from './Showhide';
import {Simulation} from './Simulation';
import './Health.css';

const virusURL =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/SARS-CoV-2_without_background.png/220px-SARS-CoV-2_without_background.png';
const shipURL =
  'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/the-us-naval-hospital-ship-comfort-sits-docked-at-the-port-news-photo-1585323139.jpg?crop=0.668xw:1.00xh;0.00680xw,0&resize=980:*';

class Health extends React.Component {
  render() {
    const query = new URLSearchParams(window.location.search);
    return (
      <Parallax ref={ref => (this.parallax = ref)} pages={3}>
        <ParallaxLayer offset={0.15} speed={0.8}>
          <img
            src={virusURL}
            style={{
              display: 'block',
              width: '20%',
              marginLeft: '55%',
              position: 'absolute',
            }}
          />
          <ParallaxLayer offset={0.5} speed={1.2}>
            <img
              src={virusURL}
              style={{
                display: 'block',
                width: '10%',
                marginLeft: '15%',
                position: 'absolute',
              }}
            />
            <ParallaxLayer offset={2.1} speed={0.4}>
              <img
                src={virusURL}
                style={{
                  display: 'block',
                  width: '16%',
                  marginLeft: '80%',
                  position: 'absolute',
                }}
              />
            </ParallaxLayer>
          </ParallaxLayer>
        </ParallaxLayer>
        <ParallaxLayer
          offset={0.5}
          speed={0.4}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}
        >
          <img
            src={shipURL}
            style={{
              width: '75%',
              borderRadius: '20px 0px 0px 20px',
              position: 'relative',
            }}
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={-0.01}
          speed={0.4}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <a
            style={{position: 'absolute', marginBottom: 50}}
            onClick={() => this.parallax.scrollTo(1.1)}
          >
            <button>HELP</button>
          </a>
        </ParallaxLayer>
        <ParallaxLayer
          offset={0.1}
          speed={0.2}
          style={{
            display: 'flex',
            alignItems: 'right',
            justifyContent: 'center',
          }}
        >
          <a onClick={() => this.parallax.scrollTo(2)}>
            <button>SIMULATION</button>
          </a>
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={1}
          style={{
            alignItems: 'right',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          <a id="top" onClick={() => this.parallax.scrollTo(0)}>
            <div>
              <div>^^</div>
              <div>go back to the top</div>
            </div>
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
          <h6>
            <small>Credit: Swizec Teller</small>
          </h6>
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={0.9}
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            // flexDirection: 'column',
            marginBottom: '40%',
          }}
        >
          <a href="https://www.cdc.gov/coronavirus" target="_blank">
            <img
              style={{width: '85px', height: '75px'}}
              src="https://wlflegalpulse.files.wordpress.com/2011/06/cdc_logo3.jpg?w=300&"
            />
          </a>
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={0.7}
          style={{
            display: 'flex',
            alignItems: 'center',
            marginLeft: '8%',
          }}
        >
          <a
            href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019"
            target="_blank"
          >
            <img
              style={{width: '85px', height: '75px'}}
              src="data:image/png;base64,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"
            />
          </a>
          <Showhide />
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={0.7}
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            marginBottom: '17%',
            marginLeft: '24%',
          }}
        >
          <Showhide2 />
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={0.7}
          style={{
            display: 'flex',
            alignItems: 'center',
            marginLeft: '48%',
          }}
        >
          <Showhide3 />
        </ParallaxLayer>
      </Parallax>
    );
  }
}

export default Health;
