import React from "react"

export default class FeeAnalysisComponent extends React.Component {
    render() {
        return (
            <div className="frame-container"> 
                <iframe src="https://10.0.75.2/scc/tablesorter/TableSorter.action?type=BFA" />
            </div>
        )
    }
}