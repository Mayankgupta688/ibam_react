import React from "react";

import GroupsComponent from "./groups/groups";
import RolesComponent from "./roles/roles";
import AddRolesComponent from "./roles/addRoles";
import ApplicationHeaderComponent from "./header/applicationHeader";   

import { BrowserRouter, Route } from "react-router-dom";

export default class ApplicationComponent extends React.Component {

    render() {

        return (
            <BrowserRouter>
                <ApplicationHeaderComponent></ApplicationHeaderComponent>
                <div>
                    <div style={{"margin": "10px"}}>
                        <Route exact path="/" component={RolesComponent}></Route>
                        <Route exact path="/roles" component={RolesComponent}></Route>
                        <Route exact path="/groups" component={GroupsComponent}></Route>
                        <Route exact path="/addRoles" component={AddRolesComponent}></Route>
                    </div>
                </div>
            
            </BrowserRouter>
        )
    }
}
