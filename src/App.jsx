import "./App.sass";
import { BrowserRouter as Router , Routes, Route} from "react-router-dom";
import { 
    Header , Home , Html , Css , Js , React , Mysql , Python , Django , DjangoRestFramework , Cmd , Git , Php , 
    Laravel , Login , Search , CreateAccount , PayPalPayment , MyPage , ReportAnErrorUser , AllQuestion , 
    AddQuestion , QuestionDetail , 
} from './components/path';
import {
    useCustomHtmlList , useCustomCssList , useCustomJsList , useCustomSqlList , useCustomPythonList ,  
    useCustomDjangoList ,useCustomDjangoRestList, useCustomPhpList , useCustomReactList , useCustomLaravelList , 
    useCustomGitList , useCustomCmdList , useCustomScrollToHash , useCustomResizeAside , useCustomClickMenuHeader 
} from "./custom/pathCustoms";



function App() {
    const url =  "http://localhost:8000" ;

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
   
    
    return (
    <Router>
        <Header  clickMenuHeader={useCustomClickMenuHeader}  />
        <Routes>
            <Route path='/'       element={<Home />} />
            <Route path='/html/*' element={<Html  html_list={html_list}  clickMenuHeader={useCustomClickMenuHeader}/>}/>
            <Route path='/css/*' element={<Css    css_list={css_list}  clickMenuHeader={useCustomClickMenuHeader}   />}  />
            <Route path='/js/*' element={<Js  js_matrix={js_matrix}  clickMenuHeader={useCustomClickMenuHeader} />}  />
            <Route path='/react/*' element={<React  react_matrix={react_matrix}  clickMenuHeader={useCustomClickMenuHeader} />}  />
            <Route path='/mysql/*' element={<Mysql  sql_list={sql_list}  clickMenuHeader={useCustomClickMenuHeader}  />}  />
            <Route path='/python/*' element={<Python   python_list={python_list}  clickMenuHeader={useCustomClickMenuHeader} />}  />
            <Route path='/django/*' element={<Django  django_matrix={django_matrix}  clickMenuHeader={useCustomClickMenuHeader} />}/>
            <Route path='/django-rest-framework/*' element={<DjangoRestFramework django_rest_framework_matrix={django_rest_framework_matrix}  clickMenuHeader={useCustomClickMenuHeader} />} />
            <Route path='/php/*' element={<Php   php_list={php_list}  clickMenuHeader={useCustomClickMenuHeader}  />}  />
            <Route path='/laravel/*' element={<Laravel  laravel_matrix={laravel_matrix}  clickMenuHeader={useCustomClickMenuHeader} />} />
            <Route path='/powerShell' element={<Cmd  cmd_list={cmd_list}  clickMenuHeader={useCustomClickMenuHeader} />} />
            <Route path='/git' element={<Git  git_list={git_list}  clickMenuHeader={useCustomClickMenuHeader}  />} />
            <Route path='/paypal-payment' element={<PayPalPayment  />} />
            <Route path='/login' element={<Login  url={url} />}  />
            <Route path='/register' element={<CreateAccount url={url}  />} />
            <Route path='/my-page' element={<MyPage url={url}  />} />
            <Route path='/report-error' element={<ReportAnErrorUser   url={url} />} />
            <Route path='/all-question' element={<AllQuestion   url={url} />}         />
            <Route path='/add-question' element={<AddQuestion      url={url} />}      />
            <Route path='/question/:id'  element={<QuestionDetail  url={url}     />}  />  
            <Route path='/search' element={<Search />}  /> 
        </Routes>
    </Router> 
    );
}


export default App;