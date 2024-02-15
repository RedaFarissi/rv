import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Header.sass"

export default function Header(){    
    const [modeColor,setModeColor] = useState(localStorage.getItem("bg_body") || null)
    // Course links 
    const programing = [{name:"HTML" , link:"html"},{name:"CSS" , link:"css"},{name:"JAVASCRIPT" , link:"js"},{name:"REACT.js" , link:"react"},{name:"MYSQL" , link:"mysql"},{name:"PYTHON" , link:"python"},{name:"DJANGO" , link:"django"},{name:"DJANGO REST FRAMEWORK" , link:"django-rest-framework"},{name:"PHP" , link:"php"},{name:"LARAVEL" , link:"laravel"} ,{name:"Git" , link:"git"},{name:"CMD" , link:"power-shell"},]
    const links = programing.map(e=> 
    <li className="menu-category">
        <Link to={e.link} className={`menu-title color-link-nav-light`}>
          {e.name}
        </Link>
    </li>);

    // Handle color mode 
    const themeLight = ["#8080801a","black","#00000000","rgba(0 0 0/5%)","red"];
    const themeDark = ["rgb(5 5 5)","#f0fff0","rgb(10 10 10)","rgba(255 255 255/5%)","aqua"];

    const handleModeColor = (themeColor)=>{
        const [bgBody, textColor, bgAside, styleDivv,titleH2] = themeColor;
        document.documentElement.style.setProperty('--bg-body', bgBody);
        document.documentElement.style.setProperty('--text-color', textColor);
        document.documentElement.style.setProperty('--bg-aside', bgAside);
        document.documentElement.style.setProperty('--style-divv', styleDivv);
        document.documentElement.style.setProperty('--title-h2', titleH2);
        
        localStorage.setItem("bg_body" , bgBody);
        localStorage.setItem("text_color" , textColor);
        localStorage.setItem("bg_aside" , bgAside);
        localStorage.setItem("style_divv" , styleDivv); 
        localStorage.setItem("title_h2" , titleH2); 
    }

    useEffect(()=>{
       (modeColor === 'rgb(5 5 5)') ? setModeColor("white"):setModeColor("black")
    },[]);

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

            <div className={`header-icons`} >          
                <Link to='/login'>
                    <i className={`fas fa-user`}></i>
                </Link> 
                {
                    ( modeColor === 'black' )?
                    <i class="fa-solid fa-sun text-warning" onClick={()=>{handleModeColor(themeLight)}}></i>:
                    <i class="fa-solid fa-moon" onClick={()=>{handleModeColor(themeDark)}}></i>   
                }
            </div>
        </div> 
    </div>
    <nav className="desktop-navigation-menu" >
        <div className="container-fliud p-0">
            <ul className="desktop-menu-category-list">   
                { links }
            </ul>
        </div>
    </nav>
</header>
    )
}

/* 

*/
  