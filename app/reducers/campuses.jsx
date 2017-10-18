// ACTION TYPES
const GET_CAMPUSES_FROM_SERVER = 'GET_CAMPUSES_FROM_SERVER';
const NEW_CAMPUS = 'NEW_CAMPUS';
const GET_NEW_CAMPUS_FROM_SERVER = 'GET_NEW_CAMPUS_FROM_SERVER';

// ACTION CREATORS
export function getCampusesFromServer(campuses) {
    return {
        type: GET_CAMPUSES_FROM_SERVER,
        campuses
    }
}

export function newCampus(campusEntry) {
    return {
        type: NEW_CAMPUS,
        newCampus: campusEntry
    }
}

export function getNewCampusFromServer(campus) {
    return {
        type: GET_NEW_CAMPUS_FROM_SERVER,
        campus
    }
}

// INITIAL STATE
const initialState = {
    campuses: [],
    newCampus: {}
};

// REDUCER
export default function reducer (state = initialState, action) {

  switch(action.type) {

    case GET_CAMPUSES_FROM_SERVER:
        return Object.assign({}, state, { campuses: action.campuses }); 

    case NEW_CAMPUS:
        return Object.assign({}, state, { newCampus: action.newCampus });

    case GET_NEW_CAMPUS_FROM_SERVER:
        return Object.assign({}, state, { campuses: state.campuses.concat(action.campus) });

    default: 
        return state;
  }
};