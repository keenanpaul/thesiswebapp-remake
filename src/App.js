import React from "react";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login/Login";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
function App() {
  return (
    <div className="App">
      <ReactNotification />
      <Dashboard />
      {/*<Login />*/}
    </div>
  );
}

export default App;
