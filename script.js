async function getData() {
    var response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
    var data = await response.json();


    for(var i = 0; i < data["results"].length; i++){
        getPokemon(data["results"][i]["url"])
    }

    // hide spinning wheel, show loaded data
}

getData();


async function getPokemon(url){
    var response = await fetch(url);
    var data = await response.json();

    console.log(data);

    var element = document.querySelector("#pokemon");
    var htmlString = `<img src="${data["sprites"]["front_default"]}" />`
    element.innerHTML = element.innerHTML + htmlString;
}