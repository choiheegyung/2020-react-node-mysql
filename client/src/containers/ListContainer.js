import List from '../components/List'
import {connect} from 'react-redux'

function mapReduxStateToReactProps(state){
  return {
    data : state
  }
}

export default connect(mapReduxStateToReactProps, null)(List)