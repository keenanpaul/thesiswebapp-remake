import React, { Component } from "react";
import Map from "./Map";

export default class CityMap extends Component {
  render() {
    return (
      <div>
        <Map center={{ lat: 10.324646, lng: 123.942197 }} zoom={15} />
      </div>
    );
  }
}
