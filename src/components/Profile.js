import React, { Component } from "react";
import AuthContext from "../auth-context";
import UserLocation from "./userLocation";

export default class profile extends Component {
  static contextType = AuthContext;
  render() {
    return (
      <div>
        <h1>
          {this.context.isAuth
            ? `${this.context.userName} Hii You are logged in!`
            : "Not logged in!"}
        </h1>
        <AuthContext.Provider
          value={{
            UserLocation: "Location is not set"
          }}
        >
          <UserLocation />
        </AuthContext.Provider>
      </div>
    );
  }
}
