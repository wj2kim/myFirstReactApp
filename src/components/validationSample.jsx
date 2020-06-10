import React, { Component } from "react";
import "./CSS/validationSample.css";

class ValidationSample extends Component {
  state = {
    password: "",
    clicked: false,
    validated: false,
  };
  // input = React.createRef();

  handleChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };
  handleButtonClick = () => {
    // console.log(this.input.current);
    this.setState({
      clicked: true,
      validated: this.state.password === "0000",
    });
    this.input.focus();
    // console.log(this.myComponent);
  };

  render() {
    return (
      <div>
        <input
          ref={(ref) => (this.input = ref)}
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          className={
            this.state.clicked
              ? this.state.validated
                ? "success"
                : "failure"
              : ""
          }
        />
        <button onClick={this.handleButtonClick}>Validate</button>
      </div>
    );
  }
}

export default ValidationSample;
