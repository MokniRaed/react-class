import React, { Component } from "react";
import PropTypes from "prop-types";

class App extends Component {
  state = {
    user: "Skander",
    time: 0,
  };

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  componentDidMount() {
    //will change the time +1 each 1 second
console.log("componentDidMount");
    // this.interval = setInterval(() => {
    //   this will change the state of time to incriment +1
    //   this.setState((prevState) => ({
    //     time: prevState.time + 1,
    //   }));
    // }, 1000);
    //---------------------------------------
  }

  render() {
    return (
      <div>
        <h1>Hello Iam {this.state.user} using React Class Component</h1>
        <p>this takes {this.state.time} to render</p>
      </div>
    );
  }
}
export default App;
