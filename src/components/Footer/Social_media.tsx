import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faYoutube, faPinterest } from "@fortawesome/free-brands-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

function SocialMedia():JSX.Element{
    return(
        <div className="socialMedia">
            <FontAwesomeIcon className="facebookIcon" icon={faFacebook as IconProp} />
            <FontAwesomeIcon className="twitterIcon" icon={faTwitter as IconProp} />
            <FontAwesomeIcon className="youtubeIcon" icon={faYoutube as IconProp} />
            <FontAwesomeIcon className="instagramIcon" icon={faInstagram as IconProp} />
            <FontAwesomeIcon className="pinterestIcon" icon={faPinterest as IconProp} />
        </div>
    );
}

export default SocialMedia;