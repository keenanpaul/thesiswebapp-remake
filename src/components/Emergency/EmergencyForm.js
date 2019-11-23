import React, { Component } from "react";
import {
  Button,
  Checkbox,
  Form,
  Input,
  Radio,
  Select,
  TextArea
} from "semantic-ui-react";
export default class EmergencyForm extends Component {
  render() {
    return (
      <Form>
        <Form.Group widths="equal">
          <Form.Field control={Input} placeholder="Emergency Type" />
          <Form.Field control={Input} placeholder="Incident Location" />
        </Form.Group>
        <Form.Field control={TextArea} placeholder="Additional Information" />
        <Form.Field control={Button}>Add Incident</Form.Field>
      </Form>
    );
  }
}
