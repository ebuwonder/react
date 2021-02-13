import axios from "axios";
const APIkey = process.env.REACT_APP_API_KEY


export default {
  getHeadlines: function() {
    return axios.get("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey="9277d061b9ae47d8b131da80fd956a01");
  },
  getSports: function() {
    return axios.get("https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey="9277d061b9ae47d8b131da80fd956a01");
  },
  getWeather: function() {
    return axios.get("https://newsapi.org/v2/everything?q=weather&apiKey="9277d061b9ae47d8b131da80fd956a01");
  },
};
