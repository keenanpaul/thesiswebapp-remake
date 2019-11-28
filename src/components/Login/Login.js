import React, { Component } from "react";
import auth from "../../authentication/auth";
import { Button, Form, Grid, Segment } from "semantic-ui-react";

export default class Login extends Component {
  loginHandler = () => {
    auth.login(() => {
      this.props.history.push("/dashboardCCP");
    });
  };
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

              <Button
                onClick={() => this.loginHandler()}
                color="teal"
                fluid
                size="large"
              >
                Login
              </Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    );
  }
}
