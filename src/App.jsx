import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import { Header , Home , Html , Css, Js , React , PowerShell , Git} from './components/path';
import "./App.sass"

function App() {
  
  const html_list = [
    "Introduction","Editor","Attributes","Heading (h1)","Paragraph (p)" ,"Break (br)","Horizontal (hr)","Superscript (sup)","Subscript (sub)","Underline (u)","Italic (i)","Abbreviation (abbr)","Blockquote","Quotation (q)","Mark","Deleted (del)","Preformatted (pre)","Small","Anchor (a)","Image (img)","Division (div)","Span","Audio","Video","Details","Bi-Directional Isolation (bdi)","Bi-Directional Override (bdo)","Lists Ordered (ol)","Lists Unordered (ul)","Lists Definitionul (dl)","Table","Input","Select","Textarea","From","Button", "Header","Fieldset","Dialog","Iframe","Meter","Style","Link","Meta"
  ]
  

  return (
    <Router>
        <Header />
        <Routes>
            <Route path='/' element={<Home />} /> 
            <Route path='/html/*' element={<Html html_list={html_list} />} /> 
            <Route path='/css/*' element={<Css />} /> 
            <Route path='/js/*' element={<Js />} /> 
            <Route path='/react/*' element={<React />} /> 
            <Route path='/power-shell' element={<PowerShell />} /> 
            <Route path='/git' element={<Git />} /> 
        </Routes>  
    </Router> 
  );
}

export default App;