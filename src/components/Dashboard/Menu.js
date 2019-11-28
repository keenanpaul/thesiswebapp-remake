import React, { Component } from "react";
import { Header, Button } from "semantic-ui-react";
import MenuTabs from "./MenuTabs";

export default class Dashboard extends Component {
  render() {
    return (
      <Header attached="top">
        <Header textAlign="left">
          <Button positive onClick={() => this.props.logout()} floated="right">
            Logout
          </Button>
          <MenuTabs logout={this.props.logout} />
        </Header>
      </Header>
    );
  }
}
