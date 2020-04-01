import React from 'react';
import {Transition, animated} from 'react-spring/renderprops';

const sym1 = 'Wash your hands...';
const sym2 = '...for 20 seconds';

export default class Showhide extends React.PureComponent {
  state = {show: true};
  toggle = e => this.setState(state => ({show: !state.show}));
  render() {
    return (
      <div>
        <div className="reveals-main" onClick={this.toggle}>
          <Transition
            native
            items={this.state.show}
            from={{position: 'absolute', overflow: 'hidden', height: 0}}
            enter={[{height: 'auto'}]}
            leave={{height: 0}}
          >
            {show =>
              show
                ? props => <animated.div style={props}>{sym1}</animated.div>
                : props => <animated.div style={props}>{sym2}</animated.div>
            }
          </Transition>
        </div>
      </div>
    );
  }
}
