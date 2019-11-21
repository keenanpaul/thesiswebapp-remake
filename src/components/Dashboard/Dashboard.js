import React, { Component } from "react";
import Menu from "./Menu";
import EmergencyList from "./Emergency/EmergencyList";
import CityMap from "./CityMap";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <Menu />
        </div>
        <div>
          <div>
            <EmergencyList />
          </div>
          <div>
            <CityMap />
          </div>
        </div>
      </div>
    );
  }
}
