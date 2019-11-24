import React, { Component } from "react";
import EmergencyDetails from "./EmergencyDetails";

export default class EmergencyList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emergencies: []
    };
  }

  //temporary data
  componentDidMount() {
    const emergencies = [
      {
        emergencyType: "Murder",
        emergencyLocation: "USC Talamban",
        date: Date.now()
      },
      {
        emergencyType: "Vehicular Accident",
        emergencyLocation: "USC Talamban",
        date: Date.now()
      },
      {
        emergencyType: "Physical Injury",
        emergencyLocation: "USC Talamban",
        date: Date.now()
      },
      {
        emergencyType: "Rape",
        emergencyLocation: "USC Talamban",
        date: Date.now()
      },
      {
        emergencyType: "Shooting Incident",
        emergencyLocation: "USC Talamban",
        date: Date.now()
      }
    ];
    this.setState({
      emergencies: emergencies
    });
  }

  renderEmergencies() {
    let i = 0;
    return this.state.emergencies.map(emergency => {
      i++;
      return (
        <EmergencyDetails
          key={i}
          emergencyType={emergency.emergencyType}
          emergencyLocation={emergency.emergencyLocation}
          date={emergency.date}
        />
      );
    });
  }

  render() {
    return (
      <div className="hidescrollbar">
        <div className="ui visible left vertical sidebar menu">
          {this.renderEmergencies()}
        </div>
      </div>
    );
  }
}
