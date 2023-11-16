import { Routes, Route , Link } from "react-router-dom";
import { Introduction , Editor , Attributes} from './path.js';
import "./Html.sass"

export default function Html(){
    
    const html_list = ["Introduction","Editor","Attributes","Heading (h1)","Paragraph (p)","Break (br)","Horizontal (hr)","Superscript (sup)","Subscript (sub)","Underline (u)","Italic (i)","Abbreviation (abbr)","Blockquote","Quotation (q)","Mark (mark)","Deleted (del)","Preformatted (pre)","Small (small)","Anchor (a)","Image (img)","Division (div)","Span (span)","Audio (audio)","Video (video)","Details (details)","Isolation (bdi)","Override (bdo)","Lists Ordered (ol)","Lists Unordered (ul)","Lists Definitionul (dl)","Table (table)","From (form)","Button (button)","Input (input)","Textarea (textarea)","Fieldset (fieldset)","Dialog (dialog)","Iframe (iframe)","Meter (meter)","Style (style)","Link (link)","Meta (meta)"]
    const arrays = html_list.map(e => <li className="list-group-item">
        <Link to={`/html/${e.toLowerCase()}`}>HTML {e}</Link>
    </li>)
    return(    
    <main>
        <aside className="aside">
            <h5 className="">HTML Tutorials</h5>
            <ul className="list-group">
                {arrays}
            </ul>
        </aside>
    
        <section>
            <Routes>
                <Route path='/' element={<Introduction />} />
                <Route path='introduction' element={<Introduction />} /> 
                <Route path='editor' element={<Editor />} /> 
                <Route path='attributes' element={<Attributes />} /> 
            </Routes>
        </section>
    </main>
    )
}