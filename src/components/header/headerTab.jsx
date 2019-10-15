import React from 'react';
import '../../styles/headerTab.css';
import { Link } from "react-router-dom";

export default class HeaderTabComponent extends React.Component {


    constructor() {
        super();
        this.state = {
            selectedTab: "editRolesUsersMenu"
        }
    }

    updateSelected = (selectedValue) => {
        this.setState({
            selectedTab: selectedValue
        })
    }

    render() {
            return (
                <div className="headerTab">
                    <ul>
                        <li>
                            <a id="homeMainMenu" href="/">Home</a>
                        </li>
                        <li>
                            <a id="dashboardMainMenu" href="/">Dashboard</a>
                        </li>
                        <li>
                            <a id="accountsMainMenu" href="/" >Accounts</a>
                        </li>
                        <li>
                            <a id="financialInstitutionsMainMenu" href="/">Financial Institutions</a>
                        </li>
                        <li>
                            <a id="internalEntitiesMainMenu" href="/">Internal Entities</a>
                        </li>
                        <li>
                            <a id="businessUnitsMainMenu" href="/">Business Units</a>
                        </li>
                        <li>
                            <a id="authorityGroupsMainMenu" href="/">Authority Groups</a>
                        </li>
                        <li>
                            <a id="peopleMainMenu" href="/">People</a>
                        </li>
                        <li>
                            <a id="feeAnalysisMainMenu" href="/">Fee Analysis</a>
                        </li>
                        <li>
                            <a id="reportsMainMenu" href="/">Reports</a>
                        </li>
                        <li className="current">
                            <a id="administrationMainMenu" href="/">Administration</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a id="auditAdminMenu" href="/">Audit</a>
                        </li>
                        <li>
                            <a id="tasksAdminMenu" href="/"> Tasks</a>
                        </li>
                        <li>
                            <a id="templatesAdminMenu" href="/">Templates</a>
                        </li>
                        <li className="current">
                            <a id="editRolesUsersMenu" href="/">Users</a>
                        </li>
                        <li>
                            <a id="dataAdminMenu" href="/">Data</a>
                        </li>
                        <li>
                            <a id="notificationAdminMenu" href="/">Notification</a>
                        </li>
                        <li>
                            <a id="fbarConfigurationMenu" href="/">FBAR Configuration</a>
                        </li>
                        <li>
                            <a id="systemAdminMenu" href="/">System</a>
                        </li>
                    </ul>
                    <ul>
                        <li className={(this.state.selectedTab === 'editRolesUsersMenu') ? "current": ""}>
                            <Link onClick={() => this.updateSelected("editRolesUsersMenu")} id="editRolesUsersMenu" to="/roles">Edit Roles</Link>
                        </li>
                        <li className={(this.state.selectedTab === 'viewGroupsUsersMenu') ? "current": ""}>
                            <Link onClick={() => this.updateSelected("viewGroupsUsersMenu")} id="viewGroupsUsersMenu" to="/groups">View Groups</Link>
                        </li>
                    </ul>
                </div>


        );
    }
}


