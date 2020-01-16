import React, { Component } from "react";

import Login from "./components/Login";
import Profile from "./components/Profile";
import AuthContext from "./auth-context";

class App extends Component {
  state = {
    isAuth: false
  };

  toggleAuth = () => {
    this.setState(prevState => {
      return {
        isAuth: !prevState.isAuth,
        userName: "Balaji"
      };
    });
  };

  render() {
    return (
      <AuthContext.Provider
        value={{
          isAuth: this.state.isAuth,
          userName: this.state.userName,
          toggleAuth: this.toggleAuth
        }}
      >
        <Login />
        <Profile />
      </AuthContext.Provider>
    );
  }
}

export default App;
