import React, {Component} from "react"

const {Provider, Consumer} = React.createContext()

class ContextProvider extends Component {
    constructor() {
        super()
        this.state = {
            movies: [
                {
                    title: "Soul",
                    year: 2020,
                    imageUrl: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRthOXPbcU5dbcSATgV9ZGxgfNYSSgAIXl_4pJ860X5BlKvcKvM"
                },
                {
                    title: "Cars",
                    year: 2006,
                    imageUrl: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRD_-XQ2eXeyZO4376htFF_XwwznCLHyRZbcEvrERpG290VvX6o"
                },
                {
                    title: "Up",
                    year: 2009,
                    imageUrl: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSf-Ouh9ae2uEWHKOlV20N3ENM_8XtN8TP4FP_xtY72g5xo-b7U"
                }
            ]
        }
        this.handleDelete = this.handleDelete.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleDelete(e) {
        const deleteButton = document.getElementsByClassName("movie-buttob")
        for(let i=0; i<deleteButton.length; i++) {
            if (e.target === deleteButton[i]) {
                let parent = deleteButton[i].parentNode
                parent.parentNode.removeChild(parent)
            }
        }
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState(
            {[name]: value}
        )
    }

    handleSubmit(event) {
        event.preventDefault()
        let newMovie = {
            title: this.state.title,
            year: this.state.year,
            imageUrl: this.state.imageUrl
        }
        let state = this.state
        state.movies.push(newMovie)
        this.setState(
            {
                title: "",
                year: 0,
                imageUrl: ""
            }
        )
    }

    render() {
        const movies = this.state.movies
        return (
            <Provider value={{movies: movies, delete: this.handleDelete, change: this.handleChange, submit: this.handleSubmit}}>
                {this.props.children}
            </Provider>
        )
    }
}

export {ContextProvider, Consumer as ContextConsumer}