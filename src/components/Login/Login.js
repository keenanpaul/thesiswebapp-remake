import React, { Component } from "react";
import { Button, Form, Grid, Segment } from "semantic-ui-react";

export default class Login extends Component {
  render() {
    return (
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
        color="teal"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Form size="large">
            <Segment stacked>
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="E-mail address"
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
              />

              <Button color="teal" fluid size="large">
                Login
              </Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    );
  }
}
