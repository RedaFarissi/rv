import { Link , useLocation , useNavigate} from "react-router-dom";
import React, { useRef  , useEffect } from 'react';
import "./Header.sass";
import { useSelector, useDispatch } from 'react-redux';
import {
    useCustomHtmlList , useCustomCssList , useCustomJsList , useCustomSqlList , useCustomPythonList ,  
    useCustomDjangoList ,useCustomDjangoRestList, useCustomPhpList , useCustomReactList , useCustomLaravelList , 
    useCustomGitList , useCustomCmdList ,  useCustomScroolTo0
} from "../../custom/pathCustoms";

export default function Header(props){ 
    const navigate = useNavigate()
    const searchPhone = useRef(null);
    const openSearchPhone = (event)=>{ 
        event.stopPropagation();
        const divElement = searchPhone.current;
        (divElement.style.display !== "block") ? divElement.style.display= "block"  :  divElement.style.display= "none"   ;    
    }
    const closeSearchPhone = ()=>{ 
        const divElement = searchPhone.current;
        divElement.style.display= "none"
    }
    const divRef = useRef(null);
    const location = useLocation();
    
    const dispatch = useDispatch();
    const  isVisibleProfile = useSelector(state => state.boxProfile.isVisibleProfile );
    
    //**********************************SEARCH  ***********************************//
    const  searchTitle = useSelector(state => state.search.title ); 
    const [html_list] = useCustomHtmlList();
    const [css_list]  =  useCustomCssList();
    const [js_matrix] = useCustomJsList();
    const [sql_list] = useCustomSqlList();
    const [python_list] = useCustomPythonList(); 
    const [django_matrix] = useCustomDjangoList();
    const [django_rest_framework_matrix] = useCustomDjangoRestList();
    const [php_list] = useCustomPhpList();
    const [react_matrix]  = useCustomReactList();
    const [laravel_matrix] = useCustomLaravelList();
    const [git_list]  = useCustomGitList();
    const [cmd_list]  = useCustomCmdList();

   
    const handleSubmitSearch = (e) => {
        e.preventDefault(); // Prevent page reload on submit
        const resultArray = searchAndRetrieve(searchTitle)
        dispatch({type:'SEARCH_RESULT' , payload: resultArray})
    };

    const detectLanguage = (searchTerm) => {
        const languages = ["html", "css", "js", "react", "sql", "python", "django", "django rest framework", "php", "laravel", "git", "cmd", "powershell"];
        const normalizedSearchTerm = searchTerm.toLowerCase();
        for (let lang of languages) {
            if (normalizedSearchTerm.startsWith(lang)) {
                return lang; // Return the language if it matches the start of the search term
            }
        }
        return null; // Return null if no language is detected
    };
    
    function searchAndRetrieve(searchTerm) {
        let matchingValues = [];
        const detectedLanguage = detectLanguage(searchTerm);
        
        // Remove the language name from the search term if detected
        const normalizedSearchTerm = detectedLanguage ? searchTerm.slice(detectedLanguage.length).trim() : searchTerm ;

        // Normalize function to replace underscores and handle case insensitivity
        const normalize = (value) => value.toLowerCase().replace(/_/g, ' ');
        const includesSearchTerm = (value) => {
            return normalize(value).includes(normalize(normalizedSearchTerm));
        };
        const formatResult = (category, value) => `${category} ${value.replace(/_/g, ' ')}`;
        const searchInList = (list, category, routePrefix , symbole="/") => {
            list.forEach((value) => {
                if (includesSearchTerm(value)) {
                    matchingValues.push({
                        route: `${routePrefix}${symbole}${value.toLowerCase().replace(/\s/g, '-')}`,
                        value: formatResult(category, value)
                    });
                }
            });
        };
    
        const searchInMatrix = (matrix, category, routePrefix) => {
            matrix.forEach((subcategory) => {
                if (Array.isArray(subcategory)) {
                    const firstElement = subcategory[0].toLowerCase().replace(/_/g, '-');
                    subcategory.forEach((value, index) => {
                        if (includesSearchTerm(value)) {
                            const route = index === 0 
                                ? `${routePrefix}/${firstElement}/`
                                : `${routePrefix}/${firstElement}#${value}`;
                            matchingValues.push({
                                route,
                                value: formatResult(category, value),
                            });
                        }
                    });
                } else {
                    if (includesSearchTerm(subcategory)) {
                        matchingValues.push({
                            route: `${routePrefix}/${subcategory.toLowerCase().replace(/_/g, '-')}`,
                            value: formatResult(category, subcategory),
                        });
                    }
                }
            });
        };
        
        if (detectedLanguage) {
            switch (detectedLanguage) {
                case "html": searchInList(html_list, "HTML", "/html"); break;
                case "css": searchInList(css_list, "CSS", "/css"); break;
                case "js":  // Search in JS matrix
                    js_matrix.forEach((category) => {
                        category.forEach((value) => {
                            if (includesSearchTerm(value)) {
                                matchingValues.push({ route: `/js/${value.toLowerCase().replace(/\s/g, '-')}`, value: formatResult("JS", value) });
                            }
                        });
                    });break;
                case "react": 
                    react_matrix.forEach((category) => {
                        if (Array.isArray(category)) {
                            category.forEach((value, index) => {
                                if (includesSearchTerm(value)) {
                                    if (index === 0) {
                                        matchingValues.push({
                                            route: `/react#${value.replace(/_/g, '-')}`,
                                            value: formatResult("React", value),
                                        });
                                    } else {
                                        matchingValues.push({
                                            route: `/react#${value}`,
                                            value: formatResult("React", value),
                                        });
                                    }
                                }
                            });
                        } else {
                            if (includesSearchTerm(category)) {
                                matchingValues.push({
                                    route: `/react#${category.replace(/_/g, '-')}`,
                                    value: formatResult("React", category),
                                });
                            }
                        }
                    }); break;
                case "sql": searchInList(sql_list, "SQL", "/mysql","#"); break;
                case "python": searchInList(python_list, "Python", "/python"); break;
                case "django": searchInMatrix(django_matrix, "Django", "/django"); break;
                case "django rest framework" :
                case "drf" :
                    searchInMatrix(django_rest_framework_matrix, "Django Rest Framework", "/django-rest-framework"); break;
                case "php":
                    php_list.forEach((subcategory) => {
                        subcategory.forEach((value, index) => {
                            if (includesSearchTerm(value) && index !== 0) {
                                matchingValues.push({
                                    route: `/php/${value.toLowerCase().replace(/\s/g, '-')}`,
                                    value: formatResult("PHP", value),
                                });
                            }
                        });
                    });
                    break;
                case "laravel": searchInMatrix(laravel_matrix, "Laravel", "/laravel"); break;
                case "git": 
                    git_list.forEach((value) => {
                        if (includesSearchTerm(value)) {
                            matchingValues.push({ route: `/git#${value}`, value: formatResult("git", value) });
                        }
                    }); break;
                case "Command Proppt":
                case "cmd":
                case "powershell":     cmd_list.forEach((value) => {
                    if (includesSearchTerm(value)) {
                        matchingValues.push({ route: `/powerShell#${value}`, value: formatResult("powerShell", value) });
                    }
                });break;
                default:break;
            }
        } else {
            // General search across all categories
            searchInList(html_list, "HTML", "/html");
            searchInList(css_list, "CSS", "/css");
            js_matrix.forEach((category) => {
                category.forEach((value) => {
                    if (includesSearchTerm(value)) {
                        matchingValues.push({ route: `/js/${value.toLowerCase().replace(/\s/g, '-')}`, value: formatResult("JS", value) });
                    }
                });
            });
            react_matrix.forEach((category) => {
                if (Array.isArray(category)) {
                    category.forEach((value, index) => {
                        if (includesSearchTerm(value)) {
                            if (index === 0) {
                                matchingValues.push({
                                    route: `/react#${value.replace(/_/g, '-')}`,
                                    value: formatResult("React", value),
                                });
                            } else {
                                matchingValues.push({
                                    route: `/react#${value}`,
                                    value: formatResult("React", value),
                                });
                            }
                        }
                    });
                } else {
                    if (includesSearchTerm(category)) {
                        matchingValues.push({
                            route: `/react#${category.replace(/_/g, '-')}`,
                            value: formatResult("React", category),
                        });
                    }
                }
            });
            searchInList(sql_list, "SQL", "/mysql","#");
            searchInList(python_list, "Python", "/python");
            searchInMatrix(django_matrix, "Django", "/django");
            searchInMatrix(django_rest_framework_matrix, "Django Rest Framework", "/django-rest-framework");
            php_list.forEach((subcategory) => {
                subcategory.forEach((value, index) => {
                    if (includesSearchTerm(value) && index !== 0) {
                        matchingValues.push({
                            route: `/php/${value.toLowerCase().replace(/\s/g, '-')}`,
                            value: formatResult("PHP", value),
                        });
                    }
                });
            });
            searchInMatrix(laravel_matrix, "Laravel", "/laravel");
            git_list.forEach((value) => {
                if (includesSearchTerm(value)) {
                    matchingValues.push({ route: `/git#${value}`, value: formatResult("git", value) });
                }
            });
            cmd_list.forEach((value) => {
                if (includesSearchTerm(value)) {
                    matchingValues.push({ route: `/powerShell#${value}`, value: formatResult("powerShell", value) });
                }
            });
        }
        return matchingValues
    } 


    const programing = [
        {name:"HTML",link:"html"}, {name:"CSS",link:"css"}, {name:"JAVASCRIPT",link:"js"}, {name:"REACT.js",link:"react"}, 
        {name:"MYSQL",link:"mysql"}, {name:"PYTHON",link:"python"}, {name:"DJANGO",link:"django"},
        {name:"DJANGO REST FRAMEWORK",link:"django-rest-framework"}, {name:"PHP",link:"php"}, {name:"LARAVEL" , link:"laravel"},
        {name:"Git" , link:"git"} , {name:"CMD", link:"powerShell"}
    ];
    
    useEffect(()=>{
        window.addEventListener('resize', () => {
            const divSearchElement = searchPhone.current;
            if( window.innerWidth <= 470 ){
                divSearchElement.style.display = "none";
            }
        });
    },[searchPhone]);

    
    const checkAboutRouteHome =()=>{
        const currentPath = location.pathname;        
        return ( currentPath === "/" || currentPath === "" || currentPath === "/login" ) ? true : false 
    }

    const links = programing.map(e=> 
        <li className="menu-category">
            <Link to={e.link} className={`menu-title color-link-nav-light`} style={{cursor: "pointer"}} onClick={useCustomScroolTo0}>
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

    // handle connection with back-end 
    const logout =()=>{
        if(localStorage.getItem('auth_token') !== null){
            localStorage.removeItem('auth_token')
            window.location.reload()
        }
    }

    const handleToggleProfile = (event) => {
        event.stopPropagation(); // Stop event propagation
        dispatch({ type: 'TOGGLE_VISIBILTY_PROFILE' });
    };

    return(
<>
<header className="header p-0" dir="ltr" 
    onClick={ (event)=>{ 
        props.clickMenuHeader(event, false);
        closeSearchPhone();
        dispatch({ type: 'FALSE_VISIBILTY_PROFILE' });
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
                        <i  onClick={handleToggleProfile} className="fa-solid fa-user ms-4 me-4 p-2" style={{cursor: "pointer"}}></i>
                        <div className="box-profile" dir="rtl" style={{display: isVisibleProfile ? "block" : "none" }}> 
                            <Link to="/my-page"><button> <i className="fa-solid fa-circle-user ms-2"></i> صفحتي </button></Link><br />
                            <Link to="/all-question"><button> <i class="fa-solid fa-question ms-2"></i>  كل الأسئلة </button></Link><br />
                            <Link to="/report-error"><button> <i className="fa-solid fa-bug ms-2"></i> إبلاغ عن خطأ</button></Link><br />
                            <button className="out" onClick={logout}>  <i className="fa-solid fa-right-from-bracket ms-2"></i> تسجيل الخروج   </button> 
                        </div>
                    </>
                }
                <Link to='/' className="text-decoration-none text-light ms-4">  
                    <i className="fa-solid fa-house fs-5 text-light p-2"></i>
                </Link> 
            </div>
          
            <div className="header-search-container">  
                <form onSubmit={handleSubmitSearch} >
                        <input type="text" name="search" className="search-field"
                            onChange={ (e) => dispatch({ type: 'SET_MESSAGE_SEARCH', payload: e.target.value })}
                        />
                        <button className="search-btn" type="submit" onClick={()=>{navigate("/search")}}>
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
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
        
        <button className="icons-header-phone" onClick={ (event)=>{ 
            openSearchPhone(event); 
            props.clickMenuHeader(event, false); }}
        >
            <i className="fa-solid fa-magnifying-glass"></i>
        </button>

        { 
            ( localStorage.getItem('auth_token') === null ) ?
            <Link to='/login' className="icons-header-phone">
                <i className={`fas fa-user`}></i>
            </Link> : 
            <Link to='/my-page' className="icons-header-phone">
                <i className={`fas fa-user`}></i>
            </Link>
        }
                                 
        <Link to='/paypal-payment' className="icons-header-phone">
            <i className="fa-brands fa-paypal"></i>
        </Link>

        <button onClick={(event)=>{ 
                props.clickMenuHeader(event , true); 
                closeSearchPhone(); 
            }} 
            className={`icons-header-phone ${ (checkAboutRouteHome()) ? "d-none" : "d-block" }`} 
        >
            <i className="menu-icon fa-solid fa-bars"></i>
        </button>    
    </div>

    <form className="header-search-container-phone" ref={searchPhone} onClick={(event)=>{ event.stopPropagation() }}  onSubmit={handleSubmitSearch}>
        <input type="text" name="search-phone" className="search-field-phone"  onChange={ (e) => dispatch({ type: 'SET_MESSAGE_SEARCH', payload: e.target.value })} />
        <button className="search-btn-phone" type="submit" onClick={()=>{navigate("/search")}}>
            <i className="fa-solid fa-magnifying-glass"></i>
        </button>
    </form>
   
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