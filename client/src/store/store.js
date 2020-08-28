import { createStore } from 'redux';
import data from './data.json';

function reducer(state, action){
  if (state===undefined){
    state = data
  }
  return state
}

export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
