import { instagram, mail, phone, twitter, youtube } from "../../assets/symbols";
import avatar from "../../assets/avatar.png";
import "./index.style.scss";

const Contact = () => {
  return (
    <div className="contactCard card-template card-template-mobile">
      <div className="cardHeader">
        <img className="avatar" src={avatar} alt="avatar" />
        <div>
          <h2 className="underline-word mobile">Contact</h2>
        </div>
      </div>
      <div className="contactInfo">
        <div>
        <h2 className="nonMobile underline-word">Contact</h2>
        </div>
        <h4 className="weight-300">
          <img src={mail} alt="mail" /> ccoreas@gmail.com
        </h4>
        <h4 className="weight-300">
          <img src={phone} alt="phone" /> +1 (631) 664-4517
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
