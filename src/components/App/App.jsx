//import { useState } from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";

//Import Components
import Header from "../Header/Header";
import Main from "../Main/Main";
import Evts from "../Evts/Evts";
import Create from "../Create/Create";
import EventsPage from "../EventsPage/EventsPage";
import events from "../../events.json";
import Popular from "../Popular/Popular";

function App() {
  return (
    <div className="page">
      <div className="page__content">
        <Header></Header>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/events" element={<EventsPage events={events}/>}/>
          <Route path="/events/Pokémon-Horizons-The-Series-Celebration-Event" element={<Evts event={events[0]}/>} />
          <Route path="/events/Sweet-Discoveries" element={<Evts event={events[1]}/>} />
          <Route path="/events/Growing-Up" element={<Evts event={events[2]}/>} />
          <Route path="/events/Crown-Clash" element={<Evts event={events[3]}/>} />
          <Route path="/events/Pokemon-Go-Fest-2025-Global" element={<Evts event={events[4]}/>} />
          <Route path="/create" element={<Create />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
