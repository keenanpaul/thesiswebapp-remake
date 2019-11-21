import React, { Component } from "react";
import { Button, Card, Icon } from "semantic-ui-react";

export default class EmergencyDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card fluid color="red" header="Option 1">
        <Card.Content>
          <Icon name="emergency" size="mlargeini" />
          <br />
          <Card.Header>Emergency</Card.Header>
          <br />
          <Card.Description>Emergency Location</Card.Description>
          <br />
          <Button basic color="green">
            Respond
          </Button>
        </Card.Content>
      </Card>
    );
  }
}
