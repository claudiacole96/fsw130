import React from "react"

const {Provider, Consumer} = React.createContext()

class FormContextProvider extends React.Component {
    g

    changeState = (newMovieTitle, newMovieYear, newMovieGenre) => {
        this.setState(
            {newMovieTitle},
            {newMovieYear},
            {newMovieGenre}
        )
    }

    render() {
        const {newMovieTitle} = this.state.newMovieTitle
        const {newMovieYear} = this.state.newMovieYear
        const {newMovieGenre} = this.state.newMovieGenre
        return (
            <Provider value={{newMovieTitle, newMovieYear, newMovieGenre, changeState: this.changeState}}>
                {this.props.children}
            </Provider>
        )
    }
}

export {FormContextProvider, Consumer as FormContextConsumer}