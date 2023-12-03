const index8useParams_Router2=()=>{
return`import React from "react";
import { useParams } from "react-router-dom";

import articles from "./data/articles"; // Your article data

function ArticleDetail() {
  const { slug } = useParams();

  const article = articles.find((article) => article.slug === slug);

  if (!article) {
    return <div>Article not found.</div>;
  }

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
      <img src={article.image} alt={article.title} />
    </div>
  );
}

export default ArticleDetail;`
}


export default index8useParams_Router2