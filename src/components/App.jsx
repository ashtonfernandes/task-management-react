import React, { Component } from 'react';
import Login from './login/Login';
import Home from './home/Home';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div className="body">
                <main>
                    <Switch>
                        <Route exact path="/" component={Login} />
                        <Route exact path="home/" component={Home} />
                    </Switch>
                </main>
            </div>
        )
    }
}

export default App;