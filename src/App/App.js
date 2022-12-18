import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./components/login";
import Main from "./components/main";
import NavBar from "./components/navBar";
import UserCard from "./components/userCard";
import Users from "./components/users";

function App() {
    return (
        <>
            <NavBar />
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/login" component={Login} />
                <Route path="/users/:userId" component={UserCard} />
                <Route path="/users" component={Users} />
            </Switch>
        </>
    );
}

export default App;
