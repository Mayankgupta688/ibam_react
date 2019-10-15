import React from "react";
import TranslatorComponent from "./translatorComponent";
import HeaderTabComponent from "./headerTab";

export default class ApplicationHeaderComponent extends React.Component {
    render() {
        return (
            <div>
                <h1 style={{"marginLeft": "10px"}}>
                    <TranslatorComponent labelName="welcomeMessage" />
                </h1>
                <HeaderTabComponent />
            </div>
        );
    }
}