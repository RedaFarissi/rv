import { useEffect } from "react";
import { Routes, Route , Link } from "react-router-dom";
import { 
    Introduction, Editor, Attributes, Heading, Paragraph, Break, Horizontal, Superscript, Subscript, Underline, Italic, 
    Abbreviation, Blockquote, Header, Quotation, Mark, Deleted, Preformatted, Small, Anchor, Image, Division, Span, 
    Audio, Video, Details, BiDirectionalIsolation, BiDirectionalOverride, ListsOrdered, ListsUnordered, ListsDefinitionul, 
    Table, Input, Select, Form, Textarea, Button, Fieldset, Dialog, Iframe, Meter, Style, HtmlLink, Meta
} from './pathHtml.js';
import html_logo from "../../assests/images/logo/html_logo.png";

export default function Html(props){  
    useEffect(()=>{
        props.scrollY_to_0();
    },[props]);
    
    const arrays = props.html_list.map(e => <li className="list-group-item">
        <Link  to={`/html/${e.toLowerCase().replace(/\s/g, '-')}`}  onClick={props.scrollY_to_0} >
            <i className="fa-solid fa-caret-right me-1"></i> HTML {e}
        </Link>
    </li>);

    return(    
    <main onClick={(event)=>{ 
            props.clickMenuHeader(event, false);
            props.closeSearchPhone(); 
        }}
    >
        <aside className="aside">
            <ul className="list-group m-0">
                {arrays}
            </ul>
        </aside>
        <section className="section-conetent">
            <Routes>
                <Route path='/' element={<Introduction html_logo={html_logo} modeColorCode={props.modeColorCode}/>} />
                <Route path='introduction' element={<Introduction html_logo={html_logo} modeColorCode={props.modeColorCode} />} /> 
                <Route path='editor' element={<Editor html_logo={html_logo} />} /> 
                <Route path='attributes' element={<Attributes html_logo={html_logo} />} /> 
                <Route path='heading-(h1)' element={<Heading html_logo={html_logo} />} /> 
                <Route path='paragraph-(p)' element={<Paragraph html_logo={html_logo} />} /> 
                <Route path='break-(br)' element={<Break html_logo={html_logo} />} /> 
                <Route path='horizontal-(hr)' element={<Horizontal html_logo={html_logo} />} /> 
                <Route path='superscript-(sup)' element={<Superscript html_logo={html_logo} />} /> 
                <Route path='subscript-(sub)' element={<Subscript html_logo={html_logo} />} /> 
                <Route path='underline-(u)' element={<Underline html_logo={html_logo} />} /> 
                <Route path='italic-(i)' element={<Italic html_logo={html_logo} />} /> 
                <Route path='blockquote' element={<Blockquote html_logo={html_logo} />} /> 
                <Route path='abbreviation-(abbr)' element={<Abbreviation html_logo={html_logo} />} /> 
                <Route path='quotation-(q)' element={<Quotation html_logo={html_logo} />} /> 
                <Route path='mark' element={<Mark html_logo={html_logo} />} /> 
                <Route path='deleted-(del)' element={<Deleted html_logo={html_logo} />} /> 
                <Route path='preformatted-(pre)' element={<Preformatted html_logo={html_logo} />} /> 
                <Route path='small' element={<Small html_logo={html_logo} />} /> 
                <Route path='anchor-(a)' element={<Anchor html_logo={html_logo} />} /> 
                <Route path='image-(img)' element={<Image html_logo={html_logo} />} /> 
                <Route path='division-(div)' element={<Division html_logo={html_logo} />} /> 
                <Route path='span' element={<Span html_logo={html_logo} />} /> 
                <Route path='audio' element={<Audio html_logo={html_logo} />} /> 
                <Route path='video' element={<Video html_logo={html_logo} />} /> 
                <Route path='details' element={<Details html_logo={html_logo} />} /> 
                <Route path='bi-directional-isolation-(bdi)' element={<BiDirectionalIsolation html_logo={html_logo} />} /> 
                <Route path='bi-directional-override-(bdo)' element={<BiDirectionalOverride html_logo={html_logo} />} /> 
                <Route path='lists-ordered-(ol)' element={<ListsOrdered html_logo={html_logo} />} /> 
                <Route path='lists-unordered-(ul)' element={<ListsUnordered html_logo={html_logo} />} /> 
                <Route path='lists-definitionul-(dl)' element={<ListsDefinitionul html_logo={html_logo} />} /> 
                <Route path='table' element={<Table html_logo={html_logo} />} /> 
                <Route path='input' element={<Input html_logo={html_logo} />} /> 
                <Route path='select' element={<Select html_logo={html_logo} />} /> 
                <Route path='textarea' element={<Textarea html_logo={html_logo} />} /> 
                <Route path='button' element={<Button html_logo={html_logo} />} /> 
                <Route path='form' element={<Form html_logo={html_logo} />} /> 
                <Route path='header' element={<Header html_logo={html_logo} />} /> 
                <Route path='fieldset' element={<Fieldset html_logo={html_logo} />} /> 
                <Route path='dialog' element={<Dialog html_logo={html_logo} />} /> 
                <Route path='iframe' element={<Iframe html_logo={html_logo} />} /> 
                <Route path='meter' element={<Meter html_logo={html_logo} />} /> 
                <Route path='style' element={<Style html_logo={html_logo} />} /> 
                <Route path='style' element={<Style html_logo={html_logo} />} /> 
                <Route path='link' element={<HtmlLink html_logo={html_logo} />} /> 
                <Route path='meta' element={<Meta html_logo={html_logo} />} /> 
            </Routes>
        </section>
    </main>
    )
}