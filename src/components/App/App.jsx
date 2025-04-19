//import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

//Import Components
import Header from "../Header/Header";
import Main from "../Main/Main";
import Evts from "../Evts/Evts";
import Create from "../Create/Create";
import EventsPage from "../EventsPage/EventsPage";
import events from "../../events.json";

function App() {
  return (
    <div className="page">
      <div className="page__content">
        <Header></Header>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/events" element={<EventsPage events={events}/>}/>
          <Route path="/events/Stunning-Styles" element={<Evts event={events[0]}/>} />
          <Route path="/events/Spring-Into-Spring-2025" element={<Evts event={events[1]}/>} />
          <Route path="/events/Pokémon-Horizons-The-Series-Celebration-Event" element={<Evts event={events[0]}/>} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
