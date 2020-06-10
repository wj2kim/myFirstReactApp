import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Counters from "./components/counters";
import Temp from "./components/temp";
// import EventPractice from "./components/eventPractice";
// import ValidationSample from "./components/validationSample";
// import ScrollBox from "./components/ScrollBox";
// import IterationSample from "./components/IterationSample";
import LifeCycleSample from "./components/lifeCycleSample";
import ErrorBoundary from "./components/errorBoundary";

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
    color: "#000000",
  };

  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };

  // constructor(props) {
  //   super(props);
  //   console.log("App - Constructor");
  // }

  // componentDidMount() {
  //   // perfect time to calla ajax call
  //   console.log("App - Mounted");
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log("prevProps", prevProps);
  //   console.log("prevState", prevState);
  // }

  /* 
life cycle 
1. mount. constructor -> render -> componentDidMount 
2. update. render -> componentDidUpdate ( this phase happens whenever state or props component changes )
3. unmount. componentWillUnmount 
*/

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters: counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters: counters });
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
          {/* <Temp />
          <EventPractice /> */}
          {/* <ValidationSample /> */}
          {/* <ScrollBox
            ref={(ref) => {
              this.scrollBox = ref;
            }}
          />
          <button onClick={() => this.scrollBox.scrollToBottom()}>
            맨 밑으로
          </button> */}
          {/* <IterationSample /> */}
          <button onClick={this.handleClick}>Random Color</button>
          <ErrorBoundary>
            <LifeCycleSample color={this.state.color} />
          </ErrorBoundary>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
