const urlBase = "https://pokeapi.co/api/v2/pokemon-form/";

function getPokemon(id) {
  return fetch(`${urlBase}${id}`).then(checkResponse);
}

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  } else {
    Promise.reject(`Error ${res.status}`);
  }
}

async function fetchSpawnsData(array) {
  try {
    const promises = array.map((element) =>
      fetch(`${urlBase}/${element}`).then(checkResponse)
    );
    const results = await Promise.all(promises);
    return results;
  } catch (error) {
    console.error("Fetching error:", error);
    throw error;
  }
}

export { getPokemon, fetchSpawnsData };
