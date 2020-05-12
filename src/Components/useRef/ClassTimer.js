import React, { Component } from 'react';

class ClassTimer extends Component {
  interval
  constructor(props) {
    super(props);
    this.state = {
      timer:0
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => {
     this.setState(prevState => ({
       timer: prevState.timer + 1
     })) 
    }, 1000)
  }
  
  componentWillUnmount() {
    clearInterval(this.interval)
  }
  
  
  render() {
    return (
      <div>
        <h3>CLASS TIMER - {this.state.timer}</h3>
        <button className="btn btn-warning mb-2" onClick={()=> clearInterval(this.interval)}>Clear Timer</button>
      </div>
    );
  }
}

export default ClassTimer;