import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";

const Route = ({ path, children }) => {
  useEffect(() => {
    const onLocationChange = () => {
      console.log("Location change");
    };

    window.addEventListener("popstate", onLocationChange);
    return () => {
      window.removeEventListener("popstate", onLocationChange);
    };
  }, []);
  return window.location.path === path ? children : null;
};

export default Route;
