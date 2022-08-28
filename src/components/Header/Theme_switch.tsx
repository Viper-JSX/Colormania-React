import React from "react";

import { useSelector } from "react-redux";
import { ThemeSwitchProps } from "../../typescript/types";
import { themeConfig } from "../../various_things/app_config";

function ThemeSwitch({ handleThemeChange } : ThemeSwitchProps):JSX.Element{
    const themeName = useSelector((state: any) => state.theme.themeName);

    return(
        <select value={themeName} onChange={handleThemeChange}>
            {
                themeConfig.avaliableThemes.map((theme) => <option value={theme.toLowerCase()}>{theme.toUpperCase()}</option>)
            }
        </select>
    );
}

export default ThemeSwitch;