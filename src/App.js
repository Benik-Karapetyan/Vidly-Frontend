import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/navBar";
import LoginForm from "./components/loginForm";
import Movies from "./components/movies";
import MovieForm from "./components/movieForm";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import "./App.css";
import React from "react";

function App() {
    return (
        <React.Fragment>
            <NavBar></NavBar>
            <main className="container">
                <Switch>
                    <Route path="/login" component={LoginForm}></Route>
                    <Route path="/movies/:id" component={MovieForm}></Route>
                    <Route path="/movies" component={Movies}></Route>
                    <Route path="/customers" component={Customers}></Route>
                    <Route path="/rentals" component={Rentals}></Route>
                    <Route path="/not-found" component={NotFound}></Route>
                    <Redirect from="/" to="/movies" exact></Redirect>
                    <Redirect to="not-found"></Redirect>
                </Switch>
            </main>
        </React.Fragment>
    );
}

export default App;
