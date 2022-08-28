import { useSelector } from "react-redux";

function AppTitle({ titleText } : {titleText: string}):JSX.Element{
    const themeName = useSelector((state: any) => state.theme.themeName);

    return(
        <h2 className={`appTitle ${themeName}`}>{titleText}</h2>
    );  
}

export default AppTitle;