import React from "react";
import LandingPage from "./Components/LandingPage/LandingPage";
import Navbar from "./Components/Navigation/Navbar";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <LandingPage />
    </BrowserRouter>
  );
}

export default App;
