import { combineReducers } from 'redux';
import authReducer from './AuthReducer';
import detailsReducer from './DetailsReducer'

export default combineReducers({
  authReducer,
  detailsReducer,
});

