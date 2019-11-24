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
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import { store } from "react-notifications-component";
import firestore from "../../config/Firebase";

export default class EmergencyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      incidentLocation: "",
      incidentType: "",
      incidentCoordinates: {
        lng: "",
        lat: ""
      },
      reportedBy: ""
    };
  }

  handleChange = incidentLocation => {
    this.setState({ incidentLocation });
  };

  addEmergency = e => {
    e.preventDefault();
    console.log("submit", this.state);

    const incident = {
      incidentType: this.state.incidentType,
      incidentLocation: this.state.incidentLocation,
      reportedBy: this.state.reportedBy,
      incidentCoordinates: this.state.incidentCoordinates,
      dateReceived: Date.now()
    };

    firestore
      .collection("Emergency")
      .doc()
      .set(incident)
      .then(() => {
        console.log("New incident");
        store.addNotification({
          title: "New Incident!",
          message: `${this.state.incidentType} reported by ${this.state.reportedBy}`,
          type: "danger",
          insert: "top",
          container: "top-right",
          animationIn: ["animated", "fadeIn"],
          animationOut: ["animated", "fadeOut"],
          dismiss: {
            duration: 5000,
            onScreen: true
          }
        });
      })
      .catch(error => {
        console.log("Error", error);
      });
  };

  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        const coordinates = {
          lat: latLng.lat,
          lng: latLng.lng
        };
        this.setState({ incidentCoordinates: coordinates }, () => {
          console.log("Coordinates", this.state.incidentCoordinates);
        });
      })
      .catch(error => console.error("Error", error));
  };

  inputHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <Form>
        <Form.Group widths="equal">
          <Form.Field
            control={Input}
            name="incidentType"
            placeholder="Incident Type"
            value={this.state.incidentType}
            onChange={e => {
              this.inputHandler(e);
            }}
          />
          <Form.Field>
            <PlacesAutocomplete
              value={this.state.incidentLocation}
              onChange={this.handleChange}
              onSelect={this.handleSelect}
            >
              {({
                getInputProps,
                suggestions,
                getSuggestionItemProps,
                loading
              }) => (
                <div>
                  <input
                    {...getInputProps({
                      placeholder: "Incident Location",
                      className: "location-search-input"
                    })}
                  />
                  <div className="autocomplete-dropdown-container">
                    {loading && <div>Loading...</div>}
                    {suggestions.map(suggestion => {
                      const className = suggestion.active
                        ? "suggestion-item--active"
                        : "suggestion-item";
                      // inline style for demonstration purpose
                      const style = suggestion.active
                        ? { backgroundColor: "#fafafa", cursor: "pointer" }
                        : { backgroundColor: "#ffffff", cursor: "pointer" };
                      return (
                        <div
                          {...getSuggestionItemProps(suggestion, {
                            className,
                            style
                          })}
                        >
                          <span>{suggestion.description}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </PlacesAutocomplete>
          </Form.Field>
          <Form.Field
            control={Input}
            name="reportedBy"
            value={this.state.reportedBy}
            placeholder="Reported by"
            onChange={e => {
              this.inputHandler(e);
            }}
          />
        </Form.Group>
        <Form.Field
          control={TextArea}
          name="additionalInformation"
          value={this.state.additionalInformation}
          placeholder="Additional Information"
          onChange={e => {
            this.inputHandler(e);
          }}
        />
        <Button onClick={e => this.addEmergency(e)}>Report Incident</Button>
      </Form>
    );
  }
}
