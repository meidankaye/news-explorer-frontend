class NewsApi {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }
  getArticles(keyword) {
    return fetch(
      `${
        this._baseUrl
      }?q=${keyword}&from=${this._setSubtractedDate()}&to=${this._setCurrentDate()}&pageSize=100&apiKey=9a35ece4649b4647b75a4ce9647c14be`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(this._checkResponse);
  }
  _checkResponse = (res) => {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
  };

  _setCurrentDate() {
    const currentDate = new Date().toJSON().slice(0, 10);
    return currentDate;
  }

  _setSubtractedDate() {
    const date = new Date();
    const subtractWeek = new Date(date.setDate(date.getDate() - 7))
      .toJSON()
      .slice(0, 10);
    return subtractWeek;
  }
}

const newsApi = new NewsApi({
  baseUrl: "https://nomoreparties.co/news/v2/everything",
});
export default newsApi;
