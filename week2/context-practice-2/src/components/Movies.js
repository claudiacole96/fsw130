import React from "react"

import {FormContextConsumer} from "./FormContext"

class Movies extends React.Component {
    state = {
        newMovieTitle: "",
        newMovieYear: "",
        newMovieGenre: ""
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({[name]: value})
    }

    render() {
        return(
            <div className="movie">
                <FormContextConsumer>
                    {({newMovieTitle}, {newMovieYear}, {newMovieGenre}) => (
                        <div>
                            <span className="title">{newMovieTitle}</span>
                            <span className="year">{newMovieYear}</span>
                            <span className="genre">{newMovieGenre}</span>
                        </div>
                    )}
                </FormContextConsumer>
            </div>
        )
    }
    
}

export default Movies