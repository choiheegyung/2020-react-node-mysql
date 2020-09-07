import Search from '../components/Search'
import {connect} from 'react-redux'

function mapDispatchToProps(dispatch){
  return {
    // data: state
    // term : state.term,
    // data : state.data
    onClick:function(term){
      dispatch({type:'SEARCH', term:term});
    }
  }
}

export default connect(null, mapDispatchToProps)(Search)