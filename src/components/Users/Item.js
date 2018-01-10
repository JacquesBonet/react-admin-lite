import React from "react";
import PropTypes from 'prop-types'
import "./Component.css";

const Item = ({user, remove}) => {
  return (
    <div className={'item'}>
      <span className="item__name">{user.nom}</span>
      <span className='item__prenom'>{user.prenom}</span>
      <button className="item__button" onClick={()=> remove(user)}>x</button>
    </div>
  );
};

Item.propTypes = {
  user: PropTypes.object.isRequired,
  remove: PropTypes.func.isRequired
};

export default Item;
