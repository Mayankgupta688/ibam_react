import React from "react";

import HomeComponent from "./home";
import RolesComponent from "./roles";
import ApplicationHeaderComponent from "./applicationHeader";   

import { BrowserRouter, Route } from "react-router-dom";

export default class ApplicationComponent extends React.Component {

    render() {

        return (
            <BrowserRouter>
                <ApplicationHeaderComponent></ApplicationHeaderComponent>
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
