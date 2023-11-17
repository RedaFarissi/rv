import { Routes, Route , Link } from "react-router-dom";
import { 
    Introduction , Editor , Attributes , Heading , Paragraph , Break , Horizontal ,
    Superscript ,  Subscript , Underline , Italic , Abbreviation , Blockquote ,  
    Quotation , Mark , Deleted , Preformatted , Small , Anchor , Image , Division , 
    Span , Audio , Video , Details , BiDirectionalIsolation , BiDirectionalOverride ,
    ListsOrdered , ListsUnordered , ListsDefinitionul , Table , Input , From , 
    Textarea , Button , Fieldset , Dialog , 
} from './pathHtml.js';

export default function Html(){
    const html_list = [
        "Introduction","Editor","Attributes","Heading (h1)","Paragraph (p)" ,"Break (br)","Horizontal (hr)","Superscript (sup)","Subscript (sub)","Underline (u)","Italic (i)","Abbreviation (abbr)","Blockquote","Quotation (q)","Mark","Deleted (del)","Preformatted (pre)","Small","Anchor (a)","Image (img)","Division (div)","Span","Audio","Video","Details","Bi-Directional Isolation (bdi)","Bi-Directional Override (bdo)","Lists Ordered (ol)","Lists Unordered (ul)","Lists Definitionul (dl)","Table","Input","Textarea","From","Button","Fieldset","Dialog",
        "Iframe","Meter","Style","Link","Meta"
    ]
    const arrays = html_list.map(e => <li className="list-group-item">
        <Link to={`/html/${e.toLowerCase().replace(/\s/g, '-')}`}>HTML {e}</Link>
    </li>)
    return(    
    <main>
        <aside className="aside">
            <h5 className="ms-2 mt-3">HTML Tutorials</h5>
            <ul className="list-group m-0">
                {arrays}
            </ul>
        </aside>
            <Routes>
                <Route path='/' element={<Introduction />} />
                <Route path='introduction' element={<Introduction />} /> 
                <Route path='editor' element={<Editor />} /> 
                <Route path='attributes' element={<Attributes />} /> 
                <Route path='heading-(h1)' element={<Heading />} /> 
                <Route path='paragraph-(p)' element={<Paragraph />} /> 
                <Route path='break-(br)' element={<Break />} /> 
                <Route path='horizontal-(hr)' element={<Horizontal />} /> 
                <Route path='superscript-(sup)' element={<Superscript />} /> 
                <Route path='subscript-(sub)' element={<Subscript />} /> 
                <Route path='underline-(u)' element={<Underline />} /> 
                <Route path='italic-(i)' element={<Italic />} /> 
                <Route path='blockquote' element={<Blockquote />} /> 
                <Route path='abbreviation-(abbr)' element={<Abbreviation />} /> 
                <Route path='quotation-(q)' element={<Quotation />} /> 
                <Route path='mark' element={<Mark />} /> 
                <Route path='deleted-(del)' element={<Deleted />} /> 
                <Route path='preformatted-(pre)' element={<Preformatted />} /> 
                <Route path='small' element={<Small />} /> 
                <Route path='anchor-(a)' element={<Anchor />} /> 
                <Route path='image-(img)' element={<Image />} /> 
                <Route path='division-(div)' element={<Division />} /> 
                <Route path='span' element={<Span />} /> 
                <Route path='audio' element={<Audio />} /> 
                <Route path='video' element={<Video />} /> 
                <Route path='details' element={<Details />} /> 
                <Route path='bi-directional-isolation-(bdi)' element={<BiDirectionalIsolation />} /> 
                <Route path='bi-directional-override-(bdo)' element={<BiDirectionalOverride />} /> 
                <Route path='lists-ordered-(ol)' element={<ListsOrdered />} /> 
                <Route path='lists-unordered-(ul)' element={<ListsUnordered />} /> 
                <Route path='lists-definitionul-(dl)' element={<ListsDefinitionul />} /> 
                <Route path='table' element={<Table />} /> 
                <Route path='input' element={<Input />} /> 
                <Route path='textarea' element={<Textarea />} /> 
                <Route path='button' element={<Button />} /> 
                <Route path='from' element={<From />} /> 
                <Route path='fieldset' element={<Fieldset />} /> 
                <Route path='dialog' element={<Dialog />} /> 
            </Routes>
    </main>
    )
}