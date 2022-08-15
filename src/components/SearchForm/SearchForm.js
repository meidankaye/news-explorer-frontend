import "./SearchForm.css";

function SearchForm({ onSearch }) {
  function handleSubmit(e) {
    e.preventDefault();
    onSearch();
  }
  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        className="search-form__input"
        type="search"
        name="search"
        placeholder="Enter topic"
      ></input>
      <button
        className="search-form__button"
        type="submit"
        onClick={handleSubmit}
      >
        Search
      </button>
    </form>
  );
}

export default SearchForm;
