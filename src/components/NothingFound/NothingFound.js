import "./NothingFound.css";
import nothingFound from "../../images/nothing-found.svg";

function NothingFound() {
  return (
    <section className="nothing-found">
      <img
        className="nothing-found__image"
        src={nothingFound}
        alt="Sad face icon"
      />
      <h4 className="nothing-found__title">Nothing found</h4>
      <span className="nothing-found__subtitle">
        Sorry, but nothing matched your search terms.
      </span>
    </section>
  );
}

export default NothingFound;
