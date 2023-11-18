import { Link } from "react-router-dom";
import "./Header.sass"


export default function Header(){
  const programing = [
    {name:"HTML" , link:"html" , color:"color-html-nav"},
    {name:"CSS" , link:"css" , color:"color-css-nav"},
    {name:"JAVASCRIPT" , link:"js" , color:"color-js-nav"},
    {name:"REACT.js" , link:"react" , color:"color-react-nav"},
    {name:"VUE.js" , link:"vue" , color:"color-vue-nav"},
    {name:"PYTHON" , link:"python" , color:"color-python-nav"},
    {name:"DJANGO" , link:"django" , color:"color-django-nav"},
    {name:"DJANGO API" , link:"django_api" , color:"color-django-nav"},
    {name:"PHP" , link:"php" , color:"color-php-nav"},
    {name:"LARAVEL" , link:"laravel" , color:"color-laravel-nav"} ,
    {name:"LARAVEL API" , link:"laravel_api" , color:"color-laravel-nav"},
    {name:"Git" , link:"git" , color:"color-powerShell-nav"},
    {name:"powerShell" , link:"power-shell" , color:"color-powerShell-nav"},
  ]
  const links = programing.map(e=> 
            <li className="menu-category">
                <Link to={e.link} className={`menu-title ${e.color}`}>
                  {e.name}
                </Link>
            </li>)
    return(
<header className="header p-0" dir="ltr">
    <div className="header-main">
        <div className="container">
            <div className="d-flex justify-content-around">
               <Link to='/' className="header-logo">  
                  <div class="logo">Logo</div>
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
                    <div className={`fas fa-user text-light`}></div>
                  </div>
                </Link> 
            </div>
        </div> 
    </div>
    <nav className="desktop-navigation-menu" >
        <div className="container-fliud p-0">
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