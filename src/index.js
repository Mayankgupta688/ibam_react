import React from "react";
import ReactDOM from "react-dom";

import HomeComponent from "./components/home";
import ApplicationHeaderComponent from "./components/applicationHeader";

ReactDOM.render((
    <>
        <ApplicationHeaderComponent></ApplicationHeaderComponent>
        <HomeComponent></HomeComponent>
    </>
), document.getElementById("root"));
