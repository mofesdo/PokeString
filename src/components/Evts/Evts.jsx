import PkmnCard from "../PkmnCard/PkmnCard";
import { getPokemon, fetchSpawnsData } from "../../utils/api";
import { useState } from "react";

function Evts() {
  const eventSpawnNums = [1, 3, 9];
  const [eventSpawns, setEventSpawns] = useState([]);
  fetchSpawnsData(eventSpawnNums)
    .then((data) => {
      data.map((item) => {
        const name = item.name;
        const id = item.id;
        const sprite = item.sprites.front_default;
        eventSpawns.push({ name, id, sprite });
      });
      setEventSpawns(eventSpawns);
    })
    .catch((error) => console.error("Operation failed:", error));

  console.log(eventSpawns);
  return (
    <div className="events">
      <ul className="pokemon__list">
        {eventSpawns.map((pkmn) => (
          <PkmnCard key={pkmn.id} pkmn={pkmn} />
        ))}
      </ul>
      <h2>test</h2>
    </div>
  );
}

export default Evts;
