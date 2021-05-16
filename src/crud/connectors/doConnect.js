import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { read } from '../actions'
import * as actions from '../actions'

export const doConnect = (path, schema) => {
   return connect(
      state => ({ docs: state[path].payload, schema, path }),
      dispatch => {
         dispatch(read(path))
         return bindActionCreators(actions, dispatch)
      }
   )
}
