import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faUser } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const Icon = (props) => {
    return (<FontAwesomeIcon className={`px-1 ${props.className}`} icon={props.icon} size={props.size} color={props.color} />);
}

Icon.defaultProps = {
    size: '1x',
    color: 'black'
}

export default Icon;