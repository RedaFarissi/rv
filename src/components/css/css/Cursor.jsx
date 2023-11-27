import { CodeHighlighter ,  Result} from "../../path";
import images from "../imagesCss";

export default function Cursor(props){
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-css-color"> CSS Cursor </h1>
    <article></article>

<div class="style_divv mt-5">
    تحدد الخاصية <b>cursor</b> طريقة عرض  مؤشر الماوس عند تحريكه فوق عنصر .<br/>
</div>
<div class="sum_exemple_style">
<div class="mital"> متال : </div>
<ul><li>متال توضيحي لجميع قيم الخاصية <b>cursor</b></li></ul>
<h4 >1. كود HTML</h4>
<div class="style-result" style={{border: "9px solid green"}}>
  &nbsp;1.  <span style={{color: "blue"}}><strong>&lt;h1&gt;</strong></span> cursor Property<span style={{color: "blue"}}><strong>&lt;/h1&gt;</strong></span><br/>
  &nbsp;2.  <span style={{color: "blue"}}><strong>&lt;p&gt;</strong></span> over the words to change the mouse cursor. <span style={{color: "blue"}}><strong>&lt;/p&gt;</strong></span><br/>
  &nbsp;3.  <span style={{color: "blue"}}><strong>&lt;p <small style={{color:"rgb(0,125,255)"}}>class</small><small style={{color:"darkorange"}}>="alias"</small>&gt;</strong></span>alias<span style={{color: "blue"}}><strong>&lt;/p&gt;</strong></span><br/>
  &nbsp;4.  <span style={{color: "blue"}}><strong>&lt;p <small style={{color:"rgb(0,125,255)"}}>class</small><small style={{color:"darkorange"}}>="all-scroll"</small>&gt;</strong></span>all-scroll<span style={{color: "blue"}}><strong>&lt;/p&gt;</strong></span><br/>
  &nbsp;5.  <span style={{color: "blue"}}><strong>&lt;p <small style={{color:"rgb(0,125,255)"}}>class</small><small style={{color:"darkorange"}}>="auto"</small>&gt;</strong></span>auto<span style={{color: "blue"}}><strong>&lt;/p&gt;</strong></span><br/>
  &nbsp;6.  <span style={{color: "blue"}}><strong>&lt;p <small style={{color:"rgb(0,125,255)"}}>class</small><small style={{color:"darkorange"}}>="cell"</small>&gt;</strong></span>cell<span style={{color: "blue"}}><strong>&lt;/p&gt;</strong></span><br/>
  &nbsp;7.  <span style={{color: "blue"}}><strong>&lt;p <small style={{color:"rgb(0,125,255)"}}>class</small><small style={{color:"darkorange"}}>="context-menu"</small>&gt;</strong></span>context-menu<span style={{color: "blue"}}><strong>&lt;/p&gt;</strong></span><br/>
  &nbsp;8.  <span style={{color: "blue"}}><strong>&lt;p <small style={{color:"rgb(0,125,255)"}}>class</small><small style={{color:"darkorange"}}>="col-resize"</small>&gt;</strong></span>col-resize<span style={{color: "blue"}}><strong>&lt;/p&gt;</strong></span><br/>
  &nbsp;9.  <span style={{color: "blue"}}><strong>&lt;p <small style={{color:"rgb(0,125,255)"}}>class</small><small style={{color:"darkorange"}}>="copy"</small>&gt;</strong></span>copy<span style={{color: "blue"}}><strong>&lt;/p&gt;</strong></span><br/>
        10. <span style={{color: "blue"}}><strong>&lt;p <small style={{color:"rgb(0,125,255)"}}>class</small><small style={{color:"darkorange"}}>="crosshair"</small>&gt;</strong></span>crosshair<span style={{color: "blue"}}><strong>&lt;/p&gt;</strong></span><br/>
        11. <span style={{color: "blue"}}><strong>&lt;p <small style={{color:"rgb(0,125,255)"}}>class</small><small style={{color:"darkorange"}}>="default"</small>&gt;</strong></span>default<span style={{color: "blue"}}><strong>&lt;/p&gt;</strong></span><br/>
        12. <span style={{color: "blue"}}><strong>&lt;p <small style={{color:"rgb(0,125,255)"}}>class</small><small style={{color:"darkorange"}}>="e-resize"</small>&gt;</strong></span>e-resize<span style={{color: "blue"}}><strong>&lt;/p&gt;</strong></span><br/>
        13. <span style={{color: "blue"}}><strong>&lt;p <small style={{color:"rgb(0,125,255)"}}>class</small><small style={{color:"darkorange"}}>="ew-resize"</small>&gt;</strong></span>-resize<span style={{color: "blue"}}><strong>&lt;/p&gt;</strong></span><br/>
        14. <span style={{color: "blue"}}><strong>&lt;p <small style={{color:"rgb(0,125,255)"}}>class</small><small style={{color:"darkorange"}}>="grab"</small>&gt;</strong></span>grab<span style={{color: "blue"}}><strong>&lt;/p&gt;</strong></span><br/>
        15. <span style={{color: "blue"}}><strong>&lt;p <small style={{color:"rgb(0,125,255)"}}>class</small><small style={{color:"darkorange"}}>="grabbing"</small>&gt;</strong></span>grabbing<span style={{color: "blue"}}><strong>&lt;/p&gt;</strong></span><br/>
        16. <span style={{color: "blue"}}><strong>&lt;p <small style={{color:"rgb(0,125,255)"}}>class</small><small style={{color:"darkorange"}}>="help"</small>&gt;</strong></span>help<span style={{color: "blue"}}><strong>&lt;/p&gt;</strong></span><br/>
        17. <span style={{color: "blue"}}><strong>&lt;p <small style={{color:"rgb(0,125,255)"}}>class</small><small style={{color:"darkorange"}}>="move"</small>&gt;</strong></span>move<span style={{color: "blue"}}><strong>&lt;/p&gt;</strong></span><br/>
        18. <span style={{color: "blue"}}><strong>&lt;p <small style={{color:"rgb(0,125,255)"}}>class</small><small style={{color:"darkorange"}}>="n-resize"</small>&gt;</strong></span>n-resize<span style={{color: "blue"}}><strong>&lt;/p&gt;</strong></span><br/>
        19. <span style={{color: "blue"}}><strong>&lt;p <small style={{color:"rgb(0,125,255)"}}>class</small><small style={{color:"darkorange"}}>="ne-resize"</small>&gt;</strong></span>ne-resize<span style={{color: "blue"}}><strong>&lt;/p&gt;</strong></span><br/>
        20. <span style={{color: "blue"}}><strong>&lt;p <small style={{color:"rgb(0,125,255)"}}>class</small><small style={{color:"darkorange"}}>="nesw-resize"</small>&gt;</strong></span>nesw-resize<span style={{color: "blue"}}><strong>&lt;/p&gt;</strong></span><br/>
        21. <span style={{color: "blue"}}><strong>&lt;p <small style={{color:"rgb(0,125,255)"}}>class</small><small style={{color:"darkorange"}}>="ns-resize"</small>&gt;</strong></span>ns-resize<span style={{color: "blue"}}><strong>&lt;/p&gt;</strong></span><br/>
        22. <span style={{color: "blue"}}><strong>&lt;p <small style={{color:"rgb(0,125,255)"}}>class</small><small style={{color:"darkorange"}}>="nw-resize"</small>&gt;</strong></span>nw-resize<span style={{color: "blue"}}><strong>&lt;/p&gt;</strong></span><br/>
        23. <span style={{color: "blue"}}><strong>&lt;p <small style={{color:"rgb(0,125,255)"}}>class</small><small style={{color:"darkorange"}}>="nwse-resize"</small>&gt;</strong></span>nwse-resize<span style={{color: "blue"}}><strong>&lt;/p&gt;</strong></span><br/>
        24. <span style={{color: "blue"}}><strong>&lt;p <small style={{color:"rgb(0,125,255)"}}>class</small><small style={{color:"darkorange"}}>="no-drop"</small>&gt;</strong></span>no-drop<span style={{color: "blue"}}><strong>&lt;/p&gt;</strong></span><br/>
        25. <span style={{color: "blue"}}><strong>&lt;p <small style={{color:"rgb(0,125,255)"}}>class</small><small style={{color:"darkorange"}}>="none"</small>&gt;</strong></span>none<span style={{color: "blue"}}><strong>&lt;/p&gt;</strong></span><br/>
        26. <span style={{color: "blue"}}><strong>&lt;p <small style={{color:"rgb(0,125,255)"}}>class</small><small style={{color:"darkorange"}}>="not-allowed"</small>&gt;</strong></span>not-allowed<span style={{color: "blue"}}><strong>&lt;/p&gt;</strong></span><br/>
        27. <span style={{color: "blue"}}><strong>&lt;p <small style={{color:"rgb(0,125,255)"}}>class</small><small style={{color:"darkorange"}}>="pointer"</small>&gt;</strong></span>pointer<span style={{color: "blue"}}><strong>&lt;/p&gt;</strong></span><br/>
        28. <span style={{color: "blue"}}><strong>&lt;p <small style={{color:"rgb(0,125,255)"}}>class</small><small style={{color:"darkorange"}}>="progress"</small>&gt;</strong></span>progress<span style={{color: "blue"}}><strong>&lt;/p&gt;</strong></span><br/>
        29. <span style={{color: "blue"}}><strong>&lt;p <small style={{color:"rgb(0,125,255)"}}>class</small><small style={{color:"darkorange"}}>="row-resize"</small>&gt;</strong></span>row-resize<span style={{color: "blue"}}><strong>&lt;/p&gt;</strong></span><br/>
        30. <span style={{color: "blue"}}><strong>&lt;p <small style={{color:"rgb(0,125,255)"}}>class</small><small style={{color:"darkorange"}}>="s-resize"</small>&gt;</strong></span>s-resize<span style={{color: "blue"}}><strong>&lt;/p&gt;</strong></span><br/>
        31. <span style={{color: "blue"}}><strong>&lt;p <small style={{color:"rgb(0,125,255)"}}>class</small><small style={{color:"darkorange"}}>="se-resize"</small>&gt;</strong></span>se-resize<span style={{color: "blue"}}><strong>&lt;/p&gt;</strong></span><br/>
        32. <span style={{color: "blue"}}><strong>&lt;p <small style={{color:"rgb(0,125,255)"}}>class</small><small style={{color:"darkorange"}}>="sw-resize"</small>&gt;</strong></span>sw-resize<span style={{color: "blue"}}><strong>&lt;/p&gt;</strong></span><br/>
        33. <span style={{color: "blue"}}><strong>&lt;p <small style={{color:"rgb(0,125,255)"}}>class</small><small style={{color:"darkorange"}}>="text"</small>&gt;</strong></span>text<span style={{color: "blue"}}><strong>&lt;/p&gt;</strong></span><br/>
        32. <span style={{color: "blue"}}><strong>&lt;p <small style={{color:"rgb(0,125,255)"}}>class</small><small style={{color:"darkorange"}}>="url"</small>&gt;</strong></span>url<span style={{color: "blue"}}><strong>&lt;/p&gt;</strong></span><br/>
        34. <span style={{color: "blue"}}><strong>&lt;p <small style={{color:"rgb(0,125,255)"}}>class</small><small style={{color:"darkorange"}}>="w-resize"</small>&gt;</strong></span>w-resize<span style={{color: "blue"}}><strong>&lt;/p&gt;</strong></span><br/>
        35. <span style={{color: "blue"}}><strong>&lt;p <small style={{color:"rgb(0,125,255)"}}>class</small><small style={{color:"darkorange"}}>="wait"</small>&gt;</strong></span>wait<span style={{color: "blue"}}><strong>&lt;/p&gt;</strong></span><br/>
        36. <span style={{color: "blue"}}><strong>&lt;p <small style={{color:"rgb(0,125,255)"}}>class</small><small style={{color:"darkorange"}}>="zoom-in"</small>&gt;</strong></span>zoom-in<span style={{color: "blue"}}><strong>&lt;/p&gt;</strong></span><br/>
        37. <span style={{color: "blue"}}><strong>&lt;p <small style={{color:"rgb(0,125,255)"}}>class</small><small style={{color:"darkorange"}}>="zoom-out"</small>&gt;</strong></span>zoom-out<span style={{color: "blue"}}><strong>&lt;/p&gt;</strong></span><br/>
</div>
<h4>2. كود CSS </h4>
<div class="style-result">
   &nbsp;1. <strong style={{color:"rgb(0,125,255)"}}> .alias</strong> {"{"}cursor: alias;{"}"} <br/>
   &nbsp;2. <strong style={{color:"rgb(0,125,255)"}}> .all-scroll</strong> {"{"}cursor: all-scroll;{"}"} <br/>
   &nbsp;3. <strong style={{color:"rgb(0,125,255)"}}> .auto</strong> {"{"}cursor: auto;{"}"} <br/>
   &nbsp;4. <strong style={{color:"rgb(0,125,255)"}}> .cell</strong> {"{"}cursor: cell;{"}"} <br/>
   &nbsp;5. <strong style={{color:"rgb(0,125,255)"}}> .context-menu</strong> {"{"}cursor: context-menu;{"}"} <br/>
   &nbsp;6. <strong style={{color:"rgb(0,125,255)"}}> .col-resize</strong> {"{"}cursor: col-resize;{"}"} <br/>
   &nbsp;7. <strong style={{color:"rgb(0,125,255)"}}> .copy</strong> {"{"}cursor: copy;{"}"} <br/>
   &nbsp;8. <strong style={{color:"rgb(0,125,255)"}}> .crosshair</strong> {"{"}cursor: crosshair;{"}"} <br/>
   &nbsp;9. <strong style={{color:"rgb(0,125,255)"}}> .default</strong> {"{"}cursor: default;{"}"} <br/>
        10. <strong style={{color:"rgb(0,125,255)"}}> .e-resize</strong> {"{"}cursor: e-resize;{"}"} <br/>
        11. <strong style={{color:"rgb(0,125,255)"}}> .ew-resize</strong> {"{"}cursor: ew-resize;{"}"} <br/>
        12. <strong style={{color:"rgb(0,125,255)"}}> .grab</strong> {"{"}cursor: -webkit-grab; cursor: grab;{"}"} <br/>
        13. <strong style={{color:"rgb(0,125,255)"}}> .grabbing</strong> {"{"}cursor: -webkit-grabbing; cursor: grabbing;{"}"} <br/>
        14. <strong style={{color:"rgb(0,125,255)"}}> .help</strong> {"{"}cursor: help;{"}"} <br/>
        15. <strong style={{color:"rgb(0,125,255)"}}> .move</strong> {"{"}cursor: move;{"}"} <br/>
        16. <strong style={{color:"rgb(0,125,255)"}}> .n-resize</strong> {"{"}cursor: n-resize;{"}"} <br/>
        17. <strong style={{color:"rgb(0,125,255)"}}> .ne-resize</strong> {"{"}cursor: ne-resize;{"}"} <br/>
        18. <strong style={{color:"rgb(0,125,255)"}}> .nesw-resize</strong> {"{"}cursor: nesw-resize;{"}"} <br/>
        19. <strong style={{color:"rgb(0,125,255)"}}> .ns-resize</strong> {"{"}cursor: ns-resize;{"}"} <br/>
        20. <strong style={{color:"rgb(0,125,255)"}}> .nw-resize</strong> {"{"}cursor: nw-resize;{"}"} <br/>
        21. <strong style={{color:"rgb(0,125,255)"}}> .nwse-resize</strong> {"{"}cursor: nwse-resize;{"}"} <br/>
        22. <strong style={{color:"rgb(0,125,255)"}}> .no-drop</strong> {"{"}cursor: no-drop;{"}"} <br/>
        23. <strong style={{color:"rgb(0,125,255)"}}> .none</strong> {"{"}cursor: none;{"}"} <br/>
        24. <strong style={{color:"rgb(0,125,255)"}}> .not-allowed</strong> {"{"}cursor: not-allowed;{"}"} <br/>
        25. <strong style={{color:"rgb(0,125,255)"}}> .pointer</strong> {"{"}cursor: pointer;{"}"} <br/>
        26. <strong style={{color:"rgb(0,125,255)"}}> .progress</strong> {"{"}cursor: progress;{"}"}<br/>
        27. <strong style={{color:"rgb(0,125,255)"}}> .row-resize</strong> {"{"}cursor: row-resize;{"}"}<br/>
        28. <strong style={{color:"rgb(0,125,255)"}}> .s-resize</strong> {"{"}cursor: s-resize;{"}"}<br/>
        29. <strong style={{color:"rgb(0,125,255)"}}> .se-resize</strong> {"{"}cursor: se-resize;{"}"}<br/>
        30. <strong style={{color:"rgb(0,125,255)"}}> .sw-resize</strong> {"{"}cursor: sw-resize;{"}"}<br/>
        31. <strong style={{color:"rgb(0,125,255)"}}> .text</strong> {"{"}cursor: text;{"}"}<br/>
        32. <strong style={{color:"rgb(0,125,255)"}}> .url</strong> {"{"}cursor: url(myBall.cur),auto;{"}"}<br/>
        33. <strong style={{color:"rgb(0,125,255)"}}> .w-resize</strong> {"{"}cursor: w-resize;{"}"}<br/>
        32. <strong style={{color:"rgb(0,125,255)"}}> .wait</strong> {"{"}cursor: wait;{"}"}<br/>
        34. <strong style={{color:"rgb(0,125,255)"}}> .zoom-in</strong> {"{"}cursor: zoom-in;{"}"}<br/>
        35. <strong style={{color:"rgb(0,125,255)"}}> .zoom-out</strong> {"{"}cursor: zoom-out;{"}"}<br/>
</div>
<ul><li> قم بتمرير الماوس فوق جميع نتائج لاتي هي ضمن تشغيل الكود للفهم بشكل أفضل  </li></ul>
<div class="style-result">
    <h2>The cursor Property</h2>
    <p>Mouse over the words to change the mouse cursor.</p>
    <p class="alias">alias</p><p class="all-scroll">all-scroll</p> <p class="auto">auto</p><p class="cell">cell</p><p class="context-menu">context-menu</p><p class="col-resize">col-resize</p><p class="copy">copy</p><p class="crosshair">crosshair</p><p class="default">default</p><p class="e-resize">e-resize</p><p class="ew-resize">ew-resize</p><p class="grab">grab</p><p class="grabbing">grabbing</p><p class="help">help</p><p class="move">move</p><p class="n-resize">n-resize</p><p class="ne-resize">ne-resize</p><p class="nesw-resize">nesw-resize</p><p class="ns-resize">ns-resize</p><p class="nw-resize">nw-resize</p><p class="nwse-resize">nwse-resize</p><p class="no-drop">no-drop</p><p class="none">none</p><p class="not-allowed">not-allowed</p><p class="pointer">pointer</p><p class="progress">progress</p><p class="row-resize">row-resize</p><p class="s-resize">s-resize</p><p class="se-resize">se-resize</p><p class="sw-resize">sw-resize</p><p class="text">text</p><p class="url">url</p><p class="w-resize">w-resize</p><p class="wait">wait</p><p class="zoom-in">zoom-in</p><p class="zoom-out">zoom-out</p>
</div>
</div>
</section>
    )
}