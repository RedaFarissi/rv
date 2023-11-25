import { Link } from "react-router-dom";
import "./Header.sass"


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
    {name:"LARAVEL" , link:"laravel"} ,
    {name:"LARAVEL API" , link:"laravel_api"},
    {name:"Git" , link:"git"},
    {name:"CMD" , link:"power-shell"},
  ]
  const links = programing.map(e=> 
            <li className="menu-category">
                <Link to={e.link} className={`menu-title color-link-nav-light`}>
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