import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Drug from './components/Drug';


import registerServiceWorker from './registerServiceWorker';
import {Provider}  from 'react-redux'
import store from './store';
import { BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom';

ReactDOM.render(
    <Provider store = {store} >
    <Router>
    <div>
      <Link to='/'>App</Link> | 
      
      <Link to='/drug'>Rx</Link>
      <Switch>
        <Route exact path="/" component={App}/>
       
        <Route  path="/drug" component={Drug}/>
      </Switch>
    </div>
</Router>       
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
