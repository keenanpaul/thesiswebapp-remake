import React, { Component } from "react";
import CityMap from "./CityMap";
import EmergencyForm from "../Emergency/EmergencyForm";
import { Header, Image, Button, Tab } from "semantic-ui-react";

export default class MenuTabs extends Component {
  getPanes = () => {
    const panes = [
      {
        menuItem: { key: "map", icon: "map", content: "City Map" },
        render: () => (
          <Tab.Pane>
            <CityMap />
          </Tab.Pane>
        )
      },
      {
        menuItem: {
          key: "emergencyForm",
          icon: "newspaper",
          content: "Add Emergency"
        },
        render: () => (
          <Tab.Pane>
            <EmergencyForm />
          </Tab.Pane>
        )
      }
    ];
    return panes;
  };

  render() {
    return (
      <div>
        <Tab panes={this.getPanes()} />
      </div>
    );
  }
}
