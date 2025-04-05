/* eslint-disable react/prop-types */
import "./Evts.css";
import PkmnCard from "../PkmnCard/PkmnCard";
import { fetchSpawnsData } from "../../utils/api";
import { useEffect, useState } from "react";

function Evts({name, wildSpawnNums, raidSpawnNums}) {
  console.log("opened via route");
  // const wildSpawnNums = [351, 10028, 10029, 10030, 412, 10034, 10035];
  const wildString = wildSpawnNums.filter((num) => num < 1020).toString();
  const [wildSpawns, setWildSpawns] = useState([]);

  // const raidSpawnNums = [422, 10039, 677, 744, 10419, 10420, 10421, 724, 10413];
  const raidString = raidSpawnNums.filter((num) => num < 1020).toString();
  const [raidSpawns, setRaidSpawns] = useState([]);

  useEffect(() => {
    fetchSpawnsData(wildSpawnNums)
      .then((data) => {
        data.map(() => {
          setWildSpawns([...wildSpawns, ...data]);
        });
      })
      .catch((error) => console.error("Operation failed:", error));
  }, []);

  useEffect(() => {
    fetchSpawnsData(raidSpawnNums).then((data) => {
      data.map(() => {
        setRaidSpawns([...raidSpawns, ...data]);
      });
    });
  }, []);

  const copyString = (str) => {
    navigator.clipboard.writeText(str);
  };
  return (
    <div className="events">
      <h1 className="event__title">{name}</h1>
      <h2 className="events__heading">Wild Spawns</h2>
      <ul className="pokemon__list">
        {wildSpawns.map((pkmn) => (
          <PkmnCard key={pkmn.id} pkmn={pkmn} />
        ))}
      </ul>
      <div className="event__copy-container">
        <p className="events__string">Search String: {wildString} </p>
        <button className="events__copy-btn" onClick={copyString(wildString)}>
          Copy to Clipboard
        </button>
      </div>
      <h2 className="events__heading">Raid Spawns</h2>
      <ul className="pokemon__list">
        {raidSpawns.map((pkmn) => (
          <PkmnCard key={pkmn.id} pkmn={pkmn} />
        ))}
      </ul>
      <div className="event__copy-container">
        <p className="events__string">Search String: {raidString} </p>
        <button className="events__copy-btn" onClick={copyString(raidString)}>
          Copy to Clipboard
        </button>
      </div>
    </div>
  );
}

export default Evts;
