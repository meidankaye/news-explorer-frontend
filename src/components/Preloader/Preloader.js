import "./Preloader.css";

function Preloader() {
  return (
    <section className="preloader">
      <div className="preloader__animation"></div>
      <span className="preloader__text">Searching for news...</span>
    </section>
  );
}

export default Preloader;
