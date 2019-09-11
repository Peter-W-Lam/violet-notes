import React from 'react';
import './App.css';

import Main from './app-contents/Main'
import AuthenticationCard from './app-contents/login-screens/AuthenticationCard'
// import Sidebar from './app-contents/sidebar/Sidebar'
// import Dashboard from './app-contents/main-content/Dashboard'
// import Writer from './app-contents/writer/Writer'
// import Login from './Login'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className="App">
        
        <Route path="/" exact component={AuthenticationCard} />
        <Route path="/app/" component={Main} />
        
      </div>
    </Router>
  );
}

export default App;
