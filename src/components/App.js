import React from 'react'
import NavBar from './NavBar'
import { 
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Home from '../views/Home'


function App() {
  return (
    <Router>
      
      <header className="header">
        <NavBar />
      </header>

      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>


    </Router>
  );
}

export default App;
