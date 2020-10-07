import Search from '../components/Search';
import {connect} from 'react-redux';
import axios from 'axios';
import { FETCH_TRENDS } from '../actions/types';

function mapDispatchToProps(dispatch){
  return {

    // onClick = (e) => {
    //   e.preventDefault()
    //   console.log(e.target.term.value)
    //   dispatch({type:'SEARCH', term:e.target.term.value});
    // }  

    onClick: async (e) => {
      e.preventDefault()
      console.log(e.target.term.value);

      const res = await axios.get('http://localhost:5000/trends', { params: {term: e.target.term.value}});
      dispatch({ type: FETCH_TRENDS, payload: res.data });
      
      //dispatch({type:TERM_SEARCH, term:e.target.term.value});
    }
  }
}

export default connect(null, mapDispatchToProps)(Search)