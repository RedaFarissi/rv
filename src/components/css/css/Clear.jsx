import { CodeHighlighter ,  Result} from "../../path";
import images from "../imagesCss";
import "./Clear.css"

export default function Clear(props){
    const codeExemple1= { 
        head:`  
       <style> 
            .div{
                width: 20%;
                height: 90px;
                font-size: xx-large;
                color: white;
            }

            .float_class {
                float: left;
            }  
       </style>`,
        code:`      <div class="div float_class" style={{backgroundColor: "red"}}> red</div>
        <div class="div float_class" style={{backgroundColor: "blue"}}> blue</div>
        <div class="div" style="background-color: orange"> orange </div>
        <div class="div" style="background-color: brown"> brown</div>
        <div class="div" style="background-color: green"> green</div>
        <div class="div" style="background-color: chartreuse"> chartreuse </div>`
    }
    const codeExemple2= { 
        head:`  
       <style> 
            .div{
                width: 20%;
                height: 90px;
                font-size: xx-large;
                color: white;
            }

            .float_class {
                float: left;
            } 
            #orange-color{
                clear: both;
            } 
       </style>`,
        code:`      <div class="div float_class" style={{backgroundColor: "red"}}> red</div>
        <div class="div float_class" style={{backgroundColor: "blue"}}> blue</div>
        <div id='orange-color' class="div" style="background-color: orange"> orange </div>
        <div class="div" style="background-color: brown"> brown</div>
        <div class="div" style="background-color: green"> green</div>
        <div class="div" style="background-color: chartreuse"> chartreuse </div>`
    }
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-css-color"> CSS Clear </h1>
    <article>
        <p className="style_divv mt-5">
            تشير الخاصية <b>clear</b> إلى ما إذا كان يمكن وضع عنصر بجوار العناصر تاتي تحتوي على الخاصية <b>float</b>  التي تسبقه أو ما إذا كان يجب نقله لأسفل ليكون أسفل تلك العناصر. تنطبق الخاصية <b>clear</b> على كل من العناصر العائمة وغير العائمة .<br/>
            بصفة عامة من خلال الخاصية <b>clear</b> يمكنك إيقاف تأتير الخاصية <b>float</b> لأن الخاصية <b>float</b> تقوم بتعويم ل العناصر التي تتبعها . 
            تستقبل الخاصية <b>clear</b> القيم التالية :
            <ul>
                <li> <b>none</b> : تستعمل لإزالة تأتر الخاصية <b>clear</b> </li>
                <li> <b>left </b> :  تستعمل لإزالة تأتر الخاصية <b>float</b> التي تحمل القيمة <b>left </b>. </li>
                <li> <b>right</b> :  تستعمل لإزالة تأتر الخاصية <b>float</b> التي تحمل القيمة <b>right </b>.</li>
                <li> <b>both</b> :  تستعمل لإزالة تأتر الخاصية <b>float</b> التي تحمل القيمة <b>left</b> و القيمة <b>right</b> . </li>
            </ul>
        </p>
        <div className="mital">متال  :  </div>
        <ul>
            <li> في هذا المتال قمنا بإضافة الخاصية <b>float</b> لأول وسمين <b>div</b> فقط . </li>
            <li> لاحض أن الوسم 3 و الوسم 4 تم وضعهم في نفس المكان بحيت يضهر الشكل بطريقة سيئة .</li>
        </ul>
        <CodeHighlighter file_name="index.html"code={codeExemple1.code} head={codeExemple1.head} language="html" title="CSS Clear" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Clear' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <div class="css-clear-ex1-div css-clear-ex1-float_class" style={{backgroundColor: "red"}}> red</div>
            <div class="css-clear-ex1-div css-clear-ex1-float_class" style={{backgroundColor: "blue"}}> blue</div>
            <div class="css-clear-ex1-div" style={{backgroundColor: "orange"}}> orange </div>
            <div class="css-clear-ex1-div" style={{backgroundColor: "brown"}}> brown</div>
            <div class="css-clear-ex1-div" style={{backgroundColor: "green"}}> green</div>
            <div class="css-clear-ex1-div" style={{backgroundColor: "chartreuse"}}> chartreuse </div>
        </Result>
        <ul>
           <li>لحل هدا المشكل الذي ينتج عن الخاصية <b>float</b> نستعمل الخاصية <b>clear </b></li>
        </ul>
        <CodeHighlighter file_name="index.html"code={codeExemple2.code} head={codeExemple2.head} language="html" title="CSS Clear" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Clear' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <div class="css-clear-ex2-div css-clear-ex2-float_class" style={{backgroundColor: "red"}}> red</div>
            <div class="css-clear-ex2-div css-clear-ex2-float_class" style={{backgroundColor: "blue"}}> blue</div>
            <div id="css-clear-ex2-orange-color" class="css-clear-ex2-div" style={{backgroundColor: "orange"}}> orange </div>
            <div class="css-clear-ex2-div" style={{backgroundColor: "brown"}}> brown</div>
            <div class="css-clear-ex2-div" style={{backgroundColor: "green"}}> green</div>
            <div class="css-clear-ex2-div" style={{backgroundColor: "chartreuse"}}> chartreuse </div>
        </Result>
    </article>

</section>
    )
}