import { GET_TOP_READERS, GET_TOP_REVIEWERS, LOADING_PROPS } from '../actions/ActionTypes';

const INITIAL_STATE = {
  topReaders: null,
  topReviewers: null,
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_TOP_READERS:
      return { ...state, topReaders: action.payload };
    case GET_TOP_REVIEWERS:
      return { ...state, topReviewers: action.payload };
    case LOADING_PROPS:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};
