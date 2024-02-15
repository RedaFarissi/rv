import { CodeHighlighter ,  Result} from "../../path";

export default function Dialog(props){
    const code = `<dialog open="true/false"> 
    <!--HTML content-->
</dialog>`
    const codeExemple = `     <dialog open='true' style="margin:auto;padding:3px;">
        <div class="py-1 px-2 border border-dark">Html</div>
        <div class="py-1 px-2 border border-dark">CSS</div>
        <div class="py-1 px-2 border border-dark">JavaScript</div>
        <div class="py-1 px-2 border border-dark">React</div>
    </dialog>`
    return(
<section className="section-conetent">
    <h1 className="heading-style">HTML Dialog</h1>
    <article className="mt-5">
        <p className="style_divv mt-5">
            تحدد الوسم <b>dialog</b> مربع صندوق أو نافذة فرعية.<br/>
            يسهّل عنصر <b>dialog</b> إنشاء مربعات حوار وشروط منبثقة على صفحة ويب. <br/>
            لستعمال الوسم <b>dialog</b> يجب إستخدام السمة <b>open</b> والتي هي الأخرى تستقبل قيمتين <b>true</b> و <b>false</b>
            عند إستخدام الوسم <b>dialog</b> بدون السمة <b>open</b> ستكون العناصر داخل الوسم مخفية 
        </p>
        <CodeHighlighter  code={code} language="html"  addclassName="mt-3 mb-3" copie={true}/>
        <div className="sum_exemple_style">
            <div className="mital">مثال : </div>
            <CodeHighlighter file_name="index.html" code={codeExemple} head={codeExemple[1]} language="html" is_html={true} title="Dialog" addClass="mt-3 mb-3" copie={true}/>
            <Result title='Dialog' logo={props.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
               <dialog open='true' style={{position:"static", margin:"auto",padding:"3px"}}>
                    <div className="py-1 px-2 border  border-dark">Html</div>
                    <div className="py-1 px-2 border  border-dark">CSS</div>
                    <div className="py-1 px-2 border  border-dark">JavaScript</div>
                    <div className="py-1 px-2 border  border-dark">React</div>
               </dialog>
            </Result>
        </div>
    </article>
</section>
)
}