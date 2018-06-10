import { GET_TOP_READERS, GET_TOP_REVIEWERS, LOADING_PROPS } from "./ActionTypes";
import DetailsService from "../provider/Details/DetailsService";

export const getTopReadersData = (successCallback, errorCallback) => {
  return dispatch => {
    dispatch({
      type: LOADING_PROPS,
      payload: true
    });
    DetailsService.getTopReaders(
      response => {
        dispatch({
          type: GET_TOP_READERS,
          payload: response
        });
        dispatch({
          type: LOADING_PROPS,
          payload: false
        });
        successCallback(response);
      },
      err => {
        dispatch({
          type: LOADING_PROPS,
          payload: false
        });
        console.log("get detailEvaluation data ERROR", err);
        errorCallback(err);
      }
    );
  };
};

export const getTopReviewersData = (successCallback, errorCallback) => {
  return dispatch => {
    dispatch({
      type: LOADING_PROPS,
      payload: true
    });
    DetailsService.getTopReviewers(
      response => {
        dispatch({
          type: GET_TOP_REVIEWERS,
          payload: response
        });
        dispatch({
          type: LOADING_PROPS,
          payload: false
        });
        successCallback(response);
      },
      err => {
        dispatch({
          type: LOADING_PROPS,
          payload: false
        });
        console.log("get detailEvaluation data ERROR", err);
        errorCallback(err);
      }
    );
  };
};
