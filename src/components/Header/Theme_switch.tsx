import { useSelector } from "react-redux";
import { AppState, ThemeSwitchProps } from "../../typescript/types";
import { themeConfig } from "../../various_things/app_config";

function ThemeSwitch({ handleThemeChange } : ThemeSwitchProps):JSX.Element{
    const themeName = useSelector((state: AppState) => state.theme.themeName);

    return(
        <select value={themeName} onChange={handleThemeChange}>
            <option disabled>Theme</option>
            {
                themeConfig.avaliableThemes.map((theme) => <option value={theme.toLowerCase()} key={`${theme}_theme`}>{theme.toUpperCase()}</option>)
            }
        </select>
    );
}

export default ThemeSwitch;