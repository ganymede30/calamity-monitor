import React from 'react';
import {Transition, animated} from 'react-spring/renderprops';

const sym1 = (
  <img src="data:image/gif;base64,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" />
);
const sym2 = (
  <ul>
    <li>
      <strong>STAY</strong> home as much as you can
    </li>
    <li>
      <strong>KEEP</strong> a safe distance
    </li>
    <li>
      <strong>WASH</strong> hands OFTEN
    </li>
    <li>
      <strong>COVER</strong> your cough
    </li>
    <li>
      <strong>SICK?</strong> Call ahead
    </li>
  </ul>
);

export default class Showhide extends React.PureComponent {
  state = {show: true};
  toggle = e => this.setState(state => ({show: !state.show}));
  render() {
    return (
      <div className="reveals-main" onClick={this.toggle}>
        <a href="https://www.cdc.gov/coronavirus" target="_blank">
          <img
            style={{width: '85px', height: '75px'}}
            src="https://wlflegalpulse.files.wordpress.com/2011/06/cdc_logo3.jpg?w=300&"
          />
        </a>
        <Transition
          native
          items={this.state.show}
          from={{position: 'absolute', overflow: 'hidden', height: 0}}
          enter={[{height: 'auto'}]}
          leave={{height: 0}}
          style={{marginBottom: '50%'}}
        >
          {show =>
            show
              ? props => <animated.div style={props}>{sym1}</animated.div>
              : props => <animated.div style={props}>{sym2}</animated.div>
          }
        </Transition>
        <a
          href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019"
          target="_blank"
        >
          <img
            style={{width: '85px', height: '75px'}}
            src="https://i7.pngguru.com/preview/9/416/863/world-health-organization-2014-guinea-ebola-outbreak-united-nations-system-world-health-assembly-others.jpg"
          />
        </a>
      </div>
    );
  }
}
