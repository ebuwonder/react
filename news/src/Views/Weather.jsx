import React from 'react';
import Article from '../Components/Article';
import API from "./API";
import { selectTopThree } from "./Views";

function Weather() {
    const [articles, setArticles] = useState([]);
  
    useEffect(() => {
      API.getWeather().then((results) => {
        setArticles(selectTopThree(results.data.articles));
      });
    }, []);
  
    return (
      <>
        <h1>Weather: </h1>
        {articles.map((article, i) => (
          <Article
          key={i}
          data={article[i]}
        />
        ))}
      </>
    );
  }

export default Weather;