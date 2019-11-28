import React, { Component } from "react";
import Menu from "./Menu";
import EmergencyList from "../Emergency/EmergencyList";
import auth from "../../authentication/auth";

export default class DashboardCCP extends Component {
  handleLogout = () => {
    auth.logout(() => {
      this.props.history.push("/");
    });
  };

  render() {
    return (
      <div>
        <div>
          <EmergencyList />
        </div>
        <div style={{ paddingLeft: "258px" }}>
          <div>
            <Menu logout={this.handleLogout} />
          </div>
        </div>
      </div>
    );
  }
}
