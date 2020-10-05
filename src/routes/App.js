import React from 'react';
import { Switch, Route, HashRouter } from "react-router-dom";
import { Comics } from "../components/Comics";
import { DetailedComics } from "../components/DetailedComics";

function App() {

  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact={true} component={Comics} />
        <Route path="/detailed" component={DetailedComics} />        
      </Switch>
    </HashRouter>
  );
}

export default App;
