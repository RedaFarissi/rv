const index8Router=()=>{
  return`import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
return (
  <Router>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Router>
);
}

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>This is the Home page.</p>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>About</h1>
      <p>This is the About page.</p>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <p>This is the Contact page.</p>
    </div>
  );
}

export default App;`
}

export default index8Router