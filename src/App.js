import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navibar from "./components/mainComponents/Navibar";

import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

import {Main} from "./components/Main"
import {Home} from "./components/Home"
import {Services} from "./components/Services"
import {Articles} from "./components/Articles"
import {Treatments} from "./components/Treatments"
import {About} from "./components/About"
import NavHeader from "./components/mainComponents/NavHeader";
import {Contacts} from "./components/Contacts";
import Footer from "./components/mainComponents/Footer";


function App() {


  return (
      <>
      <BrowserRouter>
        <NavHeader/>
        <Navibar/>
          <Routes>
              <Route exact  path="/" element={<Main/>} />
          <Route  path="/home" element={<Home/>} />
          <Route  path="/services" element={<Services/>} />
          <Route  path="/articles" element={<Articles/>} />
          <Route  path="/treatments" element={<Treatments/>} />
          <Route  path="/about" element={<About/>} />
              <Route path="/contacts" element={<Contacts/>}/>
          </Routes>

      </BrowserRouter>
          <Footer/>
      </>
  );
}

export default App;
