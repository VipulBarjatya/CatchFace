import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ParticlesBg color="#ffffff" num={150} type="cobweb" bg={true} />
      <Logo />
      <Navigation />
      <Rank />
      <ImageLinkForm />
      {/* <FaceRecognition/> */}
    </div>
  );
}

export default App;
