import React from "react";
import $ from 'jquery';
import tablesorter from 'tablesorter';
import axios from "axios";

export default class RolesComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            roles: []
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

    render() {
        var ouputData = this.state.roles.map((user) => {
            return (
                <tr>
                    <td>{user.roleName}</td>
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
                        <th>Role Name</th>
                        <th>First Name</th>
                        <th>Email</th>
                        <th>Website</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ouputData}
                    </tbody>
                </table>}
            </>
        )
    }
}