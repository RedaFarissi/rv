import { Link } from "react-router-dom";
import "./Header.css"


export default function Header(){
  const programing = [
    {name:"HTML" , link:"html"},
    {name:"CSS" , link:"css"},
    {name:"JAVASCRIPT" , link:"js"},
    {name:"REACT.js" , link:"react"},
    {name:"VUE.js" , link:"vue"},
    {name:"PYTHON" , link:"python"},
    {name:"DJANGO" , link:"django"},
    {name:"DJANGO API" , link:"django_api"},
    {name:"PHP" , link:"php"},
    {name:"LARAVEL" , link:"laravel"},
    {name:"LARAVEL API" , link:"laravel_api"},
  ]
  const links = programing.map(e=> 
            <li className="menu-category">
                <Link to={e.link} className="menu-title">
                  {e.name}
                </Link>
            </li>)
    return(
<header>
<div className="header-main">
        <div className="container">
            <div className="d-flex justify-content-around">
               <Link to='/' className="header-logo">  
                 <img src="" alt="logo" width="100" height="36"/> 
               </Link> &nbsp;&nbsp;
            </div>

            <div className="header-search-container">
              <form method="POST">
                  <input type="text" name="search" className="search-field" />
                  <button className="search-btn" type="submit"> 
                      <ion-icon name={`search-outlin`}></ion-icon> 
                  </button>
              </form>
            </div>

            <div className={`header-user-actions`} id="header-icon">          
                <Link to='/login'>
                  <div  className='rounded-circle d-flex justify-content-center align-items-center' style={{width:"38px",height:"38px",color:"black"}}>
                    <div className={`fas fa-user`}></div>
                  </div>
                </Link> 
                <Link  to='/create_post' >
                  <div className='rounded-circle d-flex justify-content-center align-items-center' style={{width:"38px",height:"38px",color:"black"}}>
                    <div className={`fa-solid fa-shop`}></div>
                  </div>
                </Link>
            </div>
        </div> 
    </div>
    <nav className="desktop-navigation-menu" >
        <div className="container">
          <ul className="desktop-menu-category-list">
            
            { links  }

          </ul>
        </div>
    </nav>


{/* <nav className="navbar navbar-expand-lg navbar-dark">
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
</nav> */}
</header>
    )
}