import React from "react"

export default class AdministrationComponent extends React.Component {
    render() {
        return (
            <div className="frame-container"> 
                <iframe src="https://10.0.75.2/scc/administration/GeneralAudit.action?index=" />
            </div>
        )
    }
} 