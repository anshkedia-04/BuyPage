import React from "react";
import FilterBar from "./components/FilterBar";
import PropertyList from "./components/PropertyList";
import "./index.css";

const App = () => {
  return (
    <div>
      <FilterBar />
      <PropertyList />
    </div>
  );
};

export default App;
