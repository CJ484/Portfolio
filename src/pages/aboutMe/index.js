import { Link } from "react-router-dom";
import avatar from "../../assets/avatar.png";
import routes from "../../const/paths/routes";
import { instagram, twitter, youtube } from "../../assets/symbols";
import "./index.style.scss";

const AboutMe = () => {
  return (
    <div className="card-template aboutMe card-template-mobile">
      <div className="cardHeader">
        <img id="avatar" className="avatar" src={avatar} alt="avatar" />
        <div className="headerTitle mobile">
        <h2>Hey! I'm</h2>
        <h2 className="underline-word"><b>Carlos Coreas</b></h2>
        </div>
      </div>
      <div className="cardInfo">
        <h2 className="nonMobile">Hey! I'm Carlos Coreas</h2>
        <p className="weight-300">
          I am a <b>React Front End Developer.</b> I am to be your 
          <b> new #2 Developer</b> to be hands on and to take the lead.
          <br /> I enjoy thinking <b>creatively</b> while working.
        </p>

        <h2>
          See
          <Link
            exact="true"
            to={routes.PORTFOLIO.path}
            className="portfolioLink"
          >
           {} <b>my Portfolio</b>
          </Link>
          !
        </h2>
        <h2>Have A Nice Day and Thank You for your Consideration!</h2>
        <h2>- Carlos</h2>
        <div className="socialLinks">
          <img src={instagram} alt="instagram-profile" />
          <img src={twitter} alt="twitter-profile" />
          <img src={youtube} alt="youtube-profile" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
