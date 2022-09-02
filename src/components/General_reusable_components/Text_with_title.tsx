function TextWithTitle({ title, text } : { title?: string, text?: string }):JSX.Element{
    return(
        <p className="textWithTitle">
            <b>{ title || "Best Title Ever" }</b>
            <br />
            {
                text
                ||
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam mollitia sunt nam ullam repudiandae, excepturi voluptas dolorem doloribus facilis facere nisi saepe illo, inventore obcaecati laborum omnis dignissimos aliquam deleniti."
            }
        </p>
    );
}

export default TextWithTitle;