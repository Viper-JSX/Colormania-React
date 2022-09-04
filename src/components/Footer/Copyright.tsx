function Copyright({ copyrightText } : { copyrightText: string }):JSX.Element{
    return(
        <div className="copyright">
            <b className="copyrightText">{copyrightText}</b>
        </div>
    );
}

export default Copyright;