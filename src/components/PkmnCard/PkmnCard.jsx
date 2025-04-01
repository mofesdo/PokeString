import "./PkmnCard.css"
function PkmnCard(pokemon){
    return (
        <li className="pkmn-card">
            <h2 className="pkmn-card__name">{pokemon.name}</h2>
            <img src={pokemon.sprite} alt="" className="pkmn-card__sprite" />
            <p className="pkmn-card__id">{pokemon.id}</p>
        </li>
    );
}

export default PkmnCard;