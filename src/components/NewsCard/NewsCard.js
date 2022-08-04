import "./NewsCard.css";
import CardLabel from "../CardLabel/CardLabel";
import placeholderCardImage from "../../images/placeholdercard.png";

function NewsCard() {
  return (
    <li>
      <article className="news-card">
        <div className="news-card__image-box">
          <CardLabel />
          <a href="/">
            <img
              className="news-card__image"
              src={placeholderCardImage}
              alt="Card placeholder"
            ></img>
          </a>
        </div>
        <div className="news-card__info">
          <span className="news-card__date">November 4, 2020</span>
          <h3 className="news-card__title">
            Everyone Needs a Special 'Sit Spot' in Nature
          </h3>
          <p className="news-card__text">
            Ever since I read Richard Louv's influential book, "Last Child in
            the Woods," the idea of having a special "sit spot" has stuck with
            me. This advice, which Louv attributes to nature educator Jon Young,
            is for both adults and children to find...
          </p>
          <a className="news-card__source" href="/">
            treehugger
          </a>
        </div>
      </article>
    </li>
  );
}

export default NewsCard;
