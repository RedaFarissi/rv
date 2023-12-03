const index8useParams_Router1=()=>{
return`import React from 'react';
import { Link } from 'react-router-dom';
import articles from "./data/articles";

// Your article data
/*const articles = [
{ title: 'Article 1', slug: 'article-1' },
{ title: 'Article 2', slug: 'article-2' },
{ title: 'Article 3', slug: 'article-3' },
];*/

const ArticleList = () => {
  return (
    <ul>
      {articles.map((article) => (
        <li key={article.slug}>
          <Link to={\`/article/\${article.slug}\`}>{article.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default ArticleList;`
}

export default index8useParams_Router1