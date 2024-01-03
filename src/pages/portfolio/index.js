import portfolioImagesWeb from "../../assets/illustrationWeb";
import portfolioImagesMobile from "../../assets/illustrationMobile";
import './index.style.scss';

const Portfolio = () => {
    return (
      <div className="portfolio">
        <div className="picture-gallery-web">
          {portfolioImagesWeb.map((img, index) => (
            <img key={index} src={img} alt={img} />
          ))}
        </div>
        <div className="picture-gallery-mobile">
          {portfolioImagesMobile.map((img, index) => (
            <img key={index} src={img} alt={img} />
          ))}
        </div>
      </div>
    );
}

export default Portfolio;