import React from "react";
import { Route, Switch } from "react-router-dom"; // switch renders first matching route 
import Home from "./containers/Home";
import AddRecipe from "./containers/AddRecipe";
import Recipe from "./containers/Recipe";
import NotFound from "./containers/NotFound";

export default function Routes() {
  return (
    <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route exact path="/recipe">
            <Recipe />
        </Route>
        <Route exact path="/addrecipe">
            <AddRecipe />
        </Route>
        <Route>
            <NotFound />
        </Route>
    </Switch>
  );
}