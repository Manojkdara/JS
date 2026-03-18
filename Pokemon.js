function getPokemon(name){
    name= document.getElementById("pokemon").value.toLocaleLowerCase()
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(result=> {
            if (!result.ok){
                throw "Error"
            }
            return result.json()
            })
        .then(data=> {
            console.log(data)
            const pokemonsprite= data.sprites.front_shiny;
            const imgelement = document.getElementById("pokemonsprite")

            imgelement.src=pokemonsprite
            imgelement.style.display= "block"
        })

        .catch(error=> console.log(error)) 
        }

//getPokemon()