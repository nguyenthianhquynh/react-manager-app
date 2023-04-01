import React from "react";
import PropTypes from 'prop-types';
// import { CardWrapper } from './card.styled';

const Card = (props) => {
    const classes = 'card ' + props.className;

    return (
        <div className={classes}>
          {props.children}
        </div>
    );
};

Card.propTypes = {
   title: PropTypes.string.isRequired,
   className: PropTypes.string
}; 

Card.defaultProps = {
   title: "Default Title",
   className: ""
};  

export default Card;
