import React from "react";

class App extends React.Component {

  constructor(props) {
    super(props);
    console.log('hello, i am constructor !');
  }

  state = {
    count: 0,
  };

  add = () => {
    // console.log('add');
    this.setState(x => ({
      count: x.count + 3,
    }));

  };

  minus = () => {
    console.log('minus');
  };

  componentDidMount() {
    console.log('hi i am cdm');
  }

  componentDidUpdate() {
    console.log('oh, i m update');
  }

  render() {
    console.log('render ! ');
    return (
    <div>
      <h1> count is : {this.state.count} </h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>minus</button>
    </div>
    );
  }
}

export default App;
