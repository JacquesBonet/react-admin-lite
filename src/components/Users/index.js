import React from "react";
import PropTypes from 'prop-types'
import Item from './Item';
import Add from "./Add"
import "./Component.css";

const Users = ({users, createUser,deleteUser}) => (
  <div className="list">
    <Add createUser={createUser}/>
    <br/>
    <ul>
      {
        users.map(( user, idx) => (
          <li key={idx}>
            <Item user={user} idx={idx} remove={(user) => deleteUser(user)} />
          </li>
        ))
      }
    </ul>
  </div>
);

Users.propTypes = {
  createUser: PropTypes.func.isRequired,
  deleteUser: PropTypes.func.isRequired,
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Users;
