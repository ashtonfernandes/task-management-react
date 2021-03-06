import React, { Component } from "react";
import "./Home.css";
import Header from "../header/Header";
import DeleteIcon from "material-ui/svg-icons/action/delete";
import Checkbox from "material-ui/Checkbox";
import IconButton from "material-ui/IconButton";
import Divider from "material-ui/Divider";
import { ListItem } from "material-ui/List";
import { blueGrey800, red600 } from "material-ui/styles/colors";
import TextField from "material-ui/TextField";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHome: true,
      isLogin: false,
      open: false,
      option: {
        name: "",
        taskCompleted: false
      },
      options: [
        { name: "Task 1", taskCompleted: false },
        { name: "Task 2", taskCompleted: false }
      ],
      removeAll: false
    };
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  taskCompleted = value => {
    const allOptions = this.state.options.map(option => {
      if (option.name === value.name) {
        option.taskCompleted = !option.taskCompleted;
      }
      return option;
    });

    this.setState({
      options: allOptions
    });
  };

  onFormSubmit = e => {
    e.preventDefault();
    if (this.state.option.name !== "") {
      let newTask = this.state.options;
      newTask.push(this.state.option);
      this.setState({
        options: newTask,
        option: {
          name: ""
        }
      });
    }
  };

  onMakeDecision = () => {
    const randomNumber = Math.floor(Math.random() * this.state.options.length);
    alert(this.state.options[randomNumber].name);
  };

  removeAll = e => {
    this.setState({
      options: [],
      removeAll: true
    });
  };

  handleInputChange = e => {
    this.setState({
      option: {
        name: e.target.value
      }
    });
  };

  deleteTask = option => {
    let newOptions = this.state.options.filter(function(item) {
      return item !== option;
    });
    this.setState({
      options: newOptions
    });
  };

  render() {
    const randomNumber = Math.floor(Math.random() * this.state.options.length);
    const actions = [
      <FlatButton label="OK" primary={true} onClick={this.handleClose} />
    ];
    return (
      <div>
        <Header
          isLogin={this.state.isLogin}
          isHome={this.state.isHome}
          isDashboard={this.state.isDashboard}
        />
        <div className="main-div">
          <div className="top-container">
            <div className="home-header">
              {/* <h1>My tasks for the day</h1> */}
            </div>
          </div>
          <div className="main-conatiner">
            <div className="button-container">
              <div className="button">
                <RaisedButton
                  label="What should I do?"
                  onClick={this.handleOpen}
                  disabled={this.state.options.length === 0}
                />
                <Dialog
                  actions={actions}
                  modal={false}
                  open={this.state.open}
                  onRequestClose={this.handleClose}
                >
                  {this.state.removeAll ? (
                    null
                  ) : (
                    <div> {this.state.options[randomNumber].name}</div>
                  )}
                </Dialog>
              </div>

              <div className="button">
                <RaisedButton label="Remove All" onClick={this.removeAll} />
              </div>
            </div>
            {this.state.options.map(option => (
              <ListItem
                key={option + "list"}
                className="list-item"
                rightIconButton={
                  <div className="item-buttons">
                    <Checkbox
                      className="list-checkbox"
                      onCheck={() => this.taskCompleted(option)}
                    />
                    <IconButton
                      tooltipPosition="bottom-right"
                      iconStyle={{ color: red600 }}
                      onClick={() => this.deleteTask(option)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </div>
                }
              >
                {option.taskCompleted ? (
                  <div className="task-item-completed">
                    <li
                      style={{ textDecorationLine: "line-through" }}
                      key={option.name}
                    >
                      {option.name}
                    </li>
                  </div>
                ) : (
                  <div className="task-item-incomplete">
                    <li key={option.name}>{option.name}</li>
                  </div>
                )}
                <Divider />
              </ListItem>
            ))}
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
        </div>
      </div>
    );
  }
}

export default Home;
