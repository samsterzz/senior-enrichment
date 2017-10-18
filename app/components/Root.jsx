import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Navbar from './Navbar';
import CampusList from './CampusList';
import StudentList from './StudentList';

export default class Root extends Component {

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Navbar />
                    <main>
                        <Switch>
                            <Route path="/home" component={CampusList} />
                            <Route path="/students" component={StudentList} />
                            <Redirect to="/home" />
                        </Switch>
                    </main>
                </div>
            </BrowserRouter>
        )
    }
}