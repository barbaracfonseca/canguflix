import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';

import {BrowserRouter, Switch, Route } from 'react-router-dom';
import RegistrationVideo from './pages/registration/video';
import RegistrationCategory from './pages/registration/Category'; 

const Page404 = () => (<div>Page 404</div>)
//can i use like this.

ReactDOM.render(
     <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/registration/video" component={RegistrationVideo} />
        <Route path="/registration/Category" component={RegistrationCategory} />
        <Route component={Page404} />
      </Switch>
     </BrowserRouter>,   

  //<React.StrictMode>
   // <App />
  //</React.StrictMode>,
  document.getElementById('root')
);


