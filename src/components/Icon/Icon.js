import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faUser } from '@fortawesome/free-solid-svg-icons';

const Icon = (props) => {
    return <FontAwesomeIcon className={props.className} icon={props.icon} size={props.size} color={props.color} />;
}

Icon.defaultProps = {
    size: '1x',
    color: 'black'
}

export default Icon;