import API from "./API";
import React, { useEffect, useState } from "react";
import Article from "../Components/Article";
import { selectTopThree } from "./";

function Headlines() {
    const [articles, setArticles] = useState([]);
  
    useEffect(() => {
      API.getHeadlines().then((results) => {
        setArticles(selectTopThree(results.data.articles));
      });
    }, []);
  
    return (
      <>
        <h1>Headlines: </h1>
        {articles.map((article, i) => (
          <Article
            key={i}
            data={article[i]}
          />
        ))}
      </>
    );
  }
  

export default Headlines;