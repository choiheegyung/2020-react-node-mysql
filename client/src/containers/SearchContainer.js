import Search from '../components/Search'
import {connect} from 'react-redux'

function mapDispatchToProps(dispatch){
  return {

    // onClick = (e) => {
    //   e.preventDefault()
    //   console.log(e.target.term.value)
    //   dispatch({type:'SEARCH', term:e.target.term.value});
    // }  

    onClick:function(e){
      e.preventDefault()
      console.log(e.target.term.value)
      dispatch({type:'SEARCH', term:e.target.term.value});
    }
  }
}

export default connect(null, mapDispatchToProps)(Search)