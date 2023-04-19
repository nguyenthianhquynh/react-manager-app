import React from "react";
import PropTypes from 'prop-types';
import cardStyle from './card.module.scss';
// import { CardWrapper } from './card.styled';

const Card = (props) => {
    // const classes = 'card card-shadow ' + props.className;

    return (
        <div className={cardStyle.cardShadow}>
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
