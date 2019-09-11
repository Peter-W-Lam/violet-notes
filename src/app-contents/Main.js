import React from 'react';
import './Main.css'

import Sidebar from './sidebar/Sidebar'
import Dashboard from './main-content/Dashboard'
import Writer from './writer/Writer'

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

class Main extends React.Component {
    render(){
        return(
            <div className="Main">
                <Sidebar />
                <Router>
                    <Route path="/app" exact component={Dashboard} />
                    <Route path="/app/editor" component={Writer} />
                </Router>
            </div>
        )
    }
}
export default Main

