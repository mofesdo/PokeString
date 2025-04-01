import PkmnCard from "../PkmnCard/PkmnCard";
import { getPokemon } from "../../utils/api";

function Events(){
    const eventSpawnNums = [1, 3, 9];
    const eventSpawns = [];
    eventSpawnNums.forEach((pkmn) => {
        getPokemon(pkmn).then((data) => {
            eventSpawns.push({name: data.name, sprite: data.sprites.front_default, id:data.id})
        });
    }, []);
    console.log(eventSpawns);
    return (
        <div className="events"><ul className="pkmn__list"></ul>
        </div>
    );
}

export default Events;