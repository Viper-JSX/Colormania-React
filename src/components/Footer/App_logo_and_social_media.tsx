import TextWithTitle from "../General_reusable_components/Text_with_title";
import SocialMedia from "./Social_media";

function AppTitleAndSocialMedia():JSX.Element{
    return(
        <div className="appLogoAndSocialMedia">
            <TextWithTitle title="ColorMania" text="Our app is designed to make you life more colorful" />
            <SocialMedia />
        </div>
    );
}

export default AppTitleAndSocialMedia;