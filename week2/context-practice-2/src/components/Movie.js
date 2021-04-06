import React from 'react'
import {ContextConsumer} from './contextState'

function Movie (props) {
  let count = 1
  return (
    <ContextConsumer>
      {context => (
        <div id="movie-div">          
            {context.movies.map((movie) => {
              count += 1
              console.log(count)
              return (
                <div id = {count} key = {count} className="movie">
                  <img src={movie.imageUrl} />
                  <h2 className="title">{movie.title}</h2>
                  <h4 className="year">{movie.year}</h4>
                  <br/>
                  <button className="movie-button" onClick={context.delete}>Delete</button>
                </div>
              )
            })}
        </div>      
      )}
    </ContextConsumer>
  )
}

export default Movie