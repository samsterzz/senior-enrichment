import axios from 'axios';

// ACTION TYPES
const GET = 'GET_CAMPUSES';
const GET_SINGLE = 'GET_SINGLE_CAMPUS';
const REMOVE_STUDENT = 'REMOVE_STUDENT_FROM_CAMPUS';
const GET_NEW = 'GET_NEW_CAMPUS';
const REMOVE = 'REMOVE_CAMPUS';

// ACTION CREATORS
export function get(campuses) {
    return {
        type: GET,
        campuses
    }
}

export function getSingle(campus) {
    return {
        type: GET_SINGLE,
        campus
    }
}

export function removeStudent(studentId) {
    return {
        type: REMOVE_STUDENT,
        studentId
    }
}

export function getNew(campus) {
    return {
        type: GET_NEW,
        campus
    }
}

export function remove(campusId) {
    return {
        type: REMOVE,
        campusId
    }
}

// INITIAL STATE
const initialState = {
    campuses: [],
    currentCampus: {
        name: '',
        image: '',
        students: []
    }
};

// REDUCER
export default function reducer (state = initialState, action) {

  switch(action.type) {

    case GET:
        return Object.assign({}, state, { campuses: action.campuses });

    case GET_SINGLE:
        return Object.assign({}, state, { currentCampus: action.campus });

    case REMOVE_STUDENT:
        return Object.assign({}, state, { 
            currentCampus: Object.assign({}, state.currentCampus, {
                students: state.currentCampus.students.filter(student => student.id !== action.studentId)
            })
        });

    case GET_NEW:
        return Object.assign({}, state, { campuses: state.campuses.concat(action.campus) });

    case REMOVE:
        return Object.assign({}, state, { campuses: state.campuses.filter(campus => campus.id !== action.campusId)});

    default: 
        return state;
  }
};

// THUNK CREATORS

export function fetchCampuses() {

    return function thunk(dispatch) {
        axios.get('/api/campuses')
            .then(res => res.data)
            .then(campuses => {
                const action = get(campuses);
                dispatch(action);
            })
            .catch(err => console.error('Retrieving campuses was unsuccessful', err));
    }
}

export function fetchSingleCampus(id) {

    return function thunk(dispatch) {
        axios.get(`/api/campuses/${id}`)
            .then(res => res.data)
            .then(campus => {
                const action = getSingle(campus);
                dispatch(action);
            })
            .catch(err => console.error('Retrieving campus was unsuccessful', err));
    }
}

export function removeStudentFromCampus(studentId) {

    return function thunk(dispatch) {
        const action = removeStudent(studentId);
        dispatch(action);

        axios.delete(`/api/students/${studentId}/remove`)
            .catch(err => console.error('Removing student was unsuccessful', err));
    }
}

export function createCampus(campus) {

    return function thunk(dispatch) {     
        axios.post('/api/campuses/add', campus)
            .then(res => res.data)
            .then(newCampus => {
                const action = getNew(newCampus);
                dispatch(action);
            })
            .catch(err => console.error('Adding campus was unsuccessful', err));
    }
}

export function removeCampus(id) {

    return function thunk(dispatch) {
        const action = remove(id);
        dispatch(action);

        axios.delete(`/api/campuses/${id}/remove`)
            .catch(err => console.error('Removing campus was unsuccessful', err));
    }
}