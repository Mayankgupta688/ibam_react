import React from 'react';
import '../../styles/headerTab.css';
import { Link } from "react-router-dom";

export default class HeaderTabComponent extends React.Component {


    constructor() {
        super();
        this.state = {
            menuStructure: {
                "topMenu": [
                    { id: "homeMenu", to: "/", tabName: "Home", subMenu: [
                        {id: "editRolesUsersMenu", to: "/roles", tabName: "Edit Roles", subMenu: []},
                        {id: "viewGroupsUsersMenu", to: "/groups", tabName: "View Groups", subMenu: []}
                    ]},
                    { id: "dashboardMenu", to: "/dashboard", tabName: "Dashboard", subMenu: [] },
                    { id: "accountsMenu", to: "/accounts", tabName: "Accounts", subMenu: [] },
                    { id: "financialInstitutionMenu", to: "/financial_institution", tabName: "Financial Institutions", subMenu: [] },
                    { id: "internalEntitiesMenu", to: "/internal_entities", tabName: "Internal Entities", subMenu: [] },
                    { id: "businessUnitMenu", to: "/business_unit", tabName: "Business Units", subMenu: [] },
                    { id: "authorityGroupMenu", to: "/authority_group", tabName: "Authority Groups", subMenu: [] },
                    { id: "peopleMenu", to: "/people", tabName: "People", subMenu: [] },
                    { id: "feeAnalysisMenu", to: "/fee_analysis", tabName: "Fee Analysis", subMenu: [] },
                    { id: "reportsMenu", to: "/reports", tabName: "Reports", subMenu: [] },
                    { id: "administrationMenu", to: "/administration", tabName: "Administration", subMenu: [] },

                ]
            }, selectedTab: "homeMenu"
        }
    }

    getSubMenu() {
        let selectedTab = this.state.menuStructure['topMenu'].filter(top => {
            return top.id === this.state.selectedTab
        });

        if(selectedTab[0] && selectedTab[0].subMenu && selectedTab[0].subMenu.length) {
            return selectedTab[0].subMenu.map(val => {
                return (
                    <li>
                        <Link onClick={() => this.updateSelected(val.id)}  id="homeMenu" to={val.to}>{val.tabName}</Link>
                    </li>
                )
            });
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



                        {this.state.menuStructure['topMenu'].map(val => {
                            return (
                                <li>
                                    <Link onClick={() => this.updateSelected(val.id)}  id="homeMenu" to={val.to}>{val.tabName}</Link>
                                </li>
                            )
                        })}
                    </ul>
                    <ul>
                        {this.getSubMenu()}
                    </ul>
                </div>


        );
    }
}


