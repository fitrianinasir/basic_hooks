import React, { Component } from "react";

class ClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: "",
    };
  }
  componentDidMount() {
    document.title = `Clicked ${this.state.count} times`;
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.count !== this.state.count){
      console.log('updated from classCounter')
      document.title = `Clicked ${this.state.count} times`;
    }    
  }

  changeHandler = (e) => {
    this.setState({
      name: e.target.value
    })
  };

  incrementCount = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1, 
      };
    });
  };
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.name}
          onChange={this.changeHandler}
        />
        <button className="btn btn-primary" onClick={this.incrementCount}>
          Count : {this.state.count}
        </button>
      </div>
    );
  }
}

export default ClassCounter;
