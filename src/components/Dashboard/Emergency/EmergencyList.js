import React, { Component } from "react";
import EmergencyDetails from "./EmergencyDetails";

export default class EmergencyList extends Component {
  constructor(props) {
    super(props);
    var today = new Date();
    var date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    this.state = {
      date: date
    };
  }

  render() {
    return (
      <div className="hidescrollbar">
        <div className="ui visible left vertical sidebar menu">
          <EmergencyDetails
            emergencyType="Murder"
            timeReceived={this.state.date}
            emergencyLocation="USC Talamban"
          />
          <EmergencyDetails
            emergencyType="Vehicular Accident"
            timeReceived={this.state.date}
            emergencyLocation="USC Talamban"
          />
          <EmergencyDetails
            emergencyType="Physical Injury"
            timeReceived={this.state.date}
            emergencyLocation="USC Talamban"
          />
          <EmergencyDetails
            emergencyType="Rape"
            timeReceived={this.state.date}
            emergencyLocation="USC Talamban"
          />
          <EmergencyDetails
            emergencyType="Shooting Incident"
            timeReceived={this.state.date}
            emergencyLocation="USC Talamban"
          />
        </div>
      </div>
    );
  }
}
