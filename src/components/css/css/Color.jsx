import { CodeHighlighter ,  Result} from "../../path";
import images from "../imagesCss";
import "./Color.css"

export default function Color(props){
    var arr1 = [] , arr2 = [] , arr3 = [] , arr4 = [], arr5 = [],
    arr6 = [] , arr7 = [] , arr8 = [] , arr9 = [] , arr10 = [],
    arr11 = [] , arr12 = [];
    for(var i=0 ; i<=255 ; i=i+5){
        arr1.push( `255,255,${i}`)
        arr2.push( `255,0,${i}`)
        arr3.push( `0,255,${i}`)
        arr4.push( `0,0,${i}`)
        arr5.push( `255,${i},255`)
        arr6.push( `0,${i},255`)
        arr7.push( `255,${i},0`)
        arr8.push( `255,${i},${i}`)
        arr9.push( `${i},255,255`)
        arr10.push(`${i},255,0`)
        arr11.push(`${i},0,255`)
        arr12.push(`${i},${i},${i}`)
    }
    const code = `color : transparent ;
-webkit-background-clip : text ;`

    const codeExemple1= { 
    head: `
    <style>
        h2{   font-size: 45px; }
        p{ font-size: 25px;}
        #title1{ color: slateblue; }
        #title2{ color: red; }
        .paragraph1{ color: dodgerblue }
        .paragraph2{ color: mediumorchid }
    </style>`,
    code:`    <h2 id="title1">Title 1</h2>
    <p class="paragraph1"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid animi vel nam quas.</p>
    <h2 id="title2">Title 2</h2>
    <p class="paragraph2"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid animi vel nam quas.</p>`
    }
    const codeExemple2= { 
        code:`          <h1 style="color:rgba(0,0,255);"}}> Heading Blue </h1>
          <h1 style="color:rgba(255,0,0);"}}> Heading Red </h1>
          <h1 style="color:rgba(0,255,0);"}}> Heading Green</h1>`
    }
    const codeExemple3= { 
        head:`
        <style>
            h2{
                font-size: 86px; 
                font-weight: 800;
                background-image: url("../../../assests/images/css/css/orange.jpg"); 
                background-size: contain;
                -webkit-background-clip: text;
                color: transparent;
                -webkit-text-stroke: 1.2px red
            }
        </style>`,
        code:`         <h2> Reda Eskouni </h2>`
    }
    return(
<section className="section-conetent">
    <h1 className="heading-style"> CSS Color </h1>
    <article className="mt-5">
        <p className="style_divv">
        تحدد الخاصية <b>color</b> لون النص . استخدم لون خلفية مقترن بلون نص يسهل قراءة النص.<br/>
        يتم تحديد اللون بواسطة :<br/>
        <ul>
            <li>اسم لون مثل <b>red</b>  و التي تعني أحمر بالغة الإنجليزية . </li>
            <li>قيمة <b>HEX</b> مثل <bdi>#ff0000</bdi></li>
            <li>قيمة <b>RGB</b> مثل rgb(255,255,255)</li>
        </ul>
        </p>
    </article>
    <article>
        <h2 className="title-h2"> 1.  أسماء الألوان </h2>
 
        <div className="mital">متال : </div>
        <CodeHighlighter file_name="index.html"code={codeExemple1.code} head={codeExemple1.head} language="html" is_html={true} title="CSS Color" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Color' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2 className="css-color-ex1-title1">Title 1</h2>
            <p className="css-color-ex1-paragraph1"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid animi vel nam quas.</p>
            <h2 className="css-color-ex1-title2">Title 2</h2>
            <p className="css-color-ex1-paragraph2"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid animi vel nam quas.</p>
        </Result>
    </article>
    <article>
        <h2 className="title-h2"> 2. الألوان بصيغة rgb </h2>
        <p className="style_divv">
            <b>rgb</b> النموذج اللوني أحمر أخضر أزرق أو باختصار النموذج اللوني <b>rgb</b> ويقصد بها  (Red Green Blue).<br/>
            وهو نموذج لوني جمعي تجمع فيه الألوان الحمراء والخضراء والزرقاء مع بعضها البعض بطرق مختلفة لتوليد مجموعة كبيرة من الألوان. تستقبل <b>rgb</b> تلات أرقام  ما بين 0 و 255
        </p>    
        <div className="mital">متال : </div>
        <CodeHighlighter file_name="index.html"code={codeExemple2.code} language="html" is_html={true} title="CSS Color" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Color' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h1 style={{color:"rgba(0,0,255)"}}> Heading Blue </h1>
            <h1 style={{color:"rgba(255,0,0)"}}> Heading Red </h1>
            <h1 style={{color:"rgba(0,255,0)"}}> Heading Green</h1>
        </Result>
    </article>
    <article>
        <h2 className="title-h2">3.transparent</h2>
        <p className="style_divv">
            تستعمل القيمة <b>transparent</b> مع الخاصية  <b>color</b> لجعل النص شفافا
            تستعمل مع الخاصية <b>-webkit-background-clip</b> و القيمة <b>text</b> لجعل النص يأخد ألوان الخلفية . 
        </p>
        <CodeHighlighter  code={code} language="css"  addclassName="mt-3 mb-3" copie={true}/>
        <div className="mital">متال : </div>
        <CodeHighlighter file_name="index.html" code={codeExemple3.code} head={codeExemple3.head} language="html" is_html={true} title="CSS Color" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Color' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h1 className="css-color-ex3"> Reda Eskouni </h1>
        </Result>
    </article>
    <article>
        <h2 className="title-h2">4. بعض الألون  المستعملة </h2>
        <div className="row justify-content-center" dir="ltr">
            {arr1.map(e=><div className="col-3 py-4 border position-relative" style={{backgroundColor:`rgba(${e})`}}><span className="bg-dark text-light position-absolute" style={{left:"4px",top:"4px",fontSize:"12.5px"}}>rgba({e})</span></div>)}
        </div>
        <div className="row" dir="ltr">
            {arr2.map(e=><div className="col-3 py-4 border position-relative" style={{backgroundColor:`rgba(${e})`}}><span className="bg-dark text-light position-absolute" style={{left:"4px",top:"4px",fontSize:"12.5px"}}>rgba({e})</span></div>)}
        </div>
        <div className="row" dir="ltr">
            {arr3.map(e=><div className="col-3 py-4 border position-relative" style={{backgroundColor:`rgba(${e})`}}><span className="bg-dark text-light position-absolute" style={{left:"4px",top:"4px",fontSize:"12.5px"}}>rgba({e})</span></div>)}
        </div>
        <div className="row" dir="ltr">
            {arr4.map(e=><div className="col-3 py-4 border position-relative" style={{backgroundColor:`rgba(${e})`}}><span className="bg-dark text-light position-absolute" style={{left:"4px",top:"4px",fontSize:"12.5px"}}>rgba({e})</span></div>)}
        </div>
        <div className="row" dir="ltr">
            {arr5.map(e=><div className="col-3 py-4 border position-relative" style={{backgroundColor:`rgba(${e})`}}><span className="bg-dark text-light position-absolute" style={{left:"4px",top:"4px",fontSize:"12.5px"}}>rgba({e})</span></div>)}
        </div>
        <div className="row" dir="ltr">
            {arr6.map(e=><div className="col-3 py-4 border position-relative" style={{backgroundColor:`rgba(${e})`}}><span className="bg-dark text-light position-absolute" style={{left:"4px",top:"4px",fontSize:"12.5px"}}>rgba({e})</span></div>)}
        </div>
        <div className="row" dir="ltr">
            {arr7.map(e=><div className="col-3 py-4 border position-relative" style={{backgroundColor:`rgba(${e})`}}><span className="bg-dark text-light position-absolute" style={{left:"4px",top:"4px",fontSize:"12.5px"}}>rgba({e})</span></div>)}
        </div>
        <div className="row" dir="ltr">
            {arr8.map(e=><div className="col-3 py-4 border position-relative" style={{backgroundColor:`rgba(${e})`}}><span className="bg-dark text-light position-absolute" style={{left:"4px",top:"4px",fontSize:"12.5px"}}>rgba({e})</span></div>)}
        </div>
        <div className="row" dir="ltr">
            {arr9.map(e=><div className="col-3 py-4 border position-relative" style={{backgroundColor:`rgba(${e})`}}><span className="bg-dark text-light position-absolute" style={{left:"4px",top:"4px",fontSize:"12.5px"}}>rgba({e})</span></div>)}
        </div>
        <div className="row" dir="ltr">
            {arr10.map(e=><div className="col-3 py-4 border position-relative" style={{backgroundColor:`rgba(${e})`}}><span className="bg-dark text-light position-absolute" style={{left:"4px",top:"4px",fontSize:"12.5px"}}>rgba({e})</span></div>)}
        </div>
        <div className="row" dir="ltr">
            {arr11.map(e=><div className="col-3 py-4 border position-relative" style={{backgroundColor:`rgba(${e})`}}><span className="bg-dark text-light position-absolute" style={{left:"4px",top:"4px",fontSize:"12.5px"}}>rgba({e})</span></div>)}
        </div>
        <div className="row" dir="ltr">
            {arr12.map(e=><div className="col-3 py-4 border position-relative" style={{backgroundColor:`rgba(${e})`}}><span className="bg-dark text-light position-absolute" style={{left:"4px",top:"4px",fontSize:"12.5px"}}>rgba({e})</span></div>)}
        </div>
    </article>
</section>
)
}