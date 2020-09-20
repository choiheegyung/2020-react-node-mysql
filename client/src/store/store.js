import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import trendsReducer from './trendsReducer';

export default createStore(trendsReducer, applyMiddleware(thunk))