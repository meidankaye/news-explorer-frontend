import React from "react";
import "./SearchForm.css";

function SearchForm({ onSearch }) {
  const [keyword, setKeyword] = React.useState("");
  const [searchPlaceholder, setSearchPlaceholder] = React.useState("");

  function handleChange(e) {
    setSearchPlaceholder("");
    setKeyword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (keyword === "") {
      setSearchPlaceholder("Please enter a keyword.");
    }
    const keywordData = keyword[0].toUpperCase() + keyword.slice(1);
    onSearch(keywordData);
    setKeyword("");
  }
  return (
    <form
      className="search-form"
      name="search-form"
      action="submit"
      onSubmit={handleSubmit}
    >
      <input
        onChange={handleChange}
        value={keyword || ""}
        className="search-form__input"
        type="search"
        name="search"
        placeholder={searchPlaceholder || "Enter topic"}
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
