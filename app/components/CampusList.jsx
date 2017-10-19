import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import store from '../store';
import { fetchCampuses, removeCampus } from '../reducers/campuses';

export default class CampusList extends Component {

    constructor() {
        super();
        this.state = store.getState();
    }

    componentDidMount() {
        store.dispatch(fetchCampuses());
        
        this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    handleClick(event) {
        const id = Number(event.target.value);
        store.dispatch(removeCampus(id))
    }

    render() {
        const campuses = this.state.campuses.campuses;

        return (
            <div>
                <ul>
                    {
                        campuses.map(campus => 
                            <li key={campus.id}>
                                <Link to={`/campuses/${campus.id}`}>
                                    {campus.name}
                                </Link>
                                <button 
                                    value={campus.id}
                                    onClick={this.handleClick}>x
                                </button>   
                            </li>
                        )
                    }
                </ul>  
            </div>
        )
    }
}