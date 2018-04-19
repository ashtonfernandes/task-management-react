import React, { Component } from "react";
import "./addTask.css";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

class addTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      option: props.option,
      options: props.options
    };
  }

  onFormSubmit = e => {
    e.preventDefault();
    if (this.state.option.name !== "") {
      let newTask = this.state.option;
      this.props.onNewValue(newTask); 
      this.setState({
        option: {
          name: ""
        }
      });
    }
  };

  handleInputChange = e => {
    this.setState({
      option: {
        name: e.target.value
      }
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div className="submit-container">
            <TextField
              className="input-field"
              fullWidth={true}
              type="text"
              name="option"
              value={this.state.option.name}
              onChange={this.handleInputChange}
            />
            <RaisedButton
              className="add-button"
              label="Add Task"
              onClick={this.onFormSubmit}
              disabled={this.state.options.length === 0}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default addTask;
