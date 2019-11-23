import React, { Component } from "react";
import { Button, Card, Modal } from "semantic-ui-react";
import EmergencyDetailsModal from "./EmergencyDetailsModal";

export default class EmergencyDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  show = size => () => this.setState({ size, open: true });
  close = () => this.setState({ open: false });

  displayModal = () => {
    const { open, size } = this.state;
    return (
      <EmergencyDetailsModal
        size={size}
        open={open}
        close={this.close}
        emergencyType={this.props.emergencyType}
        emergencyLocation={this.props.emergencyLocation}
        date={this.props.date}
      />
    );
  };

  render() {
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
        {this.displayModal()}
      </div>
    );
  }
}
