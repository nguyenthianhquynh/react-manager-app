import Icon from "components/Icon/Icon";
import React from "react";
import {
  faBars,
  faHome,
  faFire,
  faCake,
  faArrowLeft,
  faArrowRight,
  faArrowDown,
  faAngleDown,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

const SideNavItem = ({ children,onToggleMenu, ...props }) => {

  const barIcons = {
    bar: faBars,
    home: faHome,
    fire: faFire,
    cake: faCake
  }

  
  
  const toggleMenu = (menuName) => {
   onToggleMenu(menuName);
  };

  return (
    <li className="dropdown">
      <a
        className={`p-2 nav-link menu-title ${props.active ? "active" : ""} ${
          props.isExpand ? "expand" : ""
        }`}
        href="#"
        onClick={toggleMenu.bind(this, props.text)}
      >
        <div className="d-flex flex-row justify-content-between">
          <div>
            <Icon icon={barIcons[props.icon]} />
            <span>{props.text}</span>
          </div>
          <div>
            {props.submenu ? (
              props.isExpand ? (
                <Icon icon={faAngleDown} />
              ) : (
                <Icon icon={faAngleRight} />
              )
            ) : (
              ""
            )}
          </div>
        </div>
      </a>
      {props.submenu && props.isExpand && (
        <ul className="nav-submenu menu-content">
          {Object.keys(props.submenu).map((key, index) => {
            const item = props.submenu[key];
            return <SideNavItem key={index} {...item} onToggleMenu={onToggleMenu.bind(this,key)} />;
          })}
        </ul>
      )}
    </li>
  );
};

export default SideNavItem;
