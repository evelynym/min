import React from "react"
import ReactDOM from "react-dom"
import NevigationMenu from "./components/NevigationMenu"


class App extends React.Component{
    render(){
        return(
            <div>
                <h1>Hello This is Min.</h1>
                <NevigationMenu />
            </div>
        )
    }
}

ReactDOM.render(<App />,document.getElementById('root'))