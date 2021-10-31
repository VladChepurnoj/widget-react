import React from "react";

const Route = ({ path, children }) => {
  return window.location.path === path ? children : null;
};

export default Route;
