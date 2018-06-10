import {
  USER_CHANGED,
  PASSWORD_CHANGED,
  LOADING_PROPS,
  CLEAR_FIELDS,
} from './ActionTypes';
import AuthService from '../provider/auth/AuthService';

export const userChanged = (text) => {
  return {
    type: USER_CHANGED,
    payload: text,
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text,
  };
};

export const loginUser = (data, successCallback, errorCallback) => {
  return (dispatch) => {
    dispatch({
      type: LOADING_PROPS,
      payload: true
    });
    AuthService.login(data, (response) => {
      console.log('login', response);
      dispatch({ type: CLEAR_FIELDS });
      dispatch({
        type: LOADING_PROPS,
        payload: false
      });
      successCallback(response);
    }, (err) => {
      dispatch({
        type: LOADING_PROPS,
        payload: false
      });
      console.log('user login ERROR', err);
      errorCallback(err);
    });
  };
};
