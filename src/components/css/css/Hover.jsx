 
import { CodeHighlighter ,  Result} from "../../path";
import images from "../imagesCss";

export default function Hover(props){
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-css-color"> CSS Hover </h1>
    <article>
        <div className="style_divv mt-5">
            يتم استخدام الخاصية <b>hover</b>  لتحديد العناصر عند تحريك الماوس فوقها. <br/>
            يمكن استخدام <b>hover</b> على جميع العناصر ، وليس فقط على الروابط كل ما عيك فعله هو كتابة إسم ال <b>id</b> أو إسم ل <b>class</b> أو إسم العنصر الدي تريد أن تطبق عليه الخاصية <b>hover</b> تم نقطتين تم تقوم بكتابة الخاصية <b>hover</b>  بعد ذالك تكتب الأوامر التي تريد تنفيدها عند تمرير الماوس أنضر إعلى المتال التالي أسفله .
        </div>
        <div className="mital">متال :  </div>
        <ul><li>مرر الماوس فوق الفقرات والعناوين والروابط لمعرفة تأتير ال  hover .</li></ul>
        <div className="style-result" >
            <h2 id="h2">Welcome to My Homepage</h2>
            <div className="intro">
            <div className="divdiv">My name is Reda </div>
            <p  className="divdiv2">I live in Sidi Slimane</p>
            <p  className="divdiv2">My <b>best</b> friend is Reda :p </p>
            </div>
            <div className="divdiv">Links:</div>
            <p className="divdiv2">Here are my favorite websites:</p>
            <a className="divdiv3" href="https://www.w3schools.com" target="_blank">w3schools.com</a>
            <a className="divdiv3" href="https://harmash.com/" target="_blank">harmash.com</a>
            <p className="divdiv2"><b>Note:</b> Mouse over paragraphs, headers, and links to see what is getting a style.</p>
            <p className="divdiv2"><b>Note:</b> For :hover to work for other than links in IE, a DOCTYPE must be declared.</p>
        </div>
        <div className="sum_exemple_style">
        <div className="mital">متال 2:  </div>
        <img src={images.css14_hover} className="img"/>
        <div className="style-result" >
            <p>Mouse over the links to see them change layout.</p>
            <p><div style={{cursor:"pointer"}} className="ex1">This link changes color</div></p>
            <p><div style={{color:"blue",cursor:"pointer"}} className="ex2">This link changes font-size</div></p>
            <p><div style={{color:"blue",cursor:"pointer"}} className="ex3">This link changes background-color</div></p>
            <p><div style={{color:"blue",cursor:"pointer"}} className="ex4">This link changes font-family</div></p>
            <p><div style={{color:"blue",cursor:"pointer"}} className="ex5">This link changes text-decoration</div></p>
        </div>
        </div>
    </article>
</section>
)
}