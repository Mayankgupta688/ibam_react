import React from "react";

export default class AddRolesComponent extends React.Component {
    render() {
        if(!this.props.addRole){
            return null;
        }
        return (
            <h3>Form To Add Roles</h3>
        )
    }
}