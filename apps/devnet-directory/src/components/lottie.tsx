import React from 'react'
import Lottie from 'react-lottie';
import { spaceman } from '../assets/lottie/spaceman';

export default class LottieControl extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isStopped: false, isPaused: false};
    }
  
    render() {
      const buttonStyle = {
        display: 'block',
        margin: '10px auto'
      };
  
      const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: spaceman,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
  
      return <div>
        <Lottie options={defaultOptions}
                height={400}
                width={400}
                isStopped={this.state.isStopped}
                isPaused={this.state.isPaused}/>
      </div>
    }
  }