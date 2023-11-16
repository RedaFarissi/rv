import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import { Header , Home , Html , Css, Js , React} from './components/path';
import "./App.sass"

function App() {
  return (
    <Router>
        <Header />
        <Routes>
            <Route path='/' element={<Home />} /> 
            <Route path='/html/*' element={<Html />} /> 
            <Route path='/css/*' element={<Css />} /> 
            <Route path='/js/*' element={<Js />} /> 
            <Route path='/react/*' element={<React />} /> 
        </Routes>  
    </Router> 
  );
}

export default App;
