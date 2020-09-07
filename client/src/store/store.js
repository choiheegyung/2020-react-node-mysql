import { createStore } from 'redux';
import data from './data.json';

function reducer(state, action, term){
  if (state===undefined){
    state = {
      term : '',
      data : data
    }
  }
  if (action === 'SEARCH'){
    state = {term:term}
  }
  return state
}

export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
