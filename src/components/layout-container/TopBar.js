import Icon from "../Icon/Icon";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import AuthContext from "../../store/Auth-context";

const TopBar = () => {
  const ctx = React.useContext(AuthContext);

  return (
    <div className="border-bottom top-bar d-flex align-items-center justify-content-end align-self-center p-2">
      <Icon icon={faUser} />
      <span className="px-2">Quỳnh</span>
      <Icon className="px-3" icon={faCog} />
      <button className="btn btn-primary" onClick={ctx.onLogout}>logout</button>
    </div>
  );
};
export default TopBar;
