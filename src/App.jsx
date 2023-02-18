import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Navbar from "./Components/Navbar/Navbar";
import Services from "./Pages/Services/Services";
import "./App.css";

function App() {
  return (
    <div className="hero">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/services" element ={<Services />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;