import "./App.css";
import LayoutContainer from "../src/components/layout-container/layout-container";
import Login from "../src/pages/login/login";
import React from "react";
import AuthContext from "../src/store/Auth-context";


function App() {
  const ctx = React.useContext(AuthContext);

  const content = ctx.isLoggedIn ? <LayoutContainer /> : <Login onLogin={ctx.onLogin}/>;

  return (
    <div className="App">
      {content}
    </div>
  );
}

export default App;
