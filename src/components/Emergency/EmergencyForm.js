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

export default class EmergencyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      incidentCoordinates: {
        lng: "",
        lat: ""
      }
    };
  }

  handleChange = address => {
    this.setState({ address });
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

  render() {
    return (
      <Form>
        <Form.Group widths="equal">
          <Form.Field control={Input} placeholder="Emergency Type" />
          <Form.Field>
            <PlacesAutocomplete
              value={this.state.address}
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
                      placeholder: "Search Places ...",
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
        </Form.Group>
        <Form.Field control={TextArea} placeholder="Additional Information" />
        <Form.Field control={Button}>Add Incident</Form.Field>
      </Form>
    );
  }
}
