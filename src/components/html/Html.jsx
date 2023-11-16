import { Routes, Route , Link } from "react-router-dom";
import { 
    Introduction , Editor , Attributes , Heading , Paragraph , Break , Horizontal ,
    Superscript ,  Subscript , Underline , Italic , Abbreviation , Blockquote ,  
    Quotation , Mark , Deleted , Preformatted , Small

} from './pathHtml.js';

export default function Html(){
    const html_list = [
        "Introduction","Editor","Attributes","Heading (h1)","Paragraph (p)" ,"Break (br)",
        "Horizontal (hr)","Superscript (sup)","Subscript (sub)","Underline (u)","Italic (i)",
        "Abbreviation (abbr)","Blockquote","Quotation (q)","Mark","Deleted (del)",
        "Preformatted (pre)","Small","Anchor (a)","Image (img)","Division (div)","Span (span)","Audio (audio)","Video (video)","Details (details)","Isolation (bdi)","Override (bdo)","Lists Ordered (ol)","Lists Unordered (ul)","Lists Definitionul (dl)","Table (table)","From (form)","Button (button)","Input (input)","Textarea (textarea)","Fieldset (fieldset)","Dialog (dialog)","Iframe (iframe)","Meter (meter)","Style (style)","Link (link)","Meta (meta)"]
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
    
        <section>
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
            </Routes>
        </section>
    </main>
    )
}