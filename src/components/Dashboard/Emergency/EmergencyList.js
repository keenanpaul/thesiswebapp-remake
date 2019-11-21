import React, { Component } from "react";
import EmergencyDetails from "./EmergencyDetails";

export default class EmergencyList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="hidescrollbar">
        <div className="ui visible left vertical sidebar menu">
          <EmergencyDetails />
          <EmergencyDetails />
          <EmergencyDetails />
          <EmergencyDetails />
          <EmergencyDetails />
        </div>
      </div>
    );
  }
}
