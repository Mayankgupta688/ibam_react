import i18n from "i18next";
import tranlations from "./translations";
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