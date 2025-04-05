/* eslint-disable react/prop-types */
import "./Evts.css";
import PkmnCard from "../PkmnCard/PkmnCard";
import { fetchSpawnsData } from "../../utils/api";
import { useEffect, useState } from "react";

function Evts({event}) {
  console.log(event);
  // const wildSpawnNums = [351, 10028, 10029, 10030, 412, 10034, 10035];

  const [wildString, setWildString] = useState('');
  const [wildSpawns, setWildSpawns] = useState([]);

  // const raidSpawnNums = [422, 10039, 677, 744, 10419, 10420, 10421, 724, 10413];
  const [raidString, setRaidString] = useState('');
  const [raidSpawns, setRaidSpawns] = useState([]);

  useEffect(() => {
    fetchSpawnsData(event.wildSpawns)
      .then((data) => {
        data.map(() => {
          setWildSpawns([...wildSpawns, ...data]);
          setWildString(event.wildSpawns.filter((num) => num < 1020).toString());
        });
      })
      .catch((error) => console.error("Operation failed:", error));
  }, []);

  useEffect(() => {
    fetchSpawnsData(event.raidSpawns).then((data) => {
      data.map(() => {
        setRaidSpawns([...raidSpawns, ...data]);
        setRaidString(event.raidSpawns.filter((num) => num < 1020).toString());
      });
    });
  }, []);

  const copyToClipboard = (str) => {
    const textToCopy = str;
  
    // Use the Clipboard API to copy the string to the clipboard
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        console.log("Copied to clipboard: " + str)
      })
      .catch(err => {
        console.error("Error copying text: ", err);
      });
  }
  return (
    <div className="events">
      <h1 className="event__title">{event.name}</h1>
      <h2 className="events__heading">Wild Spawns</h2>
      <ul className="pokemon__list">
        {wildSpawns.map((pkmn) => (
          <PkmnCard key={pkmn.id} pkmn={pkmn} />
        ))}
      </ul>
      <div className="event__copy-container">
        <p className="events__string">Search String: {wildString} </p>
        <button className="events__copy-btn" onClick={()=>copyToClipboard(wildString)}>
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
        <button className="events__copy-btn" onClick={()=>copyToClipboard(raidString)}>
          Copy to Clipboard
        </button>
      </div>
    </div>
  );
}

export default Evts;
