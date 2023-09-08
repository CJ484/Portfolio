import portfolioImages from "../../assets";
import './index.style.scss';

const Portfolio = () => {
    return (
      <div className="portfolio">
        <div className="picture-gallery">
          {portfolioImages.map((img, index) => (
            <img key={index} src={img} alt={img} />
          ))}
        </div>
      </div>
    );
}

export default Portfolio;