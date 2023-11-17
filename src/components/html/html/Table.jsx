import images from "../images";
import { CodeHighlighter } from "../pathHtml";
import "./Table.css"

export default function Table(){
    const code = `<table>
    <tr> 
       <th> title </th> 
       <th> title </th> 
    </tr> 
    <tr> 
       <td> content </td>
       <td> content </td>
    </tr> 
    <tr> 
       <td> content </td> 
       <td> content </td> 
    </tr> 
 </table>`
    return(
<section className="section-conetent">
    <h1 className="heading-style-html">HTML table</h1>
    <article>
        <h2 className="title-h2">1. الوسم table </h2>
        <p className="style_divv">
            يستخدم الوسم <kbd>&lt;table&gt;</kbd> في <b>HTML</b> لإنشاء جدول  <br/>
            يتكون جدول <b>HTML</b> من الوسم <kbd>&lt;table&gt;</kbd> وعنصر واحد أو أكثر من عناصر <kbd>&lt;tr&gt;</kbd> و  <kbd>&lt;th&gt;</kbd>و <kbd>&lt;td&gt;</kbd>.<br/>
            يحدد العنصر <kbd>&lt;tr&gt;</kbd> عدد أسطر الجدول  ، ويحدد العنصر <kbd>&lt;th&gt;</kbd> رأس الجدول ، ويحدد العنصر <kbd>&lt;td&gt;</kbd> أعمدة أو خلية الجدول.<br/>
            قد يتضمن جدول <b>HTML</b> أيضًا عناصر <kbd>&lt;caption&gt;</kbd> و <kbd>&lt;colgroup&gt;</kbd> و <kbd>&lt;thead&gt;</kbd> و <kbd>&lt;tfoot&gt;</kbd> و <kbd>&lt;tbody&gt;</kbd>.
        </p>
        <CodeHighlighter  code={code} language="html"  addclassName="mt-3 mb-3" copie={true}/>
        <div className="sum_exemple_style">
            <div className="mital">مثال : </div>
            <h4 className="green"> الكود </h4>
            <img src={images.html31_table} className="img"/>
            <h4 className="green"> بعد تشغيل الكود </h4>
            <div className="style-result">
                <table id="a_tablE"><tr> <th>Month</th> <th>Savings</th> </tr>  <tr> <td>January</td> <td>$100</td> </tr></table>
            </div>
        </div>
        <div className="style_divv">
            <ul>
                <li> في المتال السابق لاحظ أنه  يوجد وسمين <kbd>&lt;tr&gt;</kbd> داخل الوسم <kbd>&lt;table&gt;</kbd>  ونتيجتا لذالك تم إنشاء سطرين داخل الجدول .  </li>
                <li> يستعمل الوسم <kbd>&lt;th&gt;</kbd> غالبا في السطر الأول من الجدول المحدد عن طريق  <kbd>&lt;tr&gt;</kbd> من أجل إعطاء عناويين للجدول يجب كتابة كل عنوان من رأس الجدول داخل وسم <kbd>&lt;th&gt;</kbd> خاص به .  </li>
                <li> يستخدم الوسم <kbd>&lt;td&gt;</kbd> داخل الوسم <kbd>&lt;tr&gt;</kbd> من أجل التفرقة بين أعمدة الجدول . </li>
                <li> يمكن إستعمال <b>CSS</b> لتصميم  الجدول بطريقة التي تريد .  </li>
            </ul>
        </div>
        <div className="sum_exemple_style">
            <div className="mital">مثال 2 : </div>
            <h4 className="green"> الكود </h4>
            <img src={images.html31_table2} className="img"/>
            <h4 className="green"> بعد تشغيل الكود </h4>
            <div className="style-result">
                <table className="b_tablE"><tr> <th>Month</th> <th>Savings</th> </tr>  <tr> <td>January</td> <td>$100</td> </tr> <tr> <td>February</td> <td>$80</td> </tr></table>
            </div>
        </div>
    </article>
    <article>
        <h2 className="title-h2">2. الوسم caption </h2>
        <p className="style_divv">
        يحدد الوسم <kbd>&lt;caption&gt;</kbd> شرح الجدول.<br/>
        يجب إدخال الوسم <kbd>&lt;caption&gt;</kbd> مباشرة بعد علامة <kbd>&lt;table&gt;</kbd><br/>
            <div className="alert alert-warning text-black mt-2">
             نصيحة: بشكل افتراضي ، سيتم محاذاة التسمية التوضيحية للجدول إلى المنتصف أعلى الجدول. ومع ذلك ، يمكن استخدام محاذاة النص وجانب التسمية التوضيحية لخصائص CSS لمحاذاة التسمية التوضيحية ووضعها.
            </div>
        </p>
        <div className="sum_exemple_style">
            <div className="mital">مثال : </div>
            <h4 className="green"> الكود </h4>
            <img src={images.html31_table3} className="img"/> 
            <h4 className="green"> بعد تشغيل الكود </h4>
            <div className="style-result">
                <table className="b_tablE ml-0" >
                    <caption className="b_tablE-test"> My Savings</caption>
                    <tr> <th>Month</th> <th>Savings</th> </tr>
                    <tr> <td className="blue">January</td> <td className="blue">$100</td> </tr> 
                </table>
                <table className="b_tablE ml-0 mt-4">
                    <caption className="b_tablE-caption" > My Savings</caption>
                    <tr> <th>Month</th> <th>Savings</th> </tr>
                    <tr> <td className="blue">January</td> <td className="blue">$100</td> </tr> 
                </table>
            </div>
        </div>
    </article>
    <article>
        <h2 className="title-h2">3. الوسم colgroup </h2>
        <div className="style_divv">
        يحدد الوسم <kbd>&lt;colgroup&gt;</kbd> مجموعة من عمود واحد أو أكثر في جدول للتنسيق.<br/>
        يعد الوسم <kbd>&lt;colgroup&gt;</kbd> مفيدة لتطبيق الأنماط على أعمدة بأكملها ، بدلاً من تكرار الأنماط لكل خلية ، لكل صف.<br/>
        ملاحظة: يجب أن تكون العلامة <kbd>&lt;colgroup&gt;</kbd> تابعة لعنصر <kbd>&lt;table&gt;</kbd> ، بعد أي عناصر <kbd>&lt;caption&gt;</kbd> وقبل أي عناصر <kbd>&lt;thead&gt;</kbd> و <kbd>&lt;tbody&gt;</kbd> و <kbd>&lt;tfoot&gt;</kbd> و <kbd>&lt;tr&gt;</kbd>.<br/>
        نصيحة: لتحديد خصائص مختلفة لعمود داخل <kbd>&lt;colgroup&gt;</kbd> ، استخدم علامة <bdi><strong>&lt;col&gt;</strong></bdi> داخل علامة <kbd>&lt;colgroup&gt;</kbd>.
        </div>
        <div className="sum_exemple_style">
            <div className="mital">مثال : </div>
            <h4 className="green"> الكود </h4>
            <img src={images.html31_table4} className="img"/>
            <h4 className="green"> بعد تشغيل الكود </h4>
            <div className="style-result">
                <h2 style={{marginBottom:"32px",fontWeight:"790"}}>HTML colgroup tag</h2>
                <table>
                    <colgroup> 
                        <col span="2" className="bg-success text-white"/>
                        <col style={{backgroundColor:"tomato"}}/>
                    </colgroup>
                    <tr> <th>STUDENT      </th> <th>COURSE</th> <th>AGE</th> </tr>
                    <tr> <td>Manas Chhabra</td> <td>BCA</td>    <td>19</td> </tr> 
                    <tr> <td>Anurag Gupta </td> <td>B.TECH</td> <td>23</td> </tr> 
                </table>
            </div>
        </div>
    </article>
    <article>
        <h2 className="title-h2">4. الوسم thead</h2>
        <p className="style_divv">
            تُستخدم علامة <kbd>&lt;thead&gt;</kbd> لتجميع محتوى الرأس في جدول <b>HTML</b>.
        </p>
    </article>
    <article>
        <h2 className="title-h2">5. الوسم tbody</h2>
        <p className="style_divv">
            تُستخدم علامة <kbd>&lt;tbody&gt;</kbd> لتجميع محتوى النص في جدول <b>HTML</b>.
        </p>
        </article>
        <article>
        <h2>6. الوسم tfooter</h2>
        <p  className="style_divv">
            تُستخدم العلامة <kbd>&lt;tfooter&gt;</kbd> لتجميع محتوى السفلي في جدول <b>HTML</b>
        </p>
        <div className="sum_exemple_style">
            <div className="mital">مثال : </div>
            <h4 className="green"> الكود </h4>
            <img src={images.html31_table5} className="img"/> 
            <h4 className="green"> بعد تشغيل الكود </h4>
            <div className="style-result">
                <table id="e_table">
                    <caption className="e_table-caption"> reda_coder</caption>
                    <tr> <th>Month   </th> <th>Savings</th>  </tr>
                    <tr> <td>January </td> <td>$100</td>     </tr> 
                    <tr> <td>February</td> <td>$80</td>      </tr> 
                    <tr> <td>Sum     </td> <td>$180</td>     </tr> 
                </table>
            </div>
        </div>
    </article>
    <article>
        <h2>7. السمات المستعملة </h2>
        <h5 className="title-h2"> السمة colspan </h5>
        <p className="style_divv">
            تحدد السمة <b>colspan</b> عدد الأعمدة التي يجب أن تمتد الخلية .
        </p>
        <div className="sum_exemple_style">
            <div className="mital">مثال : </div>
            <h4 className="green"> الكود </h4>
            <img src={images.html31_table6} className="img"/>
            <h4 className="green"> بعد تشغيل الكود </h4>
            <div className="style-result">
                <table id="f_table">
                    <tr> <th>Month   </th> <th>Savings</th>  </tr>
                    <tr> <td>January </td> <td>$100</td>     </tr> 
                    <tr> <td>February</td> <td>$80</td>      </tr> 
                    <tr> <td colspan="2"> Sum: $180 </td>     </tr> 
                </table>
            </div>
        </div>
        <h5> السمة rowspan </h5>
        <p  className="style_divv">
            تحدد السمة <b>rowspan</b>  عدد الأسطر التي يجب أن تمتد الخلية .
        </p>
        <div className="sum_exemple_style">
            <div className="mital">مثال : </div>
            <h4 className="green"> الكود </h4>
            <img src={images.html31_table7} className="img"/>
            <h4 className="green"> بعد تشغيل الكود </h4>
            <div className="style-result">
                <table id="f_table">
                    <tr> <th>Month   </th> <th>Savings</th> <th>Savings for holiday!</th> </tr>
                    <tr> <td>January </td> <td>$100   </td> <td rowspan="2">$50</td> </tr> 
                    <tr> <td>February</td> <td>$80</td>  </tr> 
                </table>
            </div>
        </div>
    </article>
</section>
)
}