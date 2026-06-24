import { Routes, Route} from "react-router-dom";
import { 
    Header , Home , Html , Css , Js , Typescript , React , Mysql , Python , Django , DjangoRestFramework , Cmd ,  
    Git , Php , Laravel , Login ,Search , CreateAccount , PayPalPayment , MyPage , ReportAnErrorUser , AllQuestion , 
    AddQuestion , QuestionDetail ,  
} from './components/path';
import {  useCustomScrollToHash , useCustomResizeAside , useCustomClickMenuHeader } from "./custom/pathCustoms";
import "./App.sass";

// import { BrowserRouter as Router } from "react-router-dom";
import { HashRouter as Router } from "react-router-dom";


function App() {
    const url =  "http://localhost:8000" ;  
    useCustomScrollToHash();   // Scroll to id when print url  direct in browser
    useCustomResizeAside();    // Handle Resize Aside 
    return (
    <Router>
        <Header  clickMenuHeader={useCustomClickMenuHeader}  />
        <Routes>
            <Route path='/'       element={<Home />} />
            <Route path='/html/*' element={<Html       clickMenuHeader={useCustomClickMenuHeader} />} />
            <Route path='/css/*' element={<Css         clickMenuHeader={useCustomClickMenuHeader} />} />
            <Route path='/js/*' element={<Js           clickMenuHeader={useCustomClickMenuHeader} />} />
            <Route path='/typescript/*' element={<Typescript clickMenuHeader={useCustomClickMenuHeader} />} />
            <Route path='/react/*' element={<React     clickMenuHeader={useCustomClickMenuHeader} />} />
            <Route path='/mysql/*' element={<Mysql     clickMenuHeader={useCustomClickMenuHeader} />} />
            <Route path='/python/*' element={<Python   clickMenuHeader={useCustomClickMenuHeader} />} />
            <Route path='/django/*' element={<Django   clickMenuHeader={useCustomClickMenuHeader} />} />
            <Route path='/django-rest-framework/*' element={<DjangoRestFramework  clickMenuHeader={useCustomClickMenuHeader} />} />
            <Route path='/php/*' element={<Php         clickMenuHeader={useCustomClickMenuHeader} />}  />
            <Route path='/laravel/*' element={<Laravel clickMenuHeader={useCustomClickMenuHeader} />} />
            <Route path='/powerShell' element={<Cmd    clickMenuHeader={useCustomClickMenuHeader} />} />
            <Route path='/git' element={<Git           clickMenuHeader={useCustomClickMenuHeader}  />} />
            <Route path='/paypal-me' element={<PayPalPayment  />} />
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