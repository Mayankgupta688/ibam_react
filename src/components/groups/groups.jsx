import React from "react";
import $ from 'jquery';
import tablesorter from 'tablesorter';
import axios from "axios";

export default class GroupsComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            groups: []
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:8000/groups`).then(res => {
            this.setState({
                groups: res.data
            });
            $("#myTable").tablesorter({ sortList: [[0,0], [1,0]] });
        })
    }

    createTableData() {

            if(this.state.groups.length) {
                return (
                    <table id="myTable" className="tablesorter">
                        <thead>
                            <tr>
                                <th>Actions</th>
                                <th>User Name</th>
                                <th>Email Id</th>
                                <th>Group Name</th>
                            </tr>
                        </thead>
                
                        <tbody>
                            {this.state.groups.map((user) => {
                                return (
                                    <tr key={user.id}>
                                        <td>
                                            <div style={{"white-space": "nowrap", "width": "134px"}}>                      
                                                <i name="edit_roles" onClick={() => this.editRole(user.id)}  className="sprite-edit-16px" style={{"display": "inline-flex", "margin-right" : "2px" , "margin-left": "2px", "margin-top": "2px"}}></i>
                                                <i name="delete_roles" onClick={() => this.deleteRole(user.id)} className="sprite-delete-16px" style={{"display": "inline-flex", "margin-right" : "2px" , "margin-left": "2px", "margin-top": "2px"}}></i>
                                            </div>
                                        </td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.role}</td>
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

    render() {
        return (
            <>
                {this.createTableData()}
            </>
        )
    }
}