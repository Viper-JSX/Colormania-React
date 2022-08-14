function AppTitle({ titleText } : {titleText: string}):JSX.Element{
    return(
        <h2 className="appTitle">{titleText}</h2>
    );  
}

export default AppTitle;