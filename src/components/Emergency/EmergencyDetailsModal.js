import React, { Component } from "react";
import { Modal, Button } from "semantic-ui-react";

export default class EmergencyDetailsModal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Modal
          size={this.props.size}
          open={this.props.open}
          onClose={this.props.close}
        >
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
    );
  }
}
