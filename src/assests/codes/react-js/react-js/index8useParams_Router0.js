const index8useParams_Router0=()=>{
  return`import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ArticleList from './ArticleList';
import ArticleDetail from './ArticleDetail';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={ArticleList} />
        <Route path="/article/:slug" component={ArticleDetail} />
      </Switch>
    </Router>
  );
}

export default App;`
  }


  export default index8useParams_Router0