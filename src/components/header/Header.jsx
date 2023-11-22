import { Link } from "react-router-dom";
import "./Header.sass"


export default function Header(){
  const programing = [
    {name:"HTML" , link:"html" , color:"color-link-nav-light"},
    {name:"CSS" , link:"css" , color:"color-link-nav-light"},
    {name:"JAVASCRIPT" , link:"js" , color:"color-link-nav-light"},
    {name:"REACT.js" , link:"react" , color:"color-link-nav-light"},
    {name:"VUE.js" , link:"vue" , color:"color-link-nav-light"},
    {name:"PYTHON" , link:"python" , color:"color-link-nav-light"},
    {name:"DJANGO" , link:"django" , color:"color-link-nav-light"},
    {name:"DJANGO API" , link:"django_api" , color:"color-link-nav-light"},
    {name:"PHP" , link:"php" , color:"color-link-nav-light"},
    {name:"LARAVEL" , link:"laravel" , color:"color-link-nav-light"} ,
    {name:"LARAVEL API" , link:"laravel_api" , color:"color-link-nav-light"},
    {name:"Git" , link:"git" , color:"color-link-nav-light"},
    {name:"powerShell" , link:"power-shell" , color:"color-link-nav-light"},
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
</header>
    )
}