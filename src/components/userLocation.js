import React, { Component } from "react";
import AuthContext from "./../auth-context";

export default class UserLocation extends Component {
  static contextType = AuthContext;
  render() {
    return "User Location :" + this.context.UserLocation;
  }
}
