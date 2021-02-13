import React from 'react';
import Article from '../Components/Article';
import API from "./API";

function Weather() {
    const [articles, setArticles] = useState([]);
  
    useEffect(() => {
      API.getWeather().then((results) => {
        setArticles(selectTopFive(results.data.articles));
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