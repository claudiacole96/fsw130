import React from "react"
import ReactDOM from "react-dom"

import App from "./App"
import {FormContextProvider} from "./components/FormContext"

ReactDOM.render(
    <FormContextProvider>
        <App />
    </FormContextProvider>,
    document.getElementById("root")
)