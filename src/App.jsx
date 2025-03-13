import "./App.sass";
import { useEffect , useRef , useState} from 'react';
import { BrowserRouter as Router , Routes, Route} from "react-router-dom";
import { 
    Header , Home , Html , Css , Js , React , Mysql , Python , Django , DjangoRestFramework , Cmd , Git , Php , 
    Laravel , Login , Search , CreateAccount , PayPalPayment , MyPage , ReportAnErrorUser , AllQuestion , AddQuestion , 
    QuestionDetail ,
} from './components/path';
import {
    useCustomHtmlList , useCustomCssList , useCustomJsList , useCustomSqlList , useCustomPythonList ,  useCustomDjangoList ,useCustomDjangoRestList, useCustomPhpList , useCustomReactList , useCustomLaravelList , useCustomGitList , useCustomCmdList ,
    useCustomScrollToHash , useCustomResizeAside , 
} from "./custom/pathCustoms";



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
        />
        <Routes>
            <Route path='/'       element={<Home 
                                                closeSearchPhone={closeSearchPhone}  
                                            />} 
            />
            <Route path='/html/*' element={<Html 
                                                clickMenuHeader={clickMenuHeader} 
                                                html_list={html_list}
                                                closeSearchPhone={closeSearchPhone} 
                                            />}
            />
            <Route path='/css/*' element={<Css 
                                                clickMenuHeader={clickMenuHeader} 
                                                css_list={css_list} 
                                                closeSearchPhone={closeSearchPhone} 
                                            />} 
            />
            <Route path='/js/*' element={<Js 
                                                clickMenuHeader={clickMenuHeader} 
                                                js_matrix={js_matrix} 
                                                closeSearchPhone={closeSearchPhone}
                                            />} 
            />
            <Route path='/react/*' element={<React 
                                                clickMenuHeader={clickMenuHeader} 
                                                react_matrix={react_matrix} 
                                                closeSearchPhone={closeSearchPhone}
                                            />} 
            />
            <Route path='/mysql/*' element={<Mysql  
                                                clickMenuHeader={clickMenuHeader} 
                                                sql_list={sql_list} 
                                                closeSearchPhone={closeSearchPhone}
                                            />} 
            />
          <Route path='/python/*' element={<Python
                                                clickMenuHeader={clickMenuHeader} 
                                                python_list={python_list} 
                                                closeSearchPhone={closeSearchPhone}
                                            />} 
            />
            <Route path='/django/*' element={<Django 
                                                clickMenuHeader={clickMenuHeader} 
                                                django_matrix={django_matrix} 
                                                closeSearchPhone={closeSearchPhone}
                                            />} 
            />
            <Route path='/django-rest-framework/*' element={<DjangoRestFramework 
                                                 
                                                clickMenuHeader={clickMenuHeader} 
                                                django_rest_framework_matrix={django_rest_framework_matrix} 

                                                closeSearchPhone={closeSearchPhone}
                                            />} 
            />
            <Route path='/php/*' element={<Php 
                                                clickMenuHeader={clickMenuHeader} 
                                                php_list={php_list}  
                                                closeSearchPhone={closeSearchPhone}
                                            />} 
            />
            <Route path='/laravel/*' element={<Laravel 
                                                clickMenuHeader={clickMenuHeader} 
                                                laravel_matrix={laravel_matrix} 
                                                closeSearchPhone={closeSearchPhone} 
                                            />} 
            />
            <Route path='/powerShell' element={<Cmd 
                                                clickMenuHeader={clickMenuHeader} 
                                                cmd_list={cmd_list}  
                                                closeSearchPhone={closeSearchPhone}
                                            />} 
            />

            <Route path='/git' element={<Git 
                                                clickMenuHeader={clickMenuHeader} 
                                                git_list={git_list} 
                                                closeSearchPhone={closeSearchPhone}
                                            />}
            />
            <Route path='/search' element={<Search
                                                searchValue={searchValue}
                                                setSearchValue={setSearchValue}
                                                handleInputChange={handleInputChange}
                                                handleSubmit={handleSubmit}
                                                Search={Search}
                                                searchAndRetrieve={searchAndRetrieve}
                                            />} 
            />
            <Route path='/paypal-payment' element={<PayPalPayment  />} />
            <Route path='/login' element={<Login  url={url} />}  />
            <Route path='/register' element={<CreateAccount url={url}  />} />
            <Route path='/my-page' element={<MyPage url={url}  />} />
            <Route path='/report-error' element={<ReportAnErrorUser   url={url} />} />
            <Route path='/all-question' element={<AllQuestion   url={url} />}         />
            <Route path='/add-question' element={<AddQuestion      url={url} />}      />
            <Route path='/question/:id'  element={<QuestionDetail  url={url}     />}  /> 

        </Routes>
    </Router> 
    );
}


export default App;