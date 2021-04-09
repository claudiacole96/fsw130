import uuid from 'react-uuid'

export function addPokemon(id) {
  return {
    type: "ADD_CHOSEN_POKEMON",
    payload: id
  }
}

export function deletePokemon(id) {
  return {
    type: "DELETE_CHOSEN_POKEMON",
    payload: id
  }
}

export function filterPokemon(option){
  return {
    type: "FILTER_POKE",
    payload: option
  }
}

const initState = {
  pokemon: [
    {
      name: "Charmander",
      type: "fire",
      gen: 1,
      image: "http://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-blue-version/d/d4/Charmander.gif",
      attacks: ["", ""],
      _id: uuid()
    },
    {
      name: "Squirtle",
      type: "water",
      gen: 1,
      image: "https://embrosoft.com/wp-content/uploads/2017/04/Pokemon-Squirtle-frontal-left.jpg",
      attacks: ["", ""],
      _id: uuid()
    },
    {
      name: "Bulbasaur",
      type: "grass",
      gen: 1,
      image: "https://cdn.bulbagarden.net/upload/2/21/001Bulbasaur.png",
      attacks: ["", ""],
      _id: uuid()
    },
    {
      name: "Chikorita",
      type: "grass",
      gen: 2,
      image: "https://cdn.bulbagarden.net/upload/thumb/b/bf/152Chikorita.png/1200px-152Chikorita.png",
      attacks: ["", ""],
      _id: uuid()
    },
    {
      name: "Cyndaquil",
      type: "fire",
      gen: 2,
      image: "https://cdn.bulbagarden.net/upload/thumb/9/9b/155Cyndaquil.png/1200px-155Cyndaquil.png",
      attacks: ["", ""],
      _id: uuid()
    },
    {
      name: "Totodile",
      type: "water",
      gen: 2,
      image: "https://cdn.bulbagarden.net/upload/thumb/d/df/158Totodile.png/1200px-158Totodile.png",
      attacks: ["", ""],
      _id: uuid()
    },
    {
      name: "Treecko",
      type: "grass",
      gen: 3,
      image: "https://static.wikia.nocookie.net/nintendo/images/b/b8/Treecko.png/revision/latest?cb=20070423160733&path-prefix=en",
      attacks: ["", ""],
      _id: uuid()
    },
    {
      name: "Torchic",
      type: "fire",
      gen: 3,
      image: "https://cdn.bulbagarden.net/upload/9/91/255Torchic.png",
      attacks: ["", ""],
      _id: uuid()
    },
    {
      name: "Mudkip",
      type: "water",
      gen: 3,
      image: "https://static.wikia.nocookie.net/ultimate-pokemon-fanon/images/2/2f/Mudkip%27s_New_Art.png/revision/latest?cb=20140624165754",
      attacks: ["", ""],
      _id: uuid()
    },
    {
      name: "Piplup",
      type: "water",
      gen: 4,
      image: "https://static.wikia.nocookie.net/project-pokemon/images/c/c0/250px-393Piplup.png/revision/latest/top-crop/width/360/height/450?cb=20160917190507",
      attacks: ["", ""],
      _id: uuid()
    },
    {
      name: "Turtwig",
      type: "grass",
      gen: 4,
      image: "http://static.pokemonpets.com/images/monsters-images-800-800/387-Turtwig.png",
      attacks: ["", ""],
      _id: uuid()
    },
    {
      name: "Chimchar",
      type: "fire",
      gen: 4,
      image: "https://img.pokemondb.net/artwork/large/chimchar.jpg",
      attacks: ["", ""],
      _id: uuid()
    },
    {
      name: "Snivy",
      type: "grass",
      gen: 5,
      image: "https://cdn.bulbagarden.net/upload/thumb/7/75/495Snivy.png/1200px-495Snivy.png",
      attacks: ["", ""],
      _id: uuid()
    },
    {
      name: "Oshawott",
      type: "water",
      gen: 5,
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/501.png",
      attacks: ["", ""],
      _id: uuid()
    },
    {
      name: "Tepig",
      type: "fire",
      gen: 5,
      image: "https://i.pinimg.com/originals/c2/f4/fc/c2f4fc361e85aae6d3d62426c36cf4d1.png",
      attacks: ["", ""],
      _id: uuid()
    },
    {
      name: "Chespin",
      type: "grass",
      gen: 6,
      image: "https://cdn.bulbagarden.net/upload/thumb/c/ca/650Chespin.png/1200px-650Chespin.png",
      attacks: ["", ""],
      _id: uuid()
    },
    {
      name: "Fennekin",
      type: "fire",
      gen: 6,
      image: "https://pokestop.io/img/pokemon/fennekin-256x256.png",
      attacks: ["", ""],
      _id: uuid()
    },
    {
      name: "Froakie",
      type: "water",
      gen: 6,
      image: "https://cdn.bulbagarden.net/upload/thumb/1/18/656Froakie.png/250px-656Froakie.png",
      attacks: ["", ""],
      _id: uuid()
    },
    {
      name: "Rowlet",
      type: "grass",
      gen: 7,
      image: "https://img.pokemondb.net/artwork/large/rowlet.jpg",
      attacks: ["", ""],
      _id: uuid()
    },
    {
      name: "Litten",
      type: "fire",
      gen: 7,
      image: "https://cdn.bulbagarden.net/upload/thumb/0/0e/725Litten.png/1200px-725Litten.png",
      attacks: ["", ""],
      _id: uuid()
    },
    {
      name: "Popplio",
      type: "water",
      gen: 7,
      image: "https://img.pokemondb.net/artwork/large/popplio.jpg",
      attacks: ["", ""],
      _id: uuid()
    },
    {
      name: "Grookey",
      type: "grass",
      gen: 8,
      image: "https://cdn.bulbagarden.net/upload/thumb/9/93/810Grookey.png/1200px-810Grookey.png",
      attacks: ["", ""],
      _id: uuid()
    },
    {
      name: "Scorbunny",
      type: "fire",
      gen: 8,
      image: "https://i.pinimg.com/originals/dc/fa/51/dcfa514a5aa39b81d20c3aec0e840dfd.png",
      attacks: ["", ""],
      _id: uuid()
    },
    {
      name: "Sobble",
      type: "water",
      gen: 8,
      image: "http://static.pokemonpets.com/images/monsters-images-800-800/816-Sobble.png",
      attacks: ["", ""],
      _id: uuid()
    },
  ],
  filteredPokemon: [],
  chosen: []
}

export function pokemonReducer(state = initState, action) {
  switch (action.type) {
    case "ADD_POKEMON":
      const oldArr = state.items
      const newArr = oldArr.filter(item => item._id === action.payload)
      console.log(newArr)
      return {
        ...state,
        chosen: [...state.chosen, newArr[0]]
      }
    case "DELETE_POKEMON":
      const oArr = state.chosen
      const index = oArr.findIndex(id => id._id === action.payload)
      oArr.splice(index, 1)
      return {
        ...state,
        chosen: oArr
      }
    case "FILTER_POKEMON":
      const oldArray = state.pokemon
      const newArray = oldArray.filter(x => x.type === action.payload)
      return {
        ...state,
        filteredPokemon: newArray
      }
    default:
      return state
  }
}