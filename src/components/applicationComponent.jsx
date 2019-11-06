import React from "react";

import GroupsComponent from "./groups/groups";
import RolesComponent from "./roles/roles";
import AddRolesComponent from "./roles/addRoles";
import HomeComponent from "./home/home"
import DashboardComponent from "./dashboard/dashboard"
import AccountsComponent from "./accounts/accounts";
import FinancialInstituteComponent from "./financialInstitution/financialInstitution";
import InternalEntitiesComponent from "./internalEntities/internalEntities";
import BusinessUnitsComponent from "./businessUnits/businessUnits";
import AuthorityGroupComponent from "./authorityGroup/authorityGroup";
import PeopleComponent from "./people/people";
import FeeAnalysisComponent from "./feeAnalysis/feeAnalysis";
import AdministrationComponent from "./administration/administration";
import ReportsComponent from "./reports/reports";
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
                            <Route exact path="/financialinstitution" component={FinancialInstituteComponent}></Route>
                            <Route exact path="/internalentities" component={InternalEntitiesComponent}></Route>
                            <Route exact path="/businessunits" component={BusinessUnitsComponent}></Route>
                            <Route exact path="/authoritygroups" component={AuthorityGroupComponent}></Route>
                            <Route exact path="/people" component={PeopleComponent}></Route>
                            <Route exact path="/feeanalysis" component={FeeAnalysisComponent}></Route>
                            <Route exact path="/administration" component={AdministrationComponent}></Route>
                            <Route exact path="/reports" component={ReportsComponent}></Route>
                    </div>
                </div>
                
                
            
            </BrowserRouter>
        )
    }
}
