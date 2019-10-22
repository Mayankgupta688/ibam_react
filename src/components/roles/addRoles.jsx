import React from "react";

export default class AddRolesComponent extends React.Component {

    constructor() {

        super();

        this.state = {
            roleName: ""
        }

    }

    getNewRoleName = (event) => {
        this.setState({
            roleName: event.target.value
        });
    }

    addRole = () => {
        this.props.addUserRole(this.state.roleName);
        this.setState({
            roleName: ''
        });
    }

    render() {
        if(!this.props.addRole){
            return null;
        }
        return (
            <div style={{"fontSize": ".8rem"}}>
                <hr></hr>
                <b style={{"marginTop": "20px"}}>Add User Role</b><br></br><br></br>
                <div>
                    <label  style={{"marginRight": "20px"}}>Add Role Name: </label>
                    <input type="text" value={this.state.roleName} onChange={this.getNewRoleName} /><br></br><br></br>
                    <button id="addRole" style={{"float": "left"}} className="addButton" onClick={this.addRole}>Add Role</button>
                </div>
            </div>
        )
    }
}