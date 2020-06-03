import React, { Fragment } from 'react';

import './App.css';

import Home from './pages/Home';
import Login from './pages/Login';
import Header from './components/Header';
import Footer from './components/Footer';
import LoginFournisseur from './pages/LoginFournisseur';
import Catégories from './pages/Catégories';
import Products from './pages/Products';
import {BrowserRouter as Router,Route,Switch, BrowserRouter} from 'react-router-dom';
import DashbordFournisseur from './pages/DashbordFournisseur';
import AjoutProduits from './pages/AjoutProduits';
import ComponentId from './pages/ComponentId';









class App extends React.Component {
  
  render(){

return (
    
    
    
    
    
    <div className="App">
      <Router>
        
      <Header/>
       <Switch>
 
        <Route exact path='/' component ={Home} />
        <Route  path='/login' component ={Login} />
        <Route  path='/loginfournisseur' component ={LoginFournisseur} />

       <Route path='/Catégories/:id'  render={(props) => <div> <Catégories id={props.match.params.id} /> </div>}  /> 
        <Route exact path='/Products/:sku'  render={(props) => <div> <Products id={props.match.params.sku} /> </div>} /> 
       <Route  path='/DashbordFournisseur' component ={DashbordFournisseur} />
        <Route  path='/AjoutProduits' component ={AjoutProduits} />
         <Route path='/ComponentId' component={ComponentId}/>
        </Switch>
        </Router>
    </div>
  );
}}

export default App;
