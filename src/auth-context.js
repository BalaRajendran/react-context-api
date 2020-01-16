import React from "react";

export default React.createContext({
  isAuth: false,
  toggleAuth: () => {},
  userName: "Guest",
  UserLocation: null
});
