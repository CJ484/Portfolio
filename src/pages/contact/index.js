import { instagram, mail, phone, twitter, youtube } from "../../assets/symbols";
import avatar from "../../assets/avatar.png";
import "./index.style.scss";

const Contact = () => {
  return (
    <div className="contactCard card-template card-template-mobile">
      <div className="contactHeader">
        <img id="avatar" src={avatar} alt="avatar" />
        <h2 className="cardTitle underline-word mobile">Contact</h2>
      </div>
      <div className="contactInfo">
        <h2 className="cardTitle nonMobile underline-word">Contact</h2>
        <h4 className="weight-300">
          <img className="whiteFilter" src={mail} alt="mail" /> ccoreas@gmail.com
        </h4>
        <h4 className="weight-300">
          <img className="whiteFilter" src={phone} alt="phone" /> +1 (631) 664-4517
        </h4>
        <div className="social-media-links">
          <div className="contactSocial">
            <img className="contactLinks" src={instagram} alt="instagram" />
            <h4>@ccoreas484</h4>
          </div>
          <div className="contactSocial">
            <img className="contactLinks" src={twitter} alt="twitter" />
            <h4>@ccoreas484</h4>
          </div>
          <div className="contactSocial">
            <img className="contactLinks" src={youtube} alt="youtube" />
            <h4>@carlos_coreas484</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
