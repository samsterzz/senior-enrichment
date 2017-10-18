import axios from 'axios';

// ACTION TYPES
const GET_STUDENTS = 'GET_STUDENTS';
const GET_NEW_STUDENT = 'GET_NEW_STUDENT';

// ACTION CREATORS
export function getStudents(students) {
    return {
        type: GET_STUDENTS,
        students
    }
}

export function getNewStudent(student) {
    return {
        type: GET_NEW_STUDENT,
        student
    }
}

// THUNK CREATORS

export function createStudent(student) {

    return function thunk(dispatch) {     
        axios.post('/api/students/add', student)
            .then(res => res.data)
            .then(newStudent => {
                const action = getNewStudent(newStudent);
                dispatch(action);
            })
    }
}

// INITIAL STATE
const initialState = {
    students: [],
    newStudentEntry: {}
};

// REDUCER
export default function reducer (state = initialState, action) {

  switch(action.type) {

    case GET_STUDENTS:
        return Object.assign({}, state, { students: action.students }); 

    case GET_NEW_STUDENT:
        return Object.assign({}, state, { students: state.students.concat(action.student) });

    default: 
        return state;
  }
};