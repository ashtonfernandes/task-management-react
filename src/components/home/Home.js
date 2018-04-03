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

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHome: true,
      isLogin: false,
      option: {
          name: "",
          taskCompleted: false
      },
      options : [
        { name:'eat',taskCompleted: false },
        { name:'sleep',taskCompleted: false }
      ]
    };
  }

  taskCompleted = (value) => {
    const allOptions = this.state.options.map((option) => {
        if(option.name === value.name){
            option.taskCompleted =  !option.taskCompleted
        } 
        return option
      });

      this.setState({
        options: allOptions,
      });
  };

  onFormSubmit = (e) => {
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
    const randomNumber = Math.floor(
      Math.random() * this.state.options.length
    );
    alert(this.state.options[randomNumber]);
  };

  removeAll = e => {
    this.setState({
      options: []
    });
  };

  handleInputChange = e => {
    this.setState({
      option: {
          name: e.target.value
      }
    });
  };

  deleteTask = (option) => {
    let newOptions = this.state.options.filter(function(item) {
      return item !== option;
    });
    this.setState({
      options: newOptions
    });
  };

  render() {
    return (
      <div>
        <div className="top-container">
          <Header
            isLogin={this.state.isLogin}
            isHome={this.state.isHome}
            isDashboard={this.state.isDashboard}
          />
          <div className="home-header">
            <h1>My tasks for the day</h1>
          </div>
        </div>

        <div className="main-conatiner">
          <div className="button-container">
            <button
              className="button"
              disabled={this.state.options.length === 0}
              onClick={this.onMakeDecision}
            >
              What should I do?
            </button>
            <button className="button" onClick={this.removeAll}>
              Remove All
            </button>
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
                  <li style={{ textDecorationLine: 'line-through' }} key={option.name}>{option.name}</li>
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
              <button className="button">Add task!</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Home;

