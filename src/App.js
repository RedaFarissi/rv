import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import { Header , Home , Html} from './components/path';
import "./App.sass"

function App() {
  return (
    <Router>
        <Header />
        <Routes>
            <Route path='/' element={<Home />} /> 
            <Route path='/html' element={<Html />} /> 
        </Routes>  
    </Router> 
  );
}

export default App;
