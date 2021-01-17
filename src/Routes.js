import React from "react";
import { Route, Switch } from "react-router-dom"; // switch renders first matching route 
import Home from "./containers/Home";
import AddRecipe from "./containers/AddInfo/AddRecipe";
import Recipe from "./containers/RecipeInfo/Recipe";
import NotFound from "./containers/NotFound";
import FindRecipe from "./containers/FindRecipe";
import Call from "./containers/Call";
import Saved from "./containers/Saved";
import Profile from "./containers/Profile";
import KitchenCalling from "./containers/KitchenCalling";
import { preloadScript } from 'opentok-react';


class Routes extends React.Component {
    render () {
        return (
    <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route exact path="/recipe">
            <Recipe />
        </Route>
        <Route exact path="/saved">
            <Saved />
        </Route>
        <Route exact path="/call">
            <KitchenCalling />
        </Route>
        <Route exact path="/call/:id">
            <Call 
                apiKey={this.props.apiKey}
                sessionId={this.props.sessionId}
                token={this.props.token}/>
        </Route>
        <Route exact path="/addrecipe">
            <AddRecipe />
        </Route>
        <Route exact path="/search">
            <FindRecipe />
        </Route>
        <Route exact path="/profile">
            <Profile />
        </Route>
        <Route>
            <NotFound />
        </Route>
    </Switch>
  );
        }
}

export default preloadScript(Routes);