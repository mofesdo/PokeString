//import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

//Import Components
import Header from "../Header/Header";
import Main from "../Main/Main"
import Evts from "../Evts/Evts";

function App() {
  return (
    <div className="page">
      <div className="page__content">
        <Header></Header>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/events" element={<Evts/>}/>
        </Routes>
        
      </div>
    </div>
  );
}

export default App;
