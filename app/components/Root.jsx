import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import CampusList from './CampusList';

export default class Root extends Component {

    render() {
        return (
            <div>
                Navbar
                <main>
                    <Switch>
                        <Route path="/home" component={CampusList} />
                        <Redirect to="/home" />
                    </Switch>
                </main>
            </div>
        )
    }
}