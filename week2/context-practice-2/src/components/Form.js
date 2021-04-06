import React from 'react'
import {ContextConsumer} from './contextState'

function Form (props) {
  return (
    <ContextConsumer>
      {context => (
        <div id="form-container">
          <form onSubmit={context.submit}>
            <input
                type="text"
                name="title"
                className="title"
                placeholder="Title"
                onChange={context.change}>
            </input>
            <input
                type="number"
                name="year"
                className="year"
                placeholder="Year"
                onChange={context.change}>
            </input>
            <input
                type="text"
                name="imageUrl"
                className="image-url"
                placeholder="Image URL"
                onChange={context.change}>
            </input>
            <button id="form-button">Add</button>
          </form>
        </div>
      )}
      
    </ContextConsumer>
      
  )
}

export default Form