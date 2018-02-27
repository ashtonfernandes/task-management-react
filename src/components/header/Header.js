import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
const profileIcon = require('../../assets/icons/profile-icon-black.png');
const companyLogo = require('../../assets/icons/logo.png');

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: this.props.isLogin,
            isHome: this.props.isHome
        };
    }

    confirmLogout = () => {
        this.setState({
            logoutNow: true
        });
    }

    closeLogout = () => {
        this.setState({
            logoutNow: false
        });
    }

    render() {
        return (
            <div>
                { this.props.isHome ?
                    <div className="header-container">
                        <div className="header-left">
                            <div className="company-logo-container">
                                <Link to="/">
                                    <img
                                        className="company-logo"
                                        src={companyLogo}
                                    />
                                </Link>
                            </div>
                        </div>
                        <div className="header-right">
                            <div className="header-text-small">
                                React Boilerplate
                            </div>
                            <div>
                                <img
                                    className="logout-icon"
                                    src={profileIcon}
                                    onClick={this.confirmLogout}
                                />
                            </div>
                        </div>
                        {this.state.logoutNow ? (
                            <div className="logout-container">
                                <div className="logout-container-title">Are you sure you want to logout?</div>
                                <button className="logout-container-button-1" onClick={this.closeLogout}>No</button>
                                <button className="logout-container-button-2" onClick={this.props.action}>Yes</button>
                            </div>
                        ) : null }
                    </div>
                :
                    <div className="header-container">
                            <div className="header-left">
                                <div className="company-logo">
                                    <Link to="/">
                                        <img
                                            className="company-logo"
                                            src={companyLogo}
                                        />
                                    </Link>
                                </div>
                            </div>
                            <div className="header-right">
                                <div className="header-text">
                                    React Boilerplate
                                </div>
                            </div>
                    </div>
                }
            </div>
        );
    }
}

export default Header;