import React, { Component } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Geolocation from "./components/Geolocation"
import Grounds from "./ground_components/Grounds"


class App extends Component {
  state = {};
  render() {
    return (
      <BrowserRouter>
      <nav>
        <Link to="/geo">Geolocation</Link>
        <Link to="/grounds">Ground Weather</Link>
      </nav>
        <Routes>
          <Route path='/geo' element={<Geolocation />} />
          <Route path='/grounds' element={<Grounds />} />
        </Routes>
        
      </BrowserRouter>
    );
  }
}

export default App;
