import axios from 'axios';

// ACTION TYPES
const GET = 'GET_STUDENTS';
const GET_SINGLE = 'GET_SINGLE_STUDENT';
const GET_NEW = 'GET_NEW_STUDENT';
const REMOVE = 'REMOVE_STUDENT';

// ACTION CREATORS
export function get(students) {
    return {
        type: GET,
        students
    }
}

export function getSingle(student) {
    return {
        type: GET_SINGLE,
        student
    }
}

export function getNew(student) {
    return {
        type: GET_NEW,
        student
    }
}

export function remove(studentId) {
    return {
        type: REMOVE,
        studentId
    }
}

// INITIAL STATE
const initialState = {
    students: [],
    currentStudent: {
        name: '',
        email: '',
        campusId: null
    }
};

// REDUCER
export default function reducer (state = initialState, action) {

  switch(action.type) {

    case GET:
        return Object.assign({}, state, { students: action.students }); 

    case GET_SINGLE:
        return Object.assign({}, state, { currentStudent: action.student });

    case GET_NEW:
        return Object.assign({}, state, { students: state.students.concat(action.student) });
    
    case REMOVE:
        return Object.assign({}, state, { students: state.students.filter(student => student.id !== action.studentId)});

    default: 
        return state;
  }
};

// THUNK CREATORS

export function fetchStudents() {

    return function thunk(dispatch) {
        axios.get('/api/students')
            .then(res => res.data)
            .then(students => {
                const action = get(students);
                dispatch(action);
            })
            .catch(err => console.error('Retrieving students was unsuccessful', err));
    }
}

export function fetchSingleStudent(id) {

    return function thunk(dispatch) {
        axios.get(`/api/students/${id}`)
            .then(res => res.data)
            .then(student => {
                const action = getSingle(student);
                dispatch(action);
            })
            .catch(err => console.error('Retrieving student was unsuccessful', err));
    }
}

export function createStudent(student) {

    return function thunk(dispatch) {     
        axios.post('/api/students/add', student)
            .then(res => res.data)
            .then(newStudent => {
                const action = getNew(newStudent);
                dispatch(action);
            })
            .catch(err => console.error('Adding student was unsuccessful', err));
    }
}

export function removeStudent(id) {

    return function thunk(dispatch) {
        const action = remove(id);
        dispatch(action);

        axios.delete(`/api/students/${id}/remove`)
            .catch(err => console.error('Removing student was unsuccessful', err));
    }
}