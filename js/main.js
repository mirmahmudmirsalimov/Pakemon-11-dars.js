var pokemonArray = pokemons;

var elList = document.querySelector(".list");

function renderPokemons(array, wrapper) {
    elList.innerHTML = null;

    for (const item of array) {
        // li

        const newLi = document.createElement("li");
        

        // img
        const newImg = document.createElement("img");
        newImg.src = item.img;
        newImg.width = 150
        

        // h3
        const newH = document.createElement("h3");
        newH.textContent = item.name;
        

        // h3 img

        newLi.appendChild(newImg)
        newLi.appendChild(newH)
        
        console.log(newLi);
        
        elList.appendChild(newLi)
    }
}


renderPokemons(pokemonArray, elList)




