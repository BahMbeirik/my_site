import React, { Component } from 'react'
import Navbar from "./components/Navbar";
// import "./css/style.css";
import { BrowserRouter , Route,Routes } from 'react-router-dom';
import Home from "./components/Home";
import Projer from "./components/Les-projer";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="projer" element={<Projer />} />
          <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    )
  }
}

export default App
