import React, { Component } from 'react';
import './Home.css';
import Header from "../header/Header";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isHome: true,
            isLogin: false
        };

    }

    render() {
        return (
            <div className="home-container">
                <Header
                    isLogin={this.state.isLogin}
                    isHome={this.state.isHome}
                    isDashboard={this.state.isDashboard}
                    action={this.props.action}
                />
                <div className="home-header">
                    Welcome to your React app
                </div>
            </div>
        );
    }
}

export default Home;
