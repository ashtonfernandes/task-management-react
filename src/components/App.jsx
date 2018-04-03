import React, { Component } from 'react';
import Home from './home/Home';
import { Switch, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
    render() {
        return (
            <div className="body">
                <MuiThemeProvider>
                    <main>
                        <Switch>
                            <Route exact path="/" component={Home} />
                        </Switch>
                    </main>
                </MuiThemeProvider>
            </div>
        )
    }
}

export default App;