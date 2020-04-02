import React from 'react';
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons';
import Showhide from './Showhide';
import {Simulation} from './Simulation';
import './Health.css';

const virusURL =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/SARS-CoV-2_without_background.png/220px-SARS-CoV-2_without_background.png';

class Health extends React.Component {
  render() {
    const query = new URLSearchParams(window.location.search);
    return (
      <Parallax ref={ref => (this.parallax = ref)} pages={3}>
        <ParallaxLayer offset={0} speed={0.9}>
          <img src="https://www.stratfor.com/sites/default/files/styles/wv_small/public/world-coronavirus-totals-01282020_0.png?itok=qMMAbHYA" />
        </ParallaxLayer>
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
        <ParallaxLayer offset={1.15} speed={0.8}>
          <h2 id="mid">Tips and Links</h2>
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={0.9}
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}
        >
          <a href="https://www.cdc.gov/coronavirus" target="_blank">
            <img
              style={{width: '85px', height: '75px'}}
              src="https://wlflegalpulse.files.wordpress.com/2011/06/cdc_logo3.jpg?w=300&"
            />
          </a>
          <Showhide style={{width: '85px', height: '75px'}} />
          <a
            href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019"
            target="_blank"
          >
            <img
              style={{width: '85px', height: '75px'}}
              src="https://i7.pngguru.com/preview/9/416/863/world-health-organization-2014-guinea-ebola-outbreak-united-nations-system-world-health-assembly-others.jpg"
            />
          </a>
        </ParallaxLayer>
        <ParallaxLayer
          offset={1.3}
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
        >
          <h2>PLACEHOLDER</h2>
          <h2>PLACEHOLDER</h2>
        </ParallaxLayer>
      </Parallax>
    );
  }
}

export default Health;
