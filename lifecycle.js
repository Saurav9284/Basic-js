import React, { Component } from 'react';

class LifecycleExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    console.log('Constructor executed');
  }

  componentDidMount() {
    console.log('Component mounted');
    this.timer = setInterval(this.incrementCount, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Component updated');
    if (prevState.count !== this.state.count) {
      console.log('Count updated:', this.state.count);
    }
  }

  componentWillUnmount() {
    console.log('Component will unmount');
    clearInterval(this.timer);
  }

  incrementCount = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };

  render() {
    console.log('Component rendered');
    return (
      <div>
        <h1>Lifecycle Example</h1>
        <p>Count: {this.state.count}</p>
      </div>
    );
  }
}

export default LifecycleExample;
