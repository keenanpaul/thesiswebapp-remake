import React, { Component } from "react";
import { Button, Card, Modal } from "semantic-ui-react";

export default class EmergencyDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  show = size => () => this.setState({ size, open: true });
  close = () => this.setState({ open: false });

  render() {
    const { open, size } = this.state;
    return (
      <div>
        <div style={{ padding: "5px" }}>
          <Card onClick={this.show("small")}>
            <Card.Content>
              <Card.Header>{this.props.emergencyType}</Card.Header>
              <Card.Meta>{this.props.date}</Card.Meta>
              <Card.Description>
                {this.props.emergencyLocation}
              </Card.Description>
            </Card.Content>
          </Card>
        </div>
        <div>
          <Modal size={size} open={open} onClose={this.close}>
            <Modal.Header>{this.props.emergencyType}</Modal.Header>
            <Modal.Content>
              <p>{this.props.emergencyLocation}</p>
              <p>{this.props.date}</p>
            </Modal.Content>
            <Modal.Actions>
              <Button negative>Request Volunteers</Button>
              <Button positive>Send Responders</Button>
            </Modal.Actions>
          </Modal>
        </div>
      </div>
    );
  }
}
