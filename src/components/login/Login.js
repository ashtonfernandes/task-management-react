import React, { Component } from 'react';
import './Login.css';
import { Card, Icon, Image, Button, Checkbox, Form } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { login } from '../../Service/service';
import Home from '../home/Home';
import Header from '../header/Header';

class Login extends Component {
    constructor(props) {
        super(props);
        if (localStorage.getItem('login') === null) {
            localStorage.setItem('login', false);
        }
        let login = JSON.parse(localStorage.getItem('login'));

        this.state = {
            username: '',
            password: '',
            isLogin: login,
            errorPresent: false
        };
        this.handleUser = this.handleUser.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSignOut = this.handleSignOut.bind(this);
    }

    handleUser = event => {
        this.setState({ username: event.target.value });
    };

    handlePassword = event => {
        this.setState({ password: event.target.value });
    };

    handleSubmit = event => {
        login(this.state.username, this.state.password).then(x => {
            if (x.login) {
                localStorage.setItem('login', true);
                this.setState({
                    isLogin: true
                });
            } else {
                this.setState({
                    errorPresent: true
                });
                // console.log(x.error);
            }
        });
    };

    handleSignOut = () => {
        localStorage.setItem('login', false);
        this.setState({ isLogin: false, username: '', password: '' });
        // console.log(
        //     'when logout-',
        //     localStorage.getItem('login') +
        //         ' state: ' +
        //         JSON.stringify(this.state)
        // );
    };

    render() {
        return (
            <div className="login-container-wrapper">
                {this.state.isLogin ? (
                    <Home action={this.handleSignOut} />
                ) : (
                    <div className="container">
                        <div className="header-container">
                            <Header
                                isLogin={this.state.isLogin}
                                isHome={this.state.isHome}
                                isDashboard={this.state.isDashboard}
                                action={this.props.action}
                            />
                        </div>

                        <Card className="card-element">
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Field>
                                    <label>Username</label>
                                    <input
                                        value={this.state.username}
                                        onChange={this.handleUser}
                                        placeholder="username"
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <label>Password</label>
                                    <input
                                        value={this.state.password}
                                        onChange={this.handlePassword}
                                        type="password"
                                        placeholder="password"
                                    />
                                </Form.Field>
                                {/* <Form.Field>
                                    <Checkbox className="remember-me" label="Remember Me" />
                                </Form.Field> */}
                                <Button className="login-button" primary type="submit">
                                    Login
                                </Button>
                                {this.state.errorPresent ? (
                                    <div className="login-error-case">
                                        Incorrect Username or Password entered.<br />
                                        Please enter the correct credentials.
                                    </div>
                                ) : null}
                            </Form>
                        </Card>
                    </div>
                )}
            </div>
        );
    }
}

export default Login;
