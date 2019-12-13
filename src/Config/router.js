import React from "react";
import Home from '../screens/home'
import Rooms from '../screens/rooms'
import SingleRoom from '../screens/singleRoom'
import Error from '../screens/error'
import Navbar from '../screens/Components/navbar'
import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";

function navigate() {
  return (
    <Router>
      
      <Navbar/>

       <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/rooms/' component={Rooms}/>
        <Route exact path='/rooms/:slug' component={SingleRoom}/>
        <Route component={Error}/>
       </Switch>
        
    </Router>
  );
}
export default navigate