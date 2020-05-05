import React, { Component } from "react";

class ClassCounterMouse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x:0,
      y:0
    }
  }

  componentDidMount(){
    window.addEventListener('mousemove', this.logMousePosition)
  }

  
  componentWillUnmount(){
    window.removeEventListener('mousemove', this.logMousePosition)
  }
  

  logMousePosition = e =>{
    this.setState({
      x: e.clientX,
      y: e.clientY
    })
  }

  render() {
    return (
      <div>
        <h2>classMouseRun</h2>
        <p>X - {this.state.x}</p>
        <p>Y - {this.state.y}</p>
      </div>
    );
  }
}

export default ClassCounterMouse;
