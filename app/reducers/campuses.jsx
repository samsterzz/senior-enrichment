import axios from 'axios';

// ACTION TYPES
const GET_CAMPUSES = 'GET_CAMPUSES';
const GET_NEW_CAMPUS = 'GET_NEW_CAMPUS';

// ACTION CREATORS
export function getCampuses(campuses) {
    return {
        type: GET_CAMPUSES,
        campuses
    }
}

export function getNewCampus(campus) {
    return {
        type: GET_NEW_CAMPUS,
        campus
    }
}

// THUNK CREATORS

export function createCampus(campus) {

    return function thunk(dispatch) {     
        axios.post('/api/campuses/add', campus)
            .then(res => res.data)
            .then(newCampus => {
                const action = getNewCampus(newCampus);
                dispatch(action);
            })
    }
}

// INITIAL STATE
const initialState = {
    campuses: [],
    newCampusEntry: {}
};

// REDUCER
export default function reducer (state = initialState, action) {

  switch(action.type) {

    case GET_CAMPUSES:
        return Object.assign({}, state, { campuses: action.campuses });

    case GET_NEW_CAMPUS:
        return Object.assign({}, state, { campuses: state.campuses.concat(action.campus) });

    default: 
        return state;
  }
};