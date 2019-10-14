import React from "react";

import HomeComponent from "./home";
import RolesComponent from "./roles";
import ApplicationHeaderComponent from "./applicationHeader";

import { BrowserRouter, Route, Link } from "react-router-dom";

export default class ApplicationComponent extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <ApplicationHeaderComponent></ApplicationHeaderComponent>

                <nav style={{"margin": "20px"}}>
                    <Link style={{paddingRight: "10px"}} to="/">Users</Link>
                    <Link style={{paddingRight: "10px"}} to="/about">Roles</Link>
                </nav>
                <div>
                    <div style={{"margin": "10px"}}>
                        <Route exact path="/" component={HomeComponent}></Route>
                        <Route exact path="/about" component={RolesComponent}></Route>
                    </div>
                </div>
            
            </BrowserRouter>
        )
    }
}
