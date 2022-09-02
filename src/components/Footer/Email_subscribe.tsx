import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function EmailSubscribe():JSX.Element{
    return(
        <div>
            <b className="title -emailSubscribeTitle">
                <FontAwesomeIcon icon={faEnvelope} />
                <span>   </span>
                Stay up to date with all updated
            </b>

            <form className="emailForm">
                <input type="email" placeholder="Type your email" />
                <br />
                <button className="emailSubscribeButton" type="submit">Sign up</button>
            </form>
        </div>
    );
}

export default EmailSubscribe;