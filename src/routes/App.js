import React from 'react';
import { Switch, Route, HashRouter, Redirect } from "react-router-dom";
import { Comics } from "../components/Comics";
import { DetailedComics } from "../components/DetailedComics";

function App() {

  return (
    <HashRouter>
      <Switch>
        <Redirect exact from='/' to='/home'/>
        <Route path="/home" exact={true} component={Comics} />
        <Route path="/home/:page" component={Comics} />
        <Route path="/detailed" component={DetailedComics} />        
      </Switch>
    </HashRouter>
  );
}

export default App;
