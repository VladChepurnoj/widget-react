import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";

const items = [
  {
    title: "What is react?",
    content: "React is a js framework",
  },
  {
    title: "Why use react?",
    content: "React is a favorite library amound engineers",
  },
  {
    title: "How do you use react?",
    content: "You use react by creating components",
  },
];

const options = [
  {
    label: "The color red",
    value: "red",
  },
  {
    label: "The color green",
    value: "green",
  },
  {
    label: "A shade of blue",
    value: "blue",
  },
];

const App = () => {
  return (
    <div>
      <Translate />
    </div>
  );
};

export default App;
