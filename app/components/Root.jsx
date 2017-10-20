import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Navbar from './Navbar';
import Sidebar from './Sidebar';
import CampusList from './CampusList';
import StudentList from './StudentList';
import CampusItem from './CampusItem';
import StudentItem from './StudentItem';
import CampusEntry from './CampusEntry';
import StudentEntry from './StudentEntry';

export default class Root extends Component {

    render() {
        return (
            <BrowserRouter>
                <div>
                    <h1>JS ACADEMY</h1>
                    <hr />
                    <Navbar />
                    <Sidebar className="sidebar" />
                    <main>
                        <Switch>
                            <Route path="/home" component={CampusList} />
                            <Route path="/campuses/add" component={CampusEntry} />
                            <Route path="/students/add" component={StudentEntry} />
                            <Route path="/campuses/:id" component={CampusItem} />
                            <Route path="/students/:id" component={StudentItem} />
                            <Route path="/students" component={StudentList} />
                            <Redirect to="/home" />
                        </Switch>
                    </main>
                </div>
            </BrowserRouter>
        )
    }
}