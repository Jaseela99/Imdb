import React from "react";
//import { Route,Routes } from 'react-router-dom';
import "./App.css";
import Navbar from "./components/Navbar";
import Slideshow from "./components/Slider";
import Trending from "./components/Trending";

function App() {
  return (
    <div>
      <Navbar />
      <Slideshow />
      <Trending />
    </div>
  );
}

export default App;
