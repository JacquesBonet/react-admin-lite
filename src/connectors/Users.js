import Users from '../components/Users';
import { connect } from 'react-redux';
import {bindActionCreators} from "redux";
import {readUsers, createUser, deleteUser} from '../actions/users';


const mapStateToProps = (state) => ({
  users: state.users.payload,
});

const dispatchAndMapActions = (dispatch) => {
  dispatch(readUsers());
  return bindActionCreators({createUser,deleteUser}, dispatch);
};

export default connect(mapStateToProps, dispatchAndMapActions)(Users);
