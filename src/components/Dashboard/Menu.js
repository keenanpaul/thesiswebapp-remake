import React, { Component } from "react";
import { Header, Image, Button } from "semantic-ui-react";
import MenuTabs from "./MenuTabs";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Header as="h2" attached="top">
        <Header as="h3" textAlign="right">
          <MenuTabs />
        </Header>
      </Header>
    );
  }
}
