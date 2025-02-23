import { Link , useLocation } from "react-router-dom";
import React, { useRef  , useEffect } from 'react';
import "./Header.sass";

export default function Header(props){   
    const divRef = useRef(null);
    const location = useLocation();
   
    const programing = [
        {name:"HTML",link:"html"}, {name:"CSS",link:"css"}, {name:"JAVASCRIPT",link:"js"}, {name:"REACT.js",link:"react"}, 
        {name:"MYSQL",link:"mysql"}, {name:"PYTHON",link:"python"}, {name:"DJANGO",link:"django"},
        {name:"DJANGO REST FRAMEWORK",link:"django-rest-framework"}, {name:"PHP",link:"php"}, {name:"LARAVEL" , link:"laravel"},
        {name:"Git" , link:"git"} , {name:"CMD", link:"powerShell"}
    ];
    
    useEffect(()=>{
        window.addEventListener('resize', () => {
            const divSearchElement = props.searchPhone.current;
            if( window.innerWidth <= 470 ){
                divSearchElement.style.display = "none";
            }
        });
    },[props.searchPhone]);

    
    const checkAboutRouteHome =()=>{
        const currentPath = location.pathname;        
        return ( currentPath === "/" || currentPath === "" || currentPath === "/login" ) ? true : false 
    }

    const links = programing.map(e=> 
        <li className="menu-category">
            <Link to={e.link} className={`menu-title color-link-nav-light`} style={{cursor: "pointer"}}>
                {e.name}
            </Link>
        </li>);
   
    const handleScrollButtonLeftAndRight = (px) => {
        const divElement = divRef.current;
        if (divElement) {
          divElement.scrollBy({
            left: px,
            behavior: 'smooth',
          });
        }
    };



    return(
<>
<header className="header p-0" dir="ltr" 
    onClick={ (event)=>{ 
        props.clickMenuHeader(event, false);
        props.closeSearchPhone();
        props.boxProfileStyle();
    }}
>
    <div className="header-main">
        <div className="container-h">
            <div>

                { 
                    ( localStorage.getItem('auth_token') === null ) ?
                    <Link className="text-light ms-4 me-4" to='/login'> 
                        <i className="fa-solid fa-user p-2" ></i>
                    </Link> : 
                    <>
                        <i className="fa-solid fa-user ms-4 me-4 p-2" style={{cursor: "pointer"}} onClick={props.boxProfile}></i>
                        <div className="box-profile" dir="rtl" style={{display: props.isVisibleProfile ? "block" : "none" }}> 
                            <button> <i className="fa-solid fa-circle-user ms-2"></i> صفحتي </button><br />
                            <button className="out" onClick={props.logout}>   تسجيل الخروج   </button> 
                        </div>
                    </>
                }
                <Link to='/' className="text-decoration-none text-light ms-4">  
                    <i className="fa-solid fa-house fs-5 text-light p-2"></i>
                </Link> 
            </div>

          
            <div className="header-search-container">  
                <form onSubmit={props.handleSubmit} >
                        <input type="text" name="search" className="search-field"
                            value={props.searchValue} // Step 4: Bind the value to state
                            onChange={props.handleInputChange} // Step 5: Handle input change
                        />
                        <Link to='/search'> 
                            <button className="search-btn" type="submit">
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </button>
                        </Link>
                </form>
            </div>

            <div className={`header-icons`} >
                <div className={`${ (checkAboutRouteHome()) ? "d-none" : "d-block" }`}>
                    <i onClick={(event)=>{ props.clickMenuHeader(event , true) }} className={`menu-icon fa-solid fa-bars`}></i>
                </div>

                <Link  to='/paypal-payment'>
                    <i className="fa-brands fa-paypal btn btn-outline-light"></i>
                </Link>
            </div>
        </div> 
    </div>

    {/* To handle  STYLE FOR PHONE  */}
    <div className="header-main-phone">
        <Link to='/' className="icons-header-phone">  
            <i className="fa-solid fa-house fs-5 text-light"></i>
        </Link>
        <button className="icons-header-phone" onClick={ (event)=>{ props.openSearchPhone(event); props.clickMenuHeader(event, false); }}>
            <i className="fa-solid fa-magnifying-glass"></i>
        </button>
        <Link to='/login' className="icons-header-phone">
            <i className={`fas fa-user`}></i>
        </Link> 
        
        <button className="icons-header-phone">
            <i className="fa-brands fa-paypal"></i>
        </button>
        
        <button onClick={(event)=>{ props.clickMenuHeader(event , true); props.closeSearchPhone(); }} className={`icons-header-phone ${ (checkAboutRouteHome()) ? "d-none" : "d-block" }`} >
            <i className="menu-icon fa-solid fa-bars"></i>
        </button>    
    </div>
    <div className="header-search-container-phone" ref={props.searchPhone} onClick={(event)=>{ event.stopPropagation() }}>
        <input type="text" name="search-phone" className="search-field-phone" />
        <button className="search-btn-phone" type="submit">
            <i className="fa-solid fa-magnifying-glass"></i>
        </button>
    </div>


    <nav className={`desktop-navigation-menu`} ref={divRef}>
        <div className={`container-fliud p-0`}>
            <ul className="desktop-menu-category-list">   
                { links }
            </ul>
        </div>
        
        <button className={`btn-scroll btn-scroll-right`} onClick={()=>{handleScrollButtonLeftAndRight(250)}}>
            <i className="fa-solid fa-angle-right"></i>
        </button>

        <button className={`btn-scroll btn-scroll-left`} onClick={()=>{handleScrollButtonLeftAndRight(-250)}}>
            <i className="fa-solid fa-angle-left"></i>
        </button>
    </nav>

</header>

</>
)
}