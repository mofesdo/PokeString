import "./Evts.css"
import PkmnCard from "../PkmnCard/PkmnCard";
import { fetchSpawnsData } from "../../utils/api";
import { useEffect, useState } from "react";

function Evts() {
  const eventSpawnNums = [351, 10028, 10029, 10030, 412, 10034, 10035];
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

  console.log(eventSpawns);
  return (
    <div className="events">
      <ul className="pokemon__list">
        {eventSpawns.map((pkmn) => (
          <PkmnCard key={pkmn.id} pkmn={pkmn}/>
        ))}
      </ul>
      <h2>test</h2>
    </div>
  );
}

export default Evts;
