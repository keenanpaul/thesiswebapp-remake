import React, { Component } from "react";
import { Header, Image } from "semantic-ui-react";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Header as="h2" attached="top">
        <Header as="h3" textAlign="right">
          <Image
            circular
            src="https://react.semantic-ui.com/images/avatar/large/patrick.png"
          />{" "}
          Keenan
        </Header>
      </Header>
    );
  }
}
