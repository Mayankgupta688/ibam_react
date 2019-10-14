import React from "react";
import TranslatorComponent from "./translatorComponent";

export default class ApplicationHeaderComponent extends React.Component {
    render() {
        return (
            <h1 style={{"marginLeft": "10px"}}>
                <TranslatorComponent labelName="welcomeMessage" />
            </h1>
        )
    }
}