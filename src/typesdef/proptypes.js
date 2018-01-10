import {PropTypes} from "react";

export const ProductPropTypes = {
  date: PropTypes.number.isRequired,
  first: PropTypes.bool,
  message: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired
};
