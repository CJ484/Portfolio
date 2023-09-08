import { instagram, mail, phone, twitter, youtube } from "../../assets/symbols";
import avatar from "../../assets/avatar.png";
import "./index.style.scss";

const Contact = () => {
  return (
    <div className="contactCard card-template card-template-mobile">
      <div className="contactHeader">
        <img id="avatar" src={avatar} alt="avatar" />
        <h2 className="cardTitle mobile">Contact</h2>
      </div>
      <div className="contactInfo">
        <h2 className="cardTitle nonMobile">Contact</h2>
        <h4>
          <img src={phone} alt="phone" /> ccoreas484@gmail.com
        </h4>
        <h4>
          <img src={mail} alt="mail" /> +1 (631) 664-4517
        </h4>
        <div className="social-media-links">
          <div className="contactSocial">
            <img className="contactLinks" src={instagram} alt="instagram" />
            <h4>@example1</h4>
          </div>
          <div className="contactSocial">
            <img className="contactLinks" src={twitter} alt="twitter" />
            <h4>@example2</h4>
          </div>
          <div className="contactSocial">
            <img className="contactLinks" src={youtube} alt="youtube" />
            <h4>@example3</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
