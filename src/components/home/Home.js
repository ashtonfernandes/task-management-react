import React, { Component } from 'react';
import './Home.css';
import Header from "../header/Header";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isHome: true,
            isLogin: false,
            option: "",
            app: {
                title: 'My tasks for the day',
                options: ["study", "eat"]
            },
        };

    }

    onFormSubmit = (e) => {
        e.preventDefault();
        let newTask = this.state.app.options;
        newTask.push(this.state.option);
        this.setState({
            options: newTask,
            option: ""
        });
    }
    
    onMakeDecision = () => {
        const randomNumber = Math.floor(Math.random() * this.state.app.options.length);
        alert(this.state.app.options[randomNumber]);
    };
    
    removeAll = (e) => {
        this.setState({
            app: {
                options: []
            }
        });
    };

    handleInputChange = (e) => {
        this.setState({
            option: e.target.value
        });
    }

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
                        <h1>{this.state.app.title}</h1>
                    </div>
                </div>

                <div className="main-conatiner">
                    <div className="button-container">
                        <button className="button" disabled={this.state.app.options.length === 0} onClick={this.onMakeDecision}>What should I do?</button>
                        <button className="button" onClick={this.removeAll}>Remove All</button>
                    </div>
                    <ol>
                        {this.state.app.options.map((option) => <li key={option}>{option}</li>)}
                    </ol>
                    <form onSubmit={this.onFormSubmit}>
                        <div className="submit-container" >
                            <input className="input-field" type="text" name="task" value={this.state.option} onChange={this.handleInputChange}></input>
                            <button className="button">Add task!</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Home;
