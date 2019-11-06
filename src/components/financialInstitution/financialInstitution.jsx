import React from "react"

export default class FinancialInstituteComponent extends React.Component {
    render() {
        return (
            <div className="frame-container"> 
                <iframe src="https://10.0.75.2/scc/tablesorter/TableSorter.action?type=FINANCIAL_INSTITUTIONS" />
            </div>
        )
    }
}