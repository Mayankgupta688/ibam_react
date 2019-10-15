import React from "react";
import ReactDOM from "react-dom";
import i18n from "i18next";
import tranlations from "./translator/translations";
import "./styles/index.css"

import ApplicationComponent from "./components/applicationComponent";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: tranlations,
    lng: "jap",
    fallbackLng: "jap",

    interpolation: {
      escapeValue: false
    }
  });

ReactDOM.render((
    <>
        <ApplicationComponent></ApplicationComponent>
    </>
), document.getElementById("root"));
