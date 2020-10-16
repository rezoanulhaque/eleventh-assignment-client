import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './Components/Login/Login';
import Notfound from './Components/Notfound/Notfound';
import Home from './Components/HomeFolder/Home/Home';
import Order from './Components/UserFolder/Order/Order';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Orderlist from './Components/UserFolder/Orderlist/Orderlist';
import Addreview from './Components/UserFolder/Addreview/Addreview';
import Addservice from './Components/AdminFolder/Addservice/Addservice';
import Makeadmin from './Components/AdminFolder/Makeadmin/Makeadmin';
import Servicelist from './Components/AdminFolder/Servicelist/Servicelist';
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>  
        <PrivateRoute path="/user/order/:name">
          <Order></Order>
        </PrivateRoute>
        <PrivateRoute path="/user/orderlist">
          <Orderlist></Orderlist>
        </PrivateRoute>
        <PrivateRoute path="/user/order">
          <Order></Order>
        </PrivateRoute>
        <PrivateRoute path="/user/review">
          <Addreview></Addreview>
        </PrivateRoute>
        <PrivateRoute path="/admin/addservice">
          <Addservice></Addservice>
        </PrivateRoute>
        <PrivateRoute path="/admin/servicelist">
          <Servicelist></Servicelist>
        </PrivateRoute> 
        <PrivateRoute path="/admin/makeadmin">
          <Makeadmin></Makeadmin>
        </PrivateRoute>      
        <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <Notfound></Notfound>
          </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;