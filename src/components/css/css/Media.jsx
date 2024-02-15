import { CodeHighlighter ,  Result} from "../../path";
import images from "../imagesCss";
import "./Media.css"

export default function Media(props){
    const code1 = `@media not|only mediatype and (mediafeature and|or|not mediafeature) {
    /* CSS-Code ; */
}`
    const code2 =  `<link rel="stylesheet" media="screen and (min-width: 900px)" href="./name_file.css">
<link rel="stylesheet" media="screen and (max-width: 500px)" href="./name_file2.css">`

    const codeExemple1= { 
        css:`.parent{
    background-color:greenyellow;
    width:max(1400px , 100%);
    display:flex; justify-content:space-between;
    flex-wrap: wrap;
}
.parent > div{
    background-color: yellow; width:240px;
    margin:20px;   text-align:center;
    padding:20px; color:red;
    font-size:35px; border:outset 9px red;
}
@media only screen and (max-width: 1400px){
    .parent{ width: 100%; }
    .parent > div{ width:40%; }
}
@media only screen and (max-width: 900px){
    .parent > div{ width:100%; }
}`,
    head:`  
    <link rel="stylesheet" href="./index.css">`,
    code:`      <div class="parent">
          <div> A </div>
          <div> B </div>
          <div> C </div>
          <div> D </div>
      </div>  `
    }
    return(
<section className="section-conetent">
    <h1 className="heading-style"> CSS Media </h1>
    <article>
        <p className="style_divv mt-5">
            تُستخدم القاعدة <b>media</b>  لجعل موقعك متجاوب مع جميع الأجهزة .<br/>
            يمكن استخدام استعلامات الوسائط للتحقق من أشياء كثيرة ، مثل عرض وارتفاع منفذ العرض و عرض الجهاز وارتفاعه .<br/>
            يعد استخدام استعلامات الوسائط تقنية شائعة لتقديم ورقة أنماط مخصصة (تصميم ويب سريع الاستجابة) لأجهزة الكمبيوتر المكتبية وأجهزة الكمبيوتر المحمولة والأجهزة اللوحية والهواتف المحمولة.<br/><br/>
           <b style={{color:"rgba(0 90 55/60%)"}}>الشكل العام للإستخدام : </b> <br/><br/>
            <CodeHighlighter code={code1} language="css" copie={true}/>
            يمكنك أيضًا الحصول على <b>media</b> مختلفة لوسائط مختلفة وذال بستعمال الخاصية <b>link</b> ، مثل  :<br/>
            <CodeHighlighter code={code2} language="jsx" copie={true}/>
        </p>

        <div className="mital">متال : </div>
        <ul>
            <li> في المتال أسفله لم تقم الخاصية <b>flex-wrap</b> بإجاع العناصر الأخرى إلى السطر لأننا قمنا بإعطاء العنصر الأب الخاصية <b>width</b> بقيمة محددة .</li>
        </ul>
        <CodeHighlighter file_name="index.css" code={codeExemple1.css} language="css" copie={true}/>
        <CodeHighlighter file_name="index.html" code={codeExemple1.code} head={codeExemple1.head} language="html" is_html={true} title="CSS Media" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Media' styleAdd="css-media-ex-styleAdd" logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/reda.html">
            <div className="css-media-ex-parent">
                <div> A </div>
                <div> B </div>
                <div> C </div>
                <div> D </div>
            </div> 
        </Result>
    </article>
</section>
    )
}