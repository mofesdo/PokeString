import "./Main.css";
import { getPokemon } from "../../utils/api";
import { useState } from "react";
import { useEffect } from "react";

function Main() {
  const [pokemon, setPokemon] = useState({});
  useEffect(() => {
    getPokemon(10034).then((data) => {
      setPokemon({ name: data.name, sprite: data.sprites.front_default });
      console.log(data);
    });
  }, []);

  return (
    <div className="main">
      <img src={pokemon.sprite} alt="" />
      <p>This is main</p>
    </div>
  );
}

export default Main;
