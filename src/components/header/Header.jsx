import { Link } from "react-router-dom";
import "./Header.sass"

export default function Header(){
    return(
<header>
<nav className="navbar navbar-expand-lg navbar-dark">
  <div className="container-fluid">
    <Link className="navbar-brand me-3" to="/">
      <div className="rounded-circle p-2 bg-danger text-dark logo"> RVC </div>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
            <Link className="nav-link active" to="/html">HTML</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link active" to="/css">CSS</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link active" to="/js">JavaScript</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link active" to="/react">React.js</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link active" to="/vue">Vue.js</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link active" to="/django">Django</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link active" to="/django_api">Django API</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link active" to="/laravel">Laravel</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link active" to="/laravel_api">Laravel API</Link>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</header>
    )
}