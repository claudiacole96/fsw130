import React from 'react'

function Pokemon (props) {


  return (
    <div id={props._id} className = 'homePokemon'>
      <h3>{props.name}</h3>
      <img src={props.image} alt="description"/>
      <h5>{props.gen}</h5>
      <h4>{props.type}</h4>
      <h4>Attacks: {props.attacks}</h4>

      <button onClick = {() => props.addChosen(props._id)}>Add To Your Pokemon</button>

    </div>
  )
}

export default Pokemon