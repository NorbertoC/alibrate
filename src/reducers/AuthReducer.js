import {
  USER_CHANGED,
  PASSWORD_CHANGED,
  CLEAR_FIELDS,
  LOADING_PROPS,
} from '../actions/ActionTypes';

const INITIAL_STATE = {
  user: '',
  password: '',
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CLEAR_FIELDS:
      return {
        ...state,
        user: '',
        password: '',
      };
    case USER_CHANGED:
      return { ...state, user: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case LOADING_PROPS:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};
