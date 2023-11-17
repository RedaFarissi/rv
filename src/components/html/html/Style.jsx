import images from "../images";
import { CodeHighlighter } from "../pathHtml";

export default function Style(){
  const code = `<style> 
  body{
    background-color: red;
    font-size: 20px;
  }

  h1{
    border-radius: 20px;
    color: green;
  }

  #id{
    border: none;
    border: green;
  }
</style>`
    
    return(
<section className="section-conetent">
  <h1 className="heading-style-html">HTML Style </h1>
  <article>
    <p className="style_divv mt-5">
        يتم استخدام الوسم <kbd>&lt;style&gt;</kbd>  في <b>HTML</b>  داخل الوسم <kbd>&lt;head&gt;</kbd> لإضافة أنماط إلى عنصر، مثل اللون والخط والحجم والمزيد .<br/>
        يمكن إستعمال  <b>style</b>  كسمة ويمكن لجميع عناصر <b>HTML</b> تقريبا أن تأخد هذه السمة وكل ذالك ستتعلمه خلال البرنامج التعليمي الخاص بلغة التصميم <b>CSS</b> .<br/>
        إليك متالا على ذالك :
    </p>
    <CodeHighlighter  code={code} language="css"  addclassName="mt-3 mb-3" copie={true}/>
    <div className="sum_exemple_style">
    <div className="mital">مثال : </div>
      <h4 className="green"> الكود </h4>
      <img src={images.html40_style} className="img"/>
      <h4 className="green"> بعد تشغيل الكود </h4>
      <img src={images.html40_style_2} className="img"/>
    </div>
    <div className="sum_exemple_style">
      <div className="mital">مثال 2 : </div>
      <h4 className="green"> الكود </h4>
      <img src={images.html40_style2} className="img"/>
      <h4 className="green"> بعد تشغيل الكود </h4>
      <img src={images.html40_style2_2} className="img"/>
    </div>
  </article>
</section>
)
}