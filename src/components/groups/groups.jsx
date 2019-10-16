import React from "react";
import $ from 'jquery';
import tablesorter from 'tablesorter';
import axios from "axios";

export default class GroupsComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            employees: []
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:8000/employees`).then(res => {
            this.setState({
                employees: res.data
            });
            $("#myTable").tablesorter({ sortList: [[0,0], [1,0]] });
        })
    }

    render() {
        var ouputData = this.state.employees.map((user) => {
            return (
                <tr key={user.firstName}>
                    <td>
                        <div style={{"white-space": "nowrap", "width": "134px"}}>                      
                            <i name="edit_roles" onClick={() => this.editRole(user.firstName)}  className="sprite-edit-16px" style={{"display": "inline-flex", "margin-right" : "2px" , "margin-left": "2px", "margin-top": "2px"}}></i>
                            <i name="delete_roles" onClick={() => this.deleteRole(user.firstName)} className="sprite-delete-16px" style={{"display": "inline-flex", "margin-right" : "2px" , "margin-left": "2px", "margin-top": "2px"}}></i>
                        </div>
                    </td>
                    <td>{user.lastName}</td>
                    <td>{user.firstName}</td>
                    <td>{user.email}</td>
                    <td>{user.Website}</td>
                </tr>
            )
        });

        return (
            <>
                {ouputData.length && <table id="myTable" className="tablesorter">
                    <thead>
                        <tr>
                            <th>Actions</th>
                            <th>Last Name</th>
                            <th>First Name</th>
                            <th>Email</th>
                            <th>Website</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ouputData}
                    </tbody>
                </table>}

                <div style={{"width": "100%"}}>
                    <input style={{"float": "right", "marginRight": "10px"}} type="button" className="addButton" value="Add Groups" />
                </div>
            </>
        )
    }
}