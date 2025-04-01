function getPokemon(id) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(checkResponse)
}


function checkResponse(res){
    if(res.ok){
        return res.json();
    }
    else{
        Promise.reject(`Error ${res.status}`);
    }
}

export {getPokemon};