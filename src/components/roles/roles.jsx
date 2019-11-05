import React from "react";
import $ from 'jquery';
import tablesorter from 'tablesorter';
import '../../styles/roles.css';
import axios from "axios";
import AddRolesComponent from "./addRoles";
import EditRoleComponent from "./editRole";

export default class RolesComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            roles: [],
            isAddRole : false,
            isEditRole: false,
            selectedRole: "",
            roleSelectedToEdit: ""
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8000/roles').then(res => {
            this.setState({
                roles: res.data
            });
            $("#myTable").tablesorter({ sortList: [[0,0], [1,0]] });
        })
    }

    handleAddRowClick = () => {
        this.setState({
            isAddRole: !this.state.isAddRole
        });
    }

    deleteRole(roleId) {
        var deletedList = this.state.roles.filter((role) => {
            return role.id !== roleId;
        });

        this.setState({
            roles: [...deletedList]
        })
    }

    createTableData() {

        if(this.state.roles.length) {
            return (
                <table id="myTable" className="tablesorter">
                    <thead>
                        <tr>
                            <th>Actions</th>
                            <th>Role Name</th>
                        </tr>
                    </thead>
            
                    <tbody>
                        {this.state.roles.map((user) => {
                            return (
                                <tr key={user.id}>
                                    <td>
                                        <div style={{"white-space": "nowrap", "width": "134px"}}>                      
                                            <i name="edit_roles" onClick={() => this.editUserRole(user.authority)}  className="sprite-edit-16px" style={{"display": "inline-flex", "margin-right" : "2px" , "margin-left": "2px", "margin-top": "2px"}}></i>
                                            <i name="delete_roles" onClick={() => this.deleteRole(user.id)} className="sprite-delete-16px" style={{"display": "inline-flex", "margin-right" : "2px" , "margin-left": "2px", "margin-top": "2px"}}></i>
                                        </div>
                                    </td>
                                    <td>{user.authority}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            )
        } else {
            return null;
        }
    }

    addUserRole = (addUserRole) => {
        this.setState({
            roles: [
                {
                    "id": "2e59a412-b6c7-47b6-9400-b8c7aba502b0" + addUserRole,
                    "authority": addUserRole.toUpperCase()
                },
                ...this.state.roles
            ]
        }, () => {
            this.setState({
                isAddRole: false
            });
        })
    }

    editUserRole = (initialRoleName, newRoleName) => {

        var deletedList = this.state.roles.map((role) => {
            if(role.authority === initialRoleName) {
                role.authority = newRoleName;
            }
            return role;
        });

        this.setState({
            isEditRole: false,
            roles: [...deletedList]
        });
    }

    render() {
        return (
            <div className="frame-container">
                <iframe src="https://10.0.75.2/scc/administration/Roles.action" />
            </div>
        )
    }
}