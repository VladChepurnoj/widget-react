import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";

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

const App = () => {
  return (
    <div>
      <Search />
    </div>
  );
};

export default App;
