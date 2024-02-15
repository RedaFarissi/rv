import { CodeHighlighter ,  Result} from "../../path";
import React, { useState } from 'react';
import images from "../imagesCss";
import "./Cursor.css";

export default function Cursor(props){

    const copyClassName = (className) => {
        const tempTextarea = document.createElement('textarea');
        tempTextarea.value = className;
        document.body.appendChild(tempTextarea);
        tempTextarea.select();
        document.execCommand('copy');
        document.body.removeChild(tempTextarea);
        setCopiedClassName(className);
    };

    const codeExemple1= { 
    head:`  
    <style>
        p{ padding: 20px; border: 2px solid black; margin: 9px;}
        .alias {cursor: alias; } 
        .all-scroll {cursor: all-scroll; } 
        .auto {cursor: auto; } 
        .cell {cursor: cell; } 
        .context-menu {cursor: context-menu; } 
        .col-resize {cursor: col-resize; } 
        .copy {cursor: copy; } 
        .crosshair {cursor: crosshair; } 
        .default {cursor: default; } 
        .e-resize {cursor: e-resize; } 
        .ew-resize {cursor: ew-resize; } 
        .grab {cursor: -webkit-grab; cursor: grab; } 
        .grabbing {cursor: -webkit-grabbing; cursor: grabbing; } 
        .help {cursor: help; } 
        .move {cursor: move; } 
        .n-resize {cursor: n-resize; } 
        .ne-resize {cursor: ne-resize; } 
        .nesw-resize {cursor: nesw-resize; } 
        .ns-resize {cursor: ns-resize; } 
        .nw-resize {cursor: nw-resize; } 
        .nwse-resize {cursor: nwse-resize; } 
        .no-drop {cursor: no-drop; } 
        .none {cursor: none; } 
        .not-allowed {cursor: not-allowed; } 
        .pointer {cursor: pointer; } 
        .progress {cursor: progress; }
        .row-resize {cursor: row-resize; }
        .s-resize {cursor: s-resize; }
        .se-resize {cursor: se-resize; }
        .sw-resize {cursor: sw-resize; }
        .text {cursor: text; }
        .w-resize {cursor: w-resize; }
        .wait {cursor: wait; }
        .zoom-in {cursor: zoom-in; }
        .zoom-out {cursor: zoom-out; }    
    </style>`,
    code:`      <div style="display: flex; flex-wrap:wrap;">
            <p class="alias"> alias</p>
            <p class="all-scroll"> all-scroll</p>
            <p class="auto"> auto</p>
            <p class="cell"> cell</p>
            <p class="context-menu"> context-menu</p>
            <p class="col-resize"> col-resize</p>
            <p class="copy"> copy</p>
            <p class="crosshair"> crosshair</p>
            <p class="default"> default</p>
            <p class="e-resize"> e-resize</p>
            <p class="ew-resize"> ew-resize</p>
            <p class="grab"> grab</p>
            <p class="grabbing"> grabbing</p>
            <p class="help"> help</p>
            <p class="move"> move</p>
            <p class="n-resize"> n-resize</p>
            <p class="ne-resize"> ne-resize</p>
            <p class="nesw-resize"> nesw-resize</p>
            <p class="ns-resize"> ns-resize</p>
            <p class="nw-resize"> nw-resize</p>
            <p class="nwse-resize"> nwse-resize</p>
            <p class="no-drop"> no-drop</p>
            <p class="none"> none</p>
            <p class="not-allowed"> not-allowed</p>
            <p class="pointer"> pointer</p>
            <p class="progress"> progress</p>
            <p class="row-resize"> row-resize</p>
            <p class="s-resize"> s-resize</p>
            <p class="se-resize"> se-resize</p>
            <p class="sw-resize"> sw-resize</p>
            <p class="text"> text</p>
            <p class="w-resize"> w-resize</p>
            <p class="wait"> wait</p>
            <p class="zoom-in"> zoom-in</p>
            <p class="zoom-out"> zoom-out</p>
      </div>`
    }
    const [copiedClassName, setCopiedClassName] = useState('');
    return(
<section className="section-conetent">
    <h1 className="heading-style"> CSS Cursor </h1>
    <article className="mt-5">
        <p className="style_divv">
            تحدد الخاصية <b>cursor</b> طريقة عرض  مؤشر الماوس عند تحريكه فوق عنصر .<br/>
        </p>
        <div className="mital"> متال : </div>
        <ul><li>متال توضيحي لجميع قيم الخاصية <b>cursor</b></li></ul>
        <CodeHighlighter file_name="index.html"code={codeExemple1.code} head={codeExemple1.head} language="html" is_html={true} title="CSS Height" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Height' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <div style={{display: "flex" , flexWrap:"wrap"}}>
              <p onClick={() => copyClassName('alias')} className="alias"> alias</p>
              <p onClick={() => copyClassName('all-scroll')} className="all-scroll"> all-scroll</p>
              <p onClick={() => copyClassName('auto')} className="auto"> auto</p>
              <p onClick={() => copyClassName('cell')} className="cell"> cell</p>
              <p onClick={() => copyClassName('context-menu')} className="context-menu"> context-menu</p>
              <p onClick={() => copyClassName('col-resize')} className="col-resize"> col-resize</p>
              <p onClick={() => copyClassName('copy')} className="copy"> copy</p>
              <p onClick={() => copyClassName('crosshair')} className="crosshair"> crosshair</p>
              <p onClick={() => copyClassName('default')} className="default"> default</p>
              <p onClick={() => copyClassName('e-resize')} className="e-resize"> e-resize</p>
              <p onClick={() => copyClassName('ew-resize')} className="ew-resize"> ew-resize</p>
              <p onClick={() => copyClassName('grab')} className="grab"> grab</p>
              <p onClick={() => copyClassName('grabbing')} className="grabbing"> grabbing</p>
              <p onClick={() => copyClassName('help')} className="help"> help</p>
              <p onClick={() => copyClassName('move')} className="move"> move</p>
              <p onClick={() => copyClassName('n-resize')} className="n-resize"> n-resize</p>
              <p onClick={() => copyClassName('ne-resize')} className="ne-resize"> ne-resize</p>
              <p onClick={() => copyClassName('nesw-resize')} className="nesw-resize"> nesw-resize</p>
              <p onClick={() => copyClassName('ns-resize')} className="ns-resize"> ns-resize</p>
              <p onClick={() => copyClassName('nw-resize')} className="nw-resize"> nw-resize</p>
              <p onClick={() => copyClassName('nwse-resize')} className="nwse-resize"> nwse-resize</p>
              <p onClick={() => copyClassName('no-drop')} className="no-drop"> no-drop</p>
              <p onClick={() => copyClassName('none')} className="none"> none</p>
              <p onClick={() => copyClassName('not-allowed')} className="not-allowed"> not-allowed</p>
              <p onClick={() => copyClassName('pointer')} className="pointer"> pointer</p>
              <p onClick={() => copyClassName('progress')} className="progress"> progress</p>
              <p onClick={() => copyClassName('row-resize')} className="row-resize"> row-resize</p>
              <p onClick={() => copyClassName('s-resize')} className="s-resize"> s-resize</p>
              <p onClick={() => copyClassName('se-resize')} className="se-resize"> se-resize</p>
              <p onClick={() => copyClassName('sw-resize')} className="sw-resize"> sw-resize</p>
              <p onClick={() => copyClassName('text')} className="text"> text</p>
              <p onClick={() => copyClassName('w-resize')} className="w-resize"> w-resize</p>
              <p onClick={() => copyClassName('wait')} className="wait"> wait</p>
              <p onClick={() => copyClassName('zoom-in')} className="zoom-in"> zoom-in</p>
              <p onClick={() => copyClassName('zoom-out')} className="zoom-out"> zoom-out</p>
            </div>
        </Result>
    </article>
</section>
    )
}