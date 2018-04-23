import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
const companyLogo = require('../../assets/icons/logo.png');

const Header = () => {
    return (
        <div>
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
                        Task Management
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;