import { useEffect, useRef , useState} from 'react';
import { BrowserRouter as Router , Routes, Route} from "react-router-dom";
import { 
    Header , Home , Html , Css , Js , React , Mysql , Python , Django , DjangoRestFramework , Cmd , Git , Php , 
    Laravel , Login , Search , CreateAccount , PayPalPayment , MyPage , ReportAnErrorUser , AllQuestion , AddQuestion , 
    QuestionDetail ,
} from './components/path';
import {
    useCustomHtmlList , useCustomCssList , useCustomJsList , useCustomSqlList , useCustomPythonList ,  useCustomDjangoList ,useCustomDjangoRestList, useCustomPhpList , useCustomReactList , useCustomLaravelList , useCustomGitList , useCustomCmdList ,
    useCustomScrollToHash , useCustomResizeAside , 
} from "./custom/pathCustoms"



import "./App.sass";
function App() {
    const url =  "http://localhost:8000" ;
    const searchPhone = useRef(null);

    // will return tables. tables contain title and link of all languages 
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

     
    useCustomScrollToHash();  // Scroll to id when print url  direct in browser

    useCustomResizeAside();   // Handle Resize Aside 
    
    
    /************************************ Handle footer style ***********************************/
    const [footerWidth , setFooterWidth] = useState({ width: "", block_1: "", block_2: "" });
    const handleResizeFooterWithAside =()=>{
        (window.innerWidth > 1140) ?
        setFooterWidth({
            width: "calc( 100% - 265px )",
            block_1: "col-sm-11 col-sm-11 col-md-9 col-lg-5 offset-lg-1 col-xl-5 offset-xl-1" ,
            block_2: "col-sm-11 col-md-9 col-lg-5 col-xl-5"
        }):
        setFooterWidth({
            width: "100%",
            block_1: "col-sm-10 col-sm-10 col-md-8 col-lg-4 offset-lg-2 col-xl-4 offset-xl-1" ,
            block_2: "col-sm-10 col-md-8 col-lg-4 col-xl-4"
        });
    }

    useEffect(() => {
            //Handle footer style
            handleResizeFooterWithAside();
            window.addEventListener('resize', handleResizeFooterWithAside);
    }, []);


    
    
    //scroll with link have ID
    const scrollYAdd = () => {
        setTimeout(() => {
            const scrollTop = window.scrollY - 140;
            window.scrollTo({ top: scrollTop , behavior: 'smooth' });
        }, 1000 );  
    };
    //scroll to 0
    const scrollY_to_0 = () => {  window.scrollTo({  top: 0 ,  behavior: 'smooth' })  };

    const openSearchPhone = (event)=>{ 
        event.stopPropagation();
        const divElement = searchPhone.current;
        (divElement.style.display !== "block")? divElement.style.display= "block" : divElement.style.display= "none" ;    
    }
    const closeSearchPhone = ()=>{ 
        const divElement = searchPhone.current;
        divElement.style.display= "none"
    }

    
    /***************************  Aside animation and event click ***************************/
    // animation aside open
    function myStartFunctionOpen() { this.style.width = "0px";  }
    function MyAnimationiterationOpen(){ this.style.width = "276px"; }
    
    function clickMenuHeader(event , clickFromMenu ){
        event.stopPropagation();

        const asides = document.querySelectorAll('.aside');
        asides.forEach( aside => {
            if( aside.style.display !== 'block' && clickFromMenu === true  )  {
                aside.style.display = "block"
                aside.style.animation  = "moveAsideOpen 1s forwards";
                aside.addEventListener("animationstart", myStartFunctionOpen);
                aside.addEventListener("animationiteration", MyAnimationiterationOpen);
            }else{
                if( window.innerWidth <= 1140 ){
                    aside.style.display = "none" 
                }
            }
        });
    }

    /**********************************  Serach    ******************************************** */
    const [searchValue, setSearchValue] = useState("");
    const handleInputChange = (e) => {
        setSearchValue(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent page reload on submit
        searchAndRetrieve(searchValue);
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
        return matchingValues;
    }    
    
    // Visiblity if user login  
    const [isVisibleProfile, setIsVisibleProfile] = useState(false);
    function boxProfile(event){
        setIsVisibleProfile(!isVisibleProfile);
        event.stopPropagation();
    }
    function boxProfileStyle(){
        setIsVisibleProfile(false);
    }

    // handle connection with back-end 
    const logout =()=>{
        if(localStorage.getItem('auth_token') !== null){
            localStorage.removeItem('auth_token')
            window.location.reload()
        }
    }

    return (
    <Router>
        <Header 
            clickMenuHeader={clickMenuHeader} 
            searchPhone={searchPhone}
            openSearchPhone={openSearchPhone}
            closeSearchPhone={closeSearchPhone}

            searchValue={searchValue}
            setSearchValue={setSearchValue}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}

            isVisibleProfile={isVisibleProfile}
            boxProfile={boxProfile}
            boxProfileStyle={boxProfileStyle}
            
            logout={logout}
        />
        <Routes>

            <Route path='/'       element={<Home 
                                                closeSearchPhone={closeSearchPhone} 
                                                scrollY_to_0={scrollY_to_0} 
                                                boxProfileStyle={boxProfileStyle}
                                            />} 
            />
            <Route path='/html/*' element={<Html 
                                                boxProfileStyle={boxProfileStyle}
                                                scrollY_to_0={scrollY_to_0} 
                                                clickMenuHeader={clickMenuHeader} 
                                                html_list={html_list}
                                                closeSearchPhone={closeSearchPhone} 
                                                footerWidth={footerWidth}
                                            />}
            />
            <Route path='/css/*' element={<Css 
                                                boxProfileStyle={boxProfileStyle}
                                                scrollY_to_0={scrollY_to_0} 
                                                clickMenuHeader={clickMenuHeader} 
                                                css_list={css_list} 
                                                closeSearchPhone={closeSearchPhone} 
                                                footerWidth={footerWidth}
                                            />} 
            />
            <Route path='/js/*' element={<Js 
                                                boxProfileStyle={boxProfileStyle}
                                                scrollY_to_0={scrollY_to_0} 
                                                clickMenuHeader={clickMenuHeader} 
                                                js_matrix={js_matrix} 
                                                closeSearchPhone={closeSearchPhone}
                                                footerWidth={footerWidth}
                                            />} 
            />
            <Route path='/react/*' element={<React 
                                                boxProfileStyle={boxProfileStyle}
                                                scrollYAdd={scrollYAdd} 
                                                clickMenuHeader={clickMenuHeader} 
                                                react_matrix={react_matrix} 
                                                closeSearchPhone={closeSearchPhone}
                                                footerWidth={footerWidth}
                                            />} 
            />
            <Route path='/mysql/*' element={<Mysql  
                                                boxProfileStyle={boxProfileStyle}
                                                scrollYAdd={scrollYAdd} 
                                                clickMenuHeader={clickMenuHeader} 
                                                sql_list={sql_list} 
                                                closeSearchPhone={closeSearchPhone}
                                                footerWidth={footerWidth}
                                            />} 
            />
            <Route path='/python/*' element={<Python
                                                boxProfileStyle={boxProfileStyle}
                                                scrollY_to_0={scrollY_to_0} 
                                                clickMenuHeader={clickMenuHeader} 
                                                python_list={python_list} 
                                                closeSearchPhone={closeSearchPhone}
                                                footerWidth={footerWidth}
                                            />} 
            />
            <Route path='/django/*' element={<Django 
                                                boxProfileStyle={boxProfileStyle}
                                                scrollYAdd={scrollYAdd} 
                                                scrollY_to_0={scrollY_to_0} 
                                                clickMenuHeader={clickMenuHeader} 
                                                django_matrix={django_matrix} 
                                                closeSearchPhone={closeSearchPhone}
                                                footerWidth={footerWidth}
                                            />} 
            />
            <Route path='/django-rest-framework/*' element={<DjangoRestFramework 
                                                boxProfileStyle={boxProfileStyle}
                                                scrollY_to_0={scrollY_to_0} 
                                                scrollYAdd={scrollYAdd} 
                                                clickMenuHeader={clickMenuHeader} 
                                                django_rest_framework_matrix={django_rest_framework_matrix} 
                                                closeSearchPhone={closeSearchPhone}
                                                footerWidth={footerWidth}
                                            />} 
            />
            <Route path='/php/*' element={<Php 
                                                boxProfileStyle={boxProfileStyle}
                                                scrollY_to_0={scrollY_to_0} 
                                                clickMenuHeader={clickMenuHeader} 
                                                php_list={php_list}  
                                                closeSearchPhone={closeSearchPhone}
                                                footerWidth={footerWidth}
                                            />} 
            />
            <Route path='/laravel/*' element={<Laravel 
                                                boxProfileStyle={boxProfileStyle}
                                                scrollY_to_0={scrollY_to_0} 
                                                scrollYAdd={scrollYAdd} 
                                                clickMenuHeader={clickMenuHeader} 
                                                laravel_matrix={laravel_matrix} 
                                                closeSearchPhone={closeSearchPhone} 
                                                footerWidth={footerWidth}
                                            />} 
            />
            <Route path='/powerShell' element={<Cmd 
                                                boxProfileStyle={boxProfileStyle}
                                                scrollYAdd={scrollYAdd} 
                                                clickMenuHeader={clickMenuHeader} 
                                                cmd_list={cmd_list}  
                                                closeSearchPhone={closeSearchPhone}
                                                footerWidth={footerWidth}
                                            />} 
            />
            <Route path='/git' element={<Git 
                                                boxProfileStyle={boxProfileStyle}
                                                scrollYAdd={scrollYAdd} 
                                                clickMenuHeader={clickMenuHeader} 
                                                git_list={git_list} 
                                                closeSearchPhone={closeSearchPhone}
                                                footerWidth={footerWidth}
                                            />}
            />
            <Route path='/search' element={<Search
                                                boxProfileStyle={boxProfileStyle}
                                                searchValue={searchValue}
                                                setSearchValue={setSearchValue}
                                                handleInputChange={handleInputChange}
                                                handleSubmit={handleSubmit}
                                                Search={Search}
                                                searchAndRetrieve={searchAndRetrieve}
                                                scrollY_to_0={scrollY_to_0}
                                            />} 
            />
            <Route path='/paypal-payment' element={<PayPalPayment 
                                                scrollY_to_0={scrollY_to_0}
                                                boxProfileStyle={boxProfileStyle} 
                                            />} 
            />
            <Route path='/login' element={<Login 
                                                scrollY_to_0={scrollY_to_0}
                                                boxProfileStyle={boxProfileStyle} 
                                                url={url} 
                                            />} 
            />
            <Route path='/register' element={<CreateAccount 
                                                scrollY_to_0={scrollY_to_0}
                                                boxProfileStyle={boxProfileStyle} 
                                                url={url} 
                                            />} 
            />
            <Route path='/my-page' element={<MyPage 
                                                scrollY_to_0={scrollY_to_0}
                                                boxProfileStyle={boxProfileStyle} 
                                                url={url} 
                                            />} 
            />
            
            <Route path='/report-error' element={<ReportAnErrorUser  
                                                scrollY_to_0={scrollY_to_0}
                                                boxProfileStyle={boxProfileStyle} 
                                                url={url} 
                                            />} 
            />
            <Route path='/all-question' element={<AllQuestion  
                                                scrollY_to_0={scrollY_to_0}
                                                boxProfileStyle={boxProfileStyle} 
                                                url={url} 
                                            />} 
            />
            <Route path='/add-question' element={<AddQuestion  
                                                scrollY_to_0={scrollY_to_0}
                                                boxProfileStyle={boxProfileStyle} 
                                                url={url} 
                                            />} 
            />
            <Route path='/question/:id'  element={<QuestionDetail 
                                                scrollY_to_0={scrollY_to_0} 
                                                boxProfileStyle={boxProfileStyle} 
                                                url={url} 
                                            />} 
            />

        </Routes>
    </Router> 
    );
}


export default App;