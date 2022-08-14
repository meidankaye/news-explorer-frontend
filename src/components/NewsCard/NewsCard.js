import "./NewsCard.css";
import CardLabel from "../CardLabel/CardLabel";

function NewsCard({ card }) {
  return (
    <li>
      <article className="news-card">
        <div className="news-card__image-box">
          <CardLabel />
          <a href="/">
            <img
              className="news-card__image"
              src={card.src}
              alt={card.alt}
            ></img>
          </a>
        </div>
        <div className="news-card__info">
          <span className="news-card__date">{card.date}</span>
          <h3 className="news-card__title">{card.title}</h3>
          <p className="news-card__text"> {card.text}</p>
          <a className="news-card__source" href={card.link}>
            {card.source}
          </a>
        </div>
      </article>
    </li>
  );
}

export default NewsCard;
