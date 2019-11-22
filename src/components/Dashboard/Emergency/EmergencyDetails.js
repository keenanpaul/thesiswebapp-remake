import React, { Component } from "react";
import { Button, Card, Icon } from "semantic-ui-react";

export default class EmergencyDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card>
        <Card.Content>
          <Card.Header>{this.props.emergencyType}</Card.Header>
          <Card.Meta>{this.props.timeReceived}</Card.Meta>
          <Card.Description>{this.props.emergencyLocation}</Card.Description>
        </Card.Content>
      </Card>
    );
  }
}
