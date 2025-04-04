import "./Evts.css";
import PkmnCard from "../PkmnCard/PkmnCard";
import { fetchSpawnsData } from "../../utils/api";
import { useEffect, useState } from "react";

function Evts() {
  const eventSpawnNums = [351, 10028, 10029, 10030, 412, 10034, 10035];
  const spawnString = eventSpawnNums.filter((num) => num < 1020).toString();
  console.log(spawnString);
  const [eventSpawns, setEventSpawns] = useState([]);

  useEffect(() => {
    fetchSpawnsData(eventSpawnNums)
      .then((data) => {
        data.map(() => {
          setEventSpawns([...eventSpawns, ...data]);
        });
      })
      .catch((error) => console.error("Operation failed:", error));
  }, []);
  const copyString = () => {
    navigator.clipboard.writeText(spawnString);
  };
  return (
    <div className="events">
      <h2 className="events__heading">Wild Spawns</h2>
      <ul className="pokemon__list">
        {eventSpawns.map((pkmn) => (
          <PkmnCard key={pkmn.id} pkmn={pkmn} />
        ))}
      </ul>
      <div className="event__copy-container">
        <p className="events__string">Search String: {spawnString} </p>
        <button className="events__copy-btn" onClick={copyString}>
          Copy to Clipboard
        </button>
      </div>
    </div>
  );
}

export default Evts;
