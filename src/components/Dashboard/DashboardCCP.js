import React, { Component } from "react";
import Menu from "./Menu";
import EmergencyList from "../Emergency/EmergencyList";
import CityMap from "./CityMap";

export default class DashboardCCP extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <EmergencyList />
        </div>
        <div style={{ paddingLeft: "258px" }}>
          <div>
            <Menu />
          </div>
        </div>
      </div>
    );
  }
}
