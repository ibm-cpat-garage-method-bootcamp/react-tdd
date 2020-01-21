import React, { Component } from "react";

class WWBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colCount: "30",
      inputTextArea: "",
      outputTextArea: ""
    };
  }

  updateText() {}

  handleChange = event => {
    event.preventDefault();
    if (event.target.name == "colcount") {
      this.setState({
        colCount: event.target.value
      });
    }
    if (event.target.name == "inputtext") {
      this.setState({
        outputTextArea: event.target.value,
        inputTextArea: event.target.value
      });
    }
  };

  render() {
    return (
      <div>
        <p>
          Column count:{" "}
          <input
            name="colcount"
            data-testid="column-count"
            type="number"
            value={this.state.colCount}
            onChange={this.handleChange}
          ></input>
        </p>
        <textarea
          name="inputtext"
          data-testid="input-text-area"
          onChange={this.handleChange}
          rows="20"
          cols="80"
          value={this.state.inputTextArea}
        ></textarea>
        <textarea
          id="outputtext"
          readOnly="readOnly"
          data-testid="output-text-area"
          rows="20"
          cols="80"
          value={this.state.outputTextArea}
        ></textarea>
      </div>
    );
  }
}

export default WWBody;
