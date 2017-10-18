// ACTION TYPES
const GET_STUDENTS_FROM_SERVER = 'GET_STUDENTS_FROM_SERVER';

// ACTION CREATORS
export function getStudentsFromServer(students) {
  return {
    type: GET_STUDENTS_FROM_SERVER,
    students
  }
}

// INITIAL STATE
const initialState = {
  students: []
};

// REDUCER
export default function reducer (state = initialState, action) {

  switch(action.type) {

    case GET_STUDENTS_FROM_SERVER:
      return Object.assign({}, state, { students: action.students }); 

    default: 
      return state;
  }
};