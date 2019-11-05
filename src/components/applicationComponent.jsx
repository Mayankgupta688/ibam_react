import React from "react";

import GroupsComponent from "./groups/groups";
import RolesComponent from "./roles/roles";
import AddRolesComponent from "./roles/addRoles";
import HomeComponent from "./home/home"
import DashboardComponent from "./dashboard/dashboard"
import AccountsComponent from "./accounts/accounts";
// import Component from "./account/account"
// import Component from "./account/account"
// import Component from "./account/account"
// import Component from "./account/account"
// import Component from "./account/account"
import ApplicationHeaderComponent from "./header/applicationHeader";   

import { BrowserRouter, Route } from "react-router-dom";

export default class ApplicationComponent extends React.Component {

    render() {

        return (
            <BrowserRouter>
                <div className="ibam-application-wrapper">
                    <div class="ibam-header">
                        <ApplicationHeaderComponent></ApplicationHeaderComponent>
                    </div>

                    <div className="ibam-container">
                            <Route exact path="/" component={HomeComponent}></Route>
                            <Route exact path="/accounts" component={AccountsComponent}></Route>
                            <Route exact path="/dashboard" component={DashboardComponent}></Route>
                            <Route exact path="/roles" component={RolesComponent}></Route>
                            <Route exact path="/groups" component={GroupsComponent}></Route>
                            <Route exact path="/addRoles" component={AddRolesComponent}></Route>
                    </div>
                </div>
                
                
            
            </BrowserRouter>
        )
    }
}
