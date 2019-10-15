import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css"

import ApplicationComponent from "./components/applicationComponent";

import "./translator/translatorConfig";


ReactDOM.render((
    <>
        <ApplicationComponent></ApplicationComponent>
    </>
), document.getElementById("root"));
