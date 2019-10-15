import React from "react";
import TranslatorComponent from "../../translator/translatorComponent";
import HeaderTabComponent from "./headerTab";

export default class ApplicationHeaderComponent extends React.Component {
    render() {
        return (
            <div>
                <>
                    <TranslatorComponent labelName="welcomeMessage" />
                </>
                <HeaderTabComponent />
            </div>
        );
    }
}