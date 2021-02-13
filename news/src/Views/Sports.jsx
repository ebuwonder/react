import React from 'react';
import Article from '../Components/Article';

function Sports() {
    const [articles, setArticles] = useState([]);
  
    useEffect(() => {
      API.getSports().then((results) => {
        setArticles(selectTopFive(results.data.articles));
      });
    }, []);
  
    return (
      <>
        <h1>Sports: </h1>
        {articles.map((article, i) => (
          <Article
          key={i}
          data={article[i]}
        />
        ))}
      </>
    );
  }

export default Sports;