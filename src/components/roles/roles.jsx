import React from "react";
import $ from 'jquery';
import tablesorter from 'tablesorter';
import '../../styles/roles.css';
import axios from "axios";
import AddRolesComponent from "./addRoles";

export default class RolesComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            roles: [],
            isAddRole : false
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:8000/roles`).then(res => {
            this.setState({
                roles: res.data
            });
            $("#myTable").tablesorter({ sortList: [[0,0], [1,0]] });
        })
    }

    handleAddRowClick = () => {
        this.setState(state => ({isAddRole: !this.state.isAddRole}));
    }

    editRole(roleId) {
        alert(roleId);

        this.setState({
            roles: this.state.roles.filter()
        })


    }

    deleteRole(roleId) {
        var deletedList = this.state.roles.filter((role) => {
            return role.id !== roleId;
        });

        this.setState({
            roles: [...deletedList]
        })
    }

    render() {
        const isAddRole = this.state.isAddRole;
        var ouputData = this.state.roles.map((user) => {
            return (
                <tr key={user.id}>
                     <td>
                        <div style={{"white-space": "nowrap", "width": "134px"}}>                      
                            <i name="edit_roles" onClick={() => this.editRole(user.id)}  className="sprite-edit-16px" style={{"display": "inline-flex", "margin-right" : "2px" , "margin-left": "2px", "margin-top": "2px"}}></i>
                            <i name="delete_roles" onClick={() => this.deleteRole(user.id)} className="sprite-delete-16px" style={{"display": "inline-flex", "margin-right" : "2px" , "margin-left": "2px", "margin-top": "2px"}}></i>
                        </div>
                    </td>
                    <td>{user.authority}</td>
                </tr>
            )
        });

        return (
            <>
                {ouputData.length && <table id="myTable" className="tablesorter">
                    <thead>
                        <tr>
                        <th> </th>
                        <th>Role Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ouputData}
                    </tbody>
                </table>}

                <div style={{"width": "100%"}}>
                    <AddRolesComponent addRole={this.state.isAddRole} />                
                    <button style={{"float": "right", "marginRight": "10px"}} id="addRole" className="addButton" onClick={this.handleAddRowClick}>
                       {isAddRole ? 'Save' : 'Add Role'}
                    </button>
                </div>

            </>
        )
    }
}