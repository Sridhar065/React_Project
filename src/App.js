
import React from 'react';  
import './App.css';  

import icon from "./image/notion.png";




import Front from './front'; 
import Login from './Login'; 
import Contact_sales from './contact'; 
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';   
import SecureLS from 'secure-ls';
import storage from './helpers/storageHelper';


class App extends React.Component {  
  constructor (prpos) {
  super(prpos)
    this.storageClient = new SecureLS ({encodingType: 'aes'});
  }

  logOut() {
    storage.removeValue('token');
  }
  removeValue (key) {
    const value = this.storageClient.remove (key);
    return value;
  }

 render(){
  return (  
    <Router>    
      <div>    
            
          <div className="main-sec">    
            <ul className="sub1" >
            <li className="lin">    
                <Link className="dect" to={'/'}><img className="icn" src={icon} /></Link>    
              </li>    
              <li className="lin">    
                <Link className="dect" type="dropdown" to={'/'}>Product</Link>    
              </li>    
              <li className="lin1">    
                <Link className="dect" to={'/'}>Solutions</Link>    
              </li>  
              <li className="lin2">    
                <Link className="dect" to={'/'}>Resoureces</Link>    
              </li>  
              <li className="lin3">    
                <Link className="dect" to={'/'}>Download</Link>    
              </li> 
              <li className="lin3">    
                <Link className="dect" to={'/'}>Pricing</Link>    
              </li>  
            </ul>  
            <ul className="sub2" >      
            <li className="lin2">    
                <Link className="dect" to={'/Contact_Sales'}>Contact Sales</Link>    
              </li>  
              <li className="lin3">    
                <Link className="dect" to={'/login'}>login</Link>    
              </li> 
              <li className="lin3">    
                <Link className="btn-lk1" to={'/login'}>Try Notion free</Link>    
              </li> 
              <li className="lin4">
                <a href="/" className="dect" onClick={this.logOut}>
                  LogOut
                </a>
              </li> 
            </ul>  
          </div>  
          <hr/>  
         <br/><br/><br/>
        <Switch>    
          <Route exact path='/' component={Front} /> 
          <Route exact path='/login' component={Login} />    
          <Route path='/Contact_sales' component={Contact_sales} />       
        </Switch>     
      </div>    
    </Router>   
  );  
} 
} 

export default App;
