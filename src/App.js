import React from "react";
import AllPokemon from "./components/AllPokemon";
import PokemonDetails from "./components/PokemonDetails";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={(props) => <AllPokemon {...props} />} />
        <Route
          path="/details"
          render={(props) => <PokemonDetails {...props} />}
        />
      </Switch>
    </Router>
  );
};

export default App;
