//import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

//Import Components
import Header from "../Header/Header";
import Main from "../Main/Main";
import Evts from "../Evts/Evts";
import Create from "../Create/Create";
import EventsPage from "../EventsPage/EventsPage";

function App() {
  return (
    <div className="page">
      <div className="page__content">
        <Header></Header>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/events"
            element={
              <EventsPage/>
              // <Evts
              //   name="Stunning Styles"
              //   wildSpawnNums={[351, 10028, 10029, 10030, 412, 10034, 10035]}
              //   raidSpawnNums={[
              //     422, 10039, 677, 744, 10419, 10420, 10421, 724, 10413,
              //   ]}
            }
          />
          <Route path="/create" element={<Create />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
