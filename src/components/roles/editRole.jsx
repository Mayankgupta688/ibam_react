import React from "react";

export default class EditRoleComponent extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            initialRoleName: this.props.selectedRole,
            roleName: this.props.selectedRole,
            isUpdated: false
        }
    }

    getUpdatedRoleName = (event) => {
        this.setState({
            isUpdated: true,
            roleName: event.target.value
        });
    }

    updateRole = () => {
        this.props.editUserRole(this.state.initialRoleName, this.state.roleName);
        this.setState({
            roleName: '',
            isUpdated: true
        });
    }

    render() {

        var roleName = "";

        if(this.state.isUpdated === false) {
            roleName = this.props.selectedRole;
        } else {
            roleName = this.state.roleName
        }

        if(!this.props.editRole){
            return null;
        }

        return (
            <div style={{"fontSize": ".8rem"}}>
                <hr></hr>
                <b style={{"marginTop": "20px"}}>Update User Role</b><br></br><br></br>
                <div>
                    <label  style={{"marginRight": "20px"}}>Update Role Name: </label>
                    <input type="text" value={roleName} onChange={this.getUpdatedRoleName} /><br></br><br></br>
                    <button id="addRole" style={{"float": "left"}} className="addButton" onClick={() => this.updateRole(this.state.initialRoleName, this.state.roleName)}>Update Role</button>
                </div>
            </div>
        )
    }
}