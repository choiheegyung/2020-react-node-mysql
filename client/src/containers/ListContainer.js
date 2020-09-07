import List from '../components/List'
import {connect} from 'react-redux'

function mapReduxStateToReactProps(state){
  return {
    data: state
    // term : state.term,
    // data : state.data
  }
}

export default connect(mapReduxStateToReactProps, null)(List)