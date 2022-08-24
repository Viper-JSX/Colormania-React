import { themeConfig } from "../../various_things/app_config";

function ThemeSwitch():JSX.Element{
    return(
        <select>
            {
                themeConfig.avaliableThemes.map((theme) => <option value={theme.toLowerCase()}>{theme.toUpperCase()}</option>)
            }
        </select>
    );
}

export default ThemeSwitch;