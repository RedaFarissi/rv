import { CodeHighlighter ,  Result} from "../../path";
import images from "../imagesCss";
import "./Grid.css"

export default function Grid(props){
    const codeExemple1= { 
    head:`  
    <style> 
        #Result{
            display: grid;
            grid-template-columns: auto auto auto;
        }
        #Result div{ 
            height: 70px; 
            width: 100%; 
            font-size: x-large; 
        }  
    </style>`,
    code:`      <div id="Result">
          <div style="background-color: red;"> 1 </div>
          <div style="background-color: green;"> 2 </div>
          <div style="background-color: yellow"> 3 </div>
          <div style="background-color: crimson"> 4 </div>
          <div style="background-color: blue;color:white"> 5 </div>
          <div style="background-color: orange"> 6 </div>
          <div style="background-color: greenyellow"> 7 </div>
          <div style="background-color: brown"> 8 </div>
      </div>`
    }
    const codeExemple2= { 
    head:`  
    <style> 
        #Result{
            display: grid;
            grid-template-columns: auto auto 60px;
        }
        #Result div{ height: 70px;  width: 100%;  font-size: x-large; }
    </style>`
    }
    const codeExemple3= { 
    head:`  
    <style> 
        #Result{
            display: grid;
            grid-template-columns: auto 90px auto ;
            gap: 20px
        }
        #Result div{ height: 70px;  width: 100%;  font-size: x-large; }
    </style>`
    }
    const codeExemple4= { 
    head:`  
    <style> 
        #Result{
            display: grid;
            grid-template-columns: auto 90px auto ;
            gap: 100px 5px;
        }
        #Result div{ height: 70px;  width: 100%;  font-size: x-large; }
    </style>`
    }
    return(
<section className="section-conetent">
    <h1 className="heading-style"> CSS Grid </h1>
    <article className="mt-5">  
        <h2 className="title-h2">1. display grid</h2>
        <p className="style_divv">
            تستعمل الخاصية <b>display</b> مع القيمة <b>grid</b> ويتم إضافة الخاصية للعنصر لأب وذالك من اجل التحكم بالعناصر الأبناء .<br/>
            بالمحاداة مع الخاصية <b>display</b> مع القيمة <b>grid</b> تستعمل الخاصية <b>grid-template-columns</b> وذالك من أجل التحكم بالعناصر الأبناء 
            <div className="codeStudio alert bg-dark OBject" dir="ltr" style={{marginTop:"9px"}}>
                <b style={{color:"lightskyblue"}}>display</b> : <span style={{color:"orange"}}>grid</span>;<br/>
                <b style={{color:"lightskyblue"}}>grid-template-columns</b> : <span style={{color:"orange"}}>auto auto 25px</span>; <br/> 
            </div>
        </p>
        <div className="mital">متال : </div>
        <CodeHighlighter file_name="index.html"code={codeExemple1.code} head={codeExemple1.head} language="html" is_html={true} title="CSS Grid" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Grid' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <div id="css-grid-ex1-Result">
              <div cl style={{backgroundColor: "red"}}> 1 </div>
              <div cl style={{backgroundColor: "green"}}> 2 </div>
              <div cl style={{backgroundColor: "yellow"}}> 3 </div>
              <div cl style={{backgroundColor: "crimson"}}> 4 </div>
              <div cl style={{backgroundColor: "blue", color:"white"}}> 5 </div>
              <div cl style={{backgroundColor: "orange"}}> 6 </div>
              <div cl style={{backgroundColor: "greenyellow"}}> 7 </div>
              <div cl style={{backgroundColor: "brown"}}> 8 </div>
            </div>
        </Result>      
        <div className="mital">متال 2 : </div>
        <CodeHighlighter file_name="index.html"code={codeExemple1.code} head={codeExemple2.head} language="html" is_html={true} title="CSS Grid" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Grid' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <div id="css-grid-ex2-Result">
              <div cl style={{backgroundColor: "red"}}> 1 </div>
              <div cl style={{backgroundColor: "green"}}> 2 </div>
              <div cl style={{backgroundColor: "yellow"}}> 3 </div>
              <div cl style={{backgroundColor: "crimson"}}> 4 </div>
              <div cl style={{backgroundColor: "blue", color:"white"}}> 5 </div>
              <div cl style={{backgroundColor: "orange"}}> 6 </div>
              <div cl style={{backgroundColor: "greenyellow"}}> 7 </div>
              <div cl style={{backgroundColor: "brown"}}> 8 </div>
            </div>
        </Result>
    </article>
    <article>
        <h2 className="title-h2">2. gap</h2>
        <p className="style_divv">
            تحدد الخاصية <b>gap</b> حجم الفجوة بين الصفوف والأعمدة .<br/>
            <div className="codeStudio alert bg-dark OBject" dir="ltr" style={{marginTop:"9px"}}>
                <b style={{color:"lightskyblue"}}>display</b> : <span style={{color:"orange"}}>grid</span>;<br/>
                <b style={{color:"lightskyblue"}}>grid-template-columns</b> : <span style={{color:"orange"}}>auto auto 25px</span>; <br/>
                <b style={{color:"lightskyblue"}}>gap</b> : <span style={{color:"orange"}}>9px</span>; <br/>    
            </div>
        </p>
        <div className="mital">متال : </div>
        <CodeHighlighter file_name="index.html"code={codeExemple1.code} head={codeExemple3.head} language="html" is_html={true} title="CSS Grid" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Grid' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <div id="css-grid-ex3-Result">
              <div cl style={{backgroundColor: "red"}}> 1 </div>
              <div cl style={{backgroundColor: "green"}}> 2 </div>
              <div cl style={{backgroundColor: "yellow"}}> 3 </div>
              <div cl style={{backgroundColor: "crimson"}}> 4 </div>
              <div cl style={{backgroundColor: "blue", color:"white"}}> 5 </div>
              <div cl style={{backgroundColor: "orange"}}> 6 </div>
              <div cl style={{backgroundColor: "greenyellow"}}> 7 </div>
              <div cl style={{backgroundColor: "brown"}}> 8 </div>
            </div>
        </Result>
        <div className="mital">متال 2 : </div>
        <CodeHighlighter file_name="index.html"code={codeExemple1.code} head={codeExemple4.head} language="html" is_html={true} title="CSS Grid" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Grid' styleAdd="css-grid-ex4-parent" logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <div id="css-grid-ex4-Result">
              <div cl style={{backgroundColor: "red"}}> 1 </div>
              <div cl style={{backgroundColor: "green"}}> 2 </div>
              <div cl style={{backgroundColor: "yellow"}}> 3 </div>
              <div cl style={{backgroundColor: "crimson"}}> 4 </div>
              <div cl style={{backgroundColor: "blue", color:"white"}}> 5 </div>
              <div cl style={{backgroundColor: "orange"}}> 6 </div>
              <div cl style={{backgroundColor: "greenyellow"}}> 7 </div>
              <div cl style={{backgroundColor: "brown"}}> 8 </div>
            </div>
        </Result>
    </article>
</section>
    )
}