import React from "react";

import GroupsComponent from "./groups/groups";
import RolesComponent from "./roles/roles";
import ApplicationHeaderComponent from "./header/applicationHeader";   

import { BrowserRouter, Route } from "react-router-dom";

export default class ApplicationComponent extends React.Component {

    render() {

        return (
            <BrowserRouter>
                <ApplicationHeaderComponent></ApplicationHeaderComponent>
                <div>
                    <div style={{"margin": "10px"}}>
                        <Route exact path="/" component={GroupsComponent}></Route>
                        <Route exact path="/groups" component={RolesComponent}></Route>
                    </div>
                </div>
            
            </BrowserRouter>
        )
    }
}
