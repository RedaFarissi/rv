import { Link } from "react-router-dom";
import React, { useRef } from 'react';
import "./Header.sass";

export default function Header(props){    
    
    // Course links 
    const programing = [{name:"HTML" , link:"html"},{name:"CSS" , link:"css"},{name:"JAVASCRIPT" , link:"js"},{name:"REACT.js" , link:"react"},{name:"MYSQL" , link:"mysql"},{name:"PYTHON" , link:"python"},{name:"DJANGO" , link:"django"},{name:"DJANGO REST FRAMEWORK" , link:"django-rest-framework"},{name:"PHP" , link:"php"},{name:"LARAVEL" , link:"laravel"} ,{name:"Git" , link:"git"},{name:"CMD" , link:"power-shell"},]
    const links = programing.map(e=> 
    <li className="menu-category">
        <Link to={e.link} className={`menu-title color-link-nav-light`}>
            {e.name}
        </Link>
    </li>);

    const divRef = useRef(null);
    const handleScrollButtonClick = (px) => {
        const divElement = divRef.current;
        if (divElement) {
          divElement.scrollBy({
            left: px,
            behavior: 'smooth',
          });
        }
    };

    return(
<header className="header p-0" dir="ltr">
    <div className="header-main">
        <div className="container-h">
            <div className="d-flex justify-content-around">
               <Link to='/'>  
                  <i className="fa-solid fa-house fs-5 text-light"></i>
               </Link> &nbsp;&nbsp;
            </div>

            <div className="header-search-container">
                    <input type="text" name="search" className="search-field" />
                    <button className="search-btn" type="submit">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
            </div>

            <div className={`header-icons`} >          
                <Link to='/login'>
                    <i className={`fas fa-user`}></i>
                </Link> 
                <i className="menu-icon fa-solid fa-bars" onClick={props.clickMenuHeader}></i>
            </div>
        </div> 
    </div>
    <nav className="desktop-navigation-menu" ref={divRef}>
        
        <div className="container-fliud p-0">
            <ul className="desktop-menu-category-list">   
                { links }
            </ul>
        </div>
        <button className="btn-scroll btn-scroll-right" onClick={()=>{handleScrollButtonClick(200)}}>
            <i className="fa-solid fa-angle-right"></i>
        </button>

        <button className="btn-scroll btn-scroll-left" onClick={()=>{handleScrollButtonClick(-200)}}>
            <i className="fa-solid fa-angle-left"></i>
        </button>
    </nav>
</header>
    )
}