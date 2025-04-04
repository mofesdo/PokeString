/* eslint-disable react/prop-types */
import "./PkmnCard.css"
import sub from "../../assets/placeholder.png";

function PkmnCard({pkmn}){

    return (
        <li className="pkmn-card" key={pkmn.id}>
            <h2 className="pkmn-card__name">{pkmn.name}</h2>
            <img src={pkmn.sprites.front_default != null ? pkmn.sprites.front_default : sub} alt="" className="pkmn-card__sprite" />
            {/* <p className="pkmn-card__id"># {pkmn.id}</p> */}
        </li>
    );
}

export default PkmnCard;