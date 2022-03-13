import React from "react";
import { BrowserRouter as Router,Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Details from "./components/Details";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Details />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      </BrowserRouter>
       
    </div>
  );
}

export default App;
