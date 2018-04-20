import React, { Component } from "react";
import "./addTask.css";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

class addTask extends Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      options: props.options
    };
  }

  onFormSubmit = e => {
    e.preventDefault();
    if (e.target.elements.option.value!== "") {
      this.props.onNewValue(e.target.elements.option.value);
      document.getElementById('myInput').value = '';
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div className="submit-container">
            <TextField
              id="myInput"
              className="input-field"
              fullWidth={true}
              type="text"
              name="option"
            />
            <RaisedButton
              className="add-button"
              label="Add Task"
              disabled={this.state.options.length === 0}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default addTask;
