import React from 'react'
import {ContextConsumer} from './contextState'

function Item (props) {
  let count = 1
  return (
    <ContextConsumer>
      {context => (
        <div id="item-div">          
            {context.items.map((i) => {
              count += 1
              console.log(count)
              return (
                <div id = {count} key = {count}>
                  <h2>{i.title}</h2>
                  <h4>{i.description}</h4>
                  <img src={i.imageUrl}/>
                  <br/>
                  <button className="items" onClick={context.delete}>Delete</button>
                </div>
              )
            })}
        </div>      
      )}
    </ContextConsumer>
  )
}

export default Item