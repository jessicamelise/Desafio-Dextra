import React from 'react';
import { Switch, Route, HashRouter, Redirect } from "react-router-dom";
import { Comics } from "../components/Comics";
import { DetailedComics } from "../components/DetailedComics";
import { SearchCharacters } from "../components/SearchCharacters";

function App() {

  return (
    <HashRouter>
      <Switch>
        <Redirect exact from='/' to='/home'/>
        <Route path="/home" exact={true} component={Comics} />
        <Route path="/home/:page" component={Comics} />
        <Route path="/detailed/:id" component={DetailedComics} />
        <Route path="/search/:character" component={SearchCharacters} />      
      </Switch>
    </HashRouter>
  );
}

export default App;
