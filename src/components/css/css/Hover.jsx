 
import { CodeHighlighter ,  Result} from "../../path";
import images from "../imagesCss";
import "./Hover.css"

export default function Hover(props){
    const codeExemple2= { 
    css:`div.ex1:hover,div.ex1:active  {color: red;}
div.ex2:hover, div.ex2:active {font-size: 150%;}
div.ex3:hover, div.ex3:active {background: red;}
div.ex4:hover, div.ex4:active {font-family: monospace;}
div.ex5:visited, div.ex5:link {text-decoration: none;}
div.ex5:hover, div.ex5:active {text-decoration: overline;}`,
    head:`  
        <link rel="stylesheet" href="./index.css">`,
        code:`      <p>Mouse over the links to see them change layout.</p>
        <p><div style="cursor: pointer" className="ex1">This link changes color</div></p>
        <p><div style="color:blue;cursor:pointer;" className="ex2">This link changes font-size</div></p>
        <p><div style="color:blue;cursor:pointer;" className="ex3">This link changes background-color</div></p>
        <p><div style="color:blue;cursor:pointer;" className="ex4">This link changes font-family</div></p>
        <p><div style="color:blue;cursor:pointer;" className="ex5">This link changes text-decoration</div></p>`
    }
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-css-color"> CSS Hover </h1>
    <article>
        <p className="style_divv mt-5">
            يتم استخدام الخاصية <b>hover</b>  لتحديد العناصر عند تحريك الماوس فوقها. <br/>
            يمكن استخدام <b>hover</b> على جميع العناصر ، وليس فقط على الروابط كل ما عيك فعله هو كتابة إسم ال <b>id</b> أو إسم ل <b>class</b> أو إسم العنصر الدي تريد أن تطبق عليه الخاصية <b>hover</b> تم نقطتين تم تقوم بكتابة الخاصية <b>hover</b>  بعد ذالك تكتب الأوامر التي تريد تنفيدها عند تمرير الماوس أنضر إعلى المتال التالي أسفله .
        </p>
        <div className="mital">متال :  </div>
        <ul><li>مرر الماوس فوق الفقرات والعناوين والروابط لمعرفة تأتير ال  hover .</li></ul>
        <Result title='CSS Hover' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2 id="css-hover-ex1-h2">Welcome to My Homepage</h2>
            <div className="intro">
                <div className="css-hover-ex1-divdiv">My name is Reda </div>
                <p  className="css-hover-ex1-divdiv2">I live in Sidi Slimane</p>
                <p  className="css-hover-ex1-divdiv2">My <b>best</b> friend is Reda :p </p>
            </div>
            <div className="css-hover-ex1-divdiv">Links:</div>
            <p className="css-hover-ex1-divdiv2">Here are my favorite websites:</p>
            <a className="css-hover-ex1-divdiv3" href="https://www.w3schools.com" target="_blank">w3schools.com</a>
            <a className="css-hover-ex1-divdiv3" href="https://harmash.com/" target="_blank">harmash.com</a>
            <p className="css-hover-ex1-divdiv2"><b>Note:</b> Mouse over paragraphs, headers, and links to see what is getting a style.</p>
            <p className="css-hover-ex1-divdiv2"><b>Note:</b> For :hover to work for other than links in IE, a DOCTYPE must be declared.</p>
        </Result>

        <div className="mital">متال 2:  </div>    
        <CodeHighlighter file_name="index.css" code={codeExemple2.css} language="css" copie={true}/>
        <CodeHighlighter file_name="index.html" code={codeExemple2.code} head={codeExemple2.head} language="html" title="CSS Hover" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Hover' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <p>Mouse over the links to see them change layout.</p>
            <p><div style={{cursor:"pointer"}} className="ex1">This link changes color</div></p>
            <p><div style={{color:"blue",cursor:"pointer"}} className="css-hover-ex2-ex2">This link changes font-size</div></p>
            <p><div style={{color:"blue",cursor:"pointer"}} className="css-hover-ex2-ex3">This link changes background-color</div></p>
            <p><div style={{color:"blue",cursor:"pointer"}} className="css-hover-ex2-ex4">This link changes font-family</div></p>
            <p><div style={{color:"blue",cursor:"pointer"}} className="css-hover-ex2-ex5">This link changes text-decoration</div></p>
        </Result>
    </article>
</section>
)
}