import { combineReducers } from 'redux';
import trendsReducer from './trendsReducer';

export default combineReducers({
  trends: trendsReducer
});
