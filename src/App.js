import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from './Login/login';
import Home from './Home/Home';
import {ListProvider} from './Context/Context'
import Viewcustomer from './Home/Viewcustomer';
import Header from './Header/Header';
import Addjob from './Home/Addjob'

class App extends React.Component
{
  render()  
{
  return (
    
    <Router>
      
    <div className="App">
    <Header/>
          <Switch>
            
            <Route exact path='/' component={Login} />
            <Route path="/login-in" component={Login} />
            
            <ListProvider>
            <Route path="/Home" component={Home} />
            <Route path="/custview" component={Viewcustomer} />
            <Route path="/addjob" component={Addjob} />
            </ListProvider>
            </Switch>
        </div>
        
      </Router>
  );
}
}
export default App;
