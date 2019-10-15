import React from "react";

import { useTranslation } from "react-i18next";

const TranslatorComponent = (props) => {
    const { t } = useTranslation();
    return (
        <h1 style={{"marginLeft": "10px"}}>{t(props.labelName)}</h1>
    )
}

export default TranslatorComponent;