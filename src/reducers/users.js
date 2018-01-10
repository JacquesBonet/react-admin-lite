import USERS from "../constants/users";
import crudReducer  from './docs';

const initialState = {
  isLoading: false,
  payload: [],
}


export default function users(state = initialState, action) {
  return crudReducer(state, [USERS], action);
}
