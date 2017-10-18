// ACTION TYPES
const GET_CAMPUSES_FROM_SERVER = 'GET_CAMPUSES_FROM_SERVER';

// ACTION CREATORS
export function getCampusesFromServer(campuses) {
  return {
    type: GET_CAMPUSES_FROM_SERVER,
    campuses
  }
}

// INITIAL STATE
const initialState = {
  campuses: []
};

// REDUCER
export default function reducer (state = initialState, action) {

  switch(action.type) {

    case GET_CAMPUSES_FROM_SERVER:
      return Object.assign({}, state, { campuses: action.campuses }); 

    default: 
      return state;
  }
};