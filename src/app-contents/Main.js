import React from 'react';
import './Main.css'

import Sidebar from './sidebar/Sidebar'
import Dashboard from './main-content/Dashboard'
import Writer from './writer/Writer'

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "", 
            description: ""
        }

        this.setWriter = this.setWriter.bind(this)
    }

    setWriter(title, description) {
        this.setState({title: title, description: description})
    }

    render(){
        return(
            <div className="Main">
                <Sidebar />
                <Switch>
                    <Route path="/app" exact 
                           render={() => {
                               return (<Dashboard setWriter={this.setWriter}/>)
                           }} />
                    <Route 
                        path="/app/editor" 
                        render={(props) => <Writer title={this.state.title} 
                                                   description={this.state.description}/>}
                    />
                </Switch>
            </div>
        )
    }
}
export default Main

