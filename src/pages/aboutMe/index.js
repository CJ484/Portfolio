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
        <h2 className="mobile">Hey! I'm Carlos Coreas</h2>
      </div>
      <div className="cardInfo">
        <h2 className="nonMobile">Hey! I'm Carlos Coreas</h2>
        <p>
          I am a React Front End Developer. <br /> I have went to 2 bootcamps
          and am now being taught by my mentor.
          <br /> I enjoy thinking creatively while working.
        </p>

        <h6>
          See
          <Link
            exact="true"
            to={routes.PORTFOLIO.path}
            className="portfolioLink"
          >
           {} my Portfolio
          </Link>
          !
        </h6>
        <h6>Have A Nice Day and Thank You for your Consideration!</h6>
        <h6>- Carlos</h6>
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
