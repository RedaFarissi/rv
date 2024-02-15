import { CodeHighlighter ,  Result} from "../../path";
import "./Table.css"

export default function Table(props){
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
    const codeExemple1 = [`  <table>
        <tr>
            <th>Month</th> 
            <th>Savings</th>
        </tr>
        <tr>
            <td>January</td>
            <td>$100</td>
        </tr>
        <tr>      
            <td>February</td>
            <td>$120</td>
        </tr>
        <tr>
            <td>March</td>
            <td>$140</td>
        </tr>
    </table>`,
    ` 
    <style>
        table, th, td {
          border: 1px solid black;
        }
    </style>`]
    const codeExemple2 = [`<table class="center">
      <tr>
        <th>Month</th>
        <th>Savings</th>
      </tr>
      <tr>
        <td>January</td>
        <td>$100</td>
      </tr>
      <tr>
        <td>February</td>
        <td>$80</td>
      </tr>
    </table>`,
    ` 
    <style>
        table, th, td {
          border: 1px solid black;
          border-collapse: collapse;
          padding: 8px 14px;
        }

        th {
          font-size: 40px;
          color: white;
          background-color: brown;
        }

        td {
          font-size: 25px;
        }

        table.center {
          margin-left: auto;
          margin-right: auto;
        }
    </style>`]

    const codeExemple3 = [
    `<table>
    <caption>My savings</caption>
        <tr>
            <th>Month</th>
            <th>Savings</th>
        </tr>
        <tr>
            <td>January</td>
            <td>$100</td>
        </tr>
    </table>
    <br>
    <table>
        <caption style="caption-side:bottom">My savings</caption>
        <tr>
            <th>Month</th>
            <th>Savings</th>
        </tr>
        <tr>
            <td>January</td>
            <td>$100</td>
        </tr>
    </table>`,
    `
    <style>
        table, th, td {
          border: 1px solid black;
          border-collapse: collapse;
          padding: 8px 14px;
        }
        th {
          font-size: 32px;
          color: white;
          background-color: brown;
        }
        td {
          font-size: 20px;
          color: blue;
        }
        table.center {
          margin-left: auto;
          margin-right: auto;
        }
    </style>`]
    const codeExemple4 = `<h1>HTML colgroup tag</h1>
    <table>
      <colgroup>
        <col span="2" style="background-color: green; color: white" />
        <col style="background-color: tomato" />
      </colgroup>
      <tr>
        <th>STUDENT</th>
        <th>COURSE</th>
        <th>AGE</th>
      </tr>
      <tr>
        <td>Manas Chhabra</td>
        <td>BCA</td>
        <td>19</td>
      </tr>
      <tr>
        <td>Anurag Gupta</td>
        <td>B.TECH</td>
        <td>23</td>
      </tr>
    </table>`
    const codeExemple5 =  [`<table className="classTable">
        <tr>
            <th colspan="3">First Row</th>
        </tr>
        <tr>
            <td>First Cell</td>
            <td>Second Cell</td>
            <td>Third Cell</td>
        </tr>
    </table>`,
    `
    <style>
        table, th, td {
            border: 1px solid black;
            border-collapse: collapse;
            padding: 8px 14px;
        }
        th {
            font-size: 32px;
            color: white;
            background-color: brown;
        }
        table.center {
            margin-left: auto;
            margin-right: auto;
        }
    </style>`
    ]
    const codeExemple6 = [`     <table className="classTable" border="1">
       <tr>
         <th border="1">Header 1</th>
         <th border="1">Header 2</th>
         <th border="1">Header 3</th>
       </tr>
       <tr>
         <td rowspan="2" className="bg-danger">Row 1, Cell 1 </td>
         <td>Row 1, Cell 2</td>
         <td>Row 1, Cell 3</td>
       </tr>
       <tr>
         <td>Row 2, Cell 2</td>
         <td>Row 2, Cell 3</td>
       </tr>
       <tr>
         <td>Row 3, Cell 1</td>
         <td>Row 3, Cell 2</td>
         <td>Row 3, Cell 3</td>
       </tr>
     </table>`,
     `
    <style>
       table, th, td {
           border: 1px solid black;
           border-collapse: collapse;
           padding: 8px 14px;
       }
       th {
           font-size: 32px;
           color: white;
           background-color: brown;
       }
       table.center {
           margin-left: auto;
           margin-right: auto;
       }
    </style>`]
    return(
<section className="section-conetent">
    <h1 className="heading-style">HTML table</h1>
    <article className="mt-5">
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
            <CodeHighlighter file_name="index.html" code={codeExemple1[0]} head={codeExemple1[1]} language="html" is_html={true} title="Underline" addClass="mt-3 mb-3" copie={true}/>
            <Result title='Table of Savings' logo={props.html_logo} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
                <table id="a_tablE">
                    <tr>
                        <th>Month</th> 
                        <th>Savings</th>
                    </tr>
                    <tr>
                        <td>January</td>
                        <td>$100</td>
                    </tr>
                    <tr>      
                        <td>February</td>
                        <td>$120</td>
                    </tr>
                    <tr>
                        <td>March</td>
                        <td>$140</td>
                    </tr>
                </table>
            </Result>
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
            <CodeHighlighter file_name="index.html" code={codeExemple2[0]} head={codeExemple2[1]} language="html" is_html={true} title="Table" addClass="mt-3 mb-3" copie={true}/>
            <Result title='Table' logo={props.html_logo} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
                <table className="b_tablE"><tr> <th>Month</th> <th>Savings</th> </tr>  <tr> <td>January</td> <td>$100</td> </tr> <tr> <td>February</td> <td>$80</td> </tr></table>
            </Result>
        </div>
    </article>
    <article>
        <h2 className="title-h2">2. الوسم caption </h2>
        <p className="style_divv">
            يحدد الوسم <kbd>&lt;caption&gt;</kbd> شرح الجدول.<br/>
            يجب إدخال الوسم <kbd>&lt;caption&gt;</kbd> مباشرة بعد علامة <kbd>&lt;table&gt;</kbd><br/>
        </p>
        <div className="sum_exemple_style">
            <div className="mital">مثال : </div>
            <CodeHighlighter file_name="index.html" code={codeExemple3[0]} head={codeExemple3[1]} language="html" is_html={true} title="Table" addClass="mt-3 mb-3" copie={true}/>
            <Result title='Table' logo={props.html_logo} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
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
            </Result>
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
            <CodeHighlighter file_name="index.html" code={codeExemple4} language="html" is_html={true} title="Table" addClass="mt-3 mb-3" copie={true}/>
            <Result title='Table' logo={props.html_logo} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
                <h1>HTML colgroup tag</h1>
                <table>
                  <colgroup>
                    <col span="2" style={{backgroundColor: "green",color: "white"}} />
                    <col style={{backgroundColor: "tomato"}} />
                  </colgroup>
                  <tr>
                    <th>STUDENT</th>
                    <th>COURSE</th>
                    <th>AGE</th>
                  </tr>
                  <tr>
                    <td>Manas Chhabra</td>
                    <td>BCA</td>
                    <td>19</td>
                  </tr>
                  <tr>
                    <td>Anurag Gupta</td>
                    <td>B.TECH</td>
                    <td>23</td>
                  </tr>
                </table>
            </Result>
        </div>
    </article>
    <article>
        <h2 className="title-h2">4. السمات المستعملة </h2>
        <h5> 1 - السمة colspan </h5>
        <p className="style_divv">
            تحدد السمة <b>colspan</b> عدد الأعمدة التي يجب أن تمتد الخلية .
        </p>
        <div className="sum_exemple_style">
            <div className="mital">مثال : </div>
            <CodeHighlighter file_name="index.html" code={codeExemple5[0]} head={codeExemple5[1]} language="html" is_html={true} title="Table" addClass="mt-3 mb-3" copie={true}/>
            <Result title='Table' logo={props.html_logo} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
               <table className="b_tablE ml-0">
                    <tr>
                        <th colspan="3">First Row</th>
                    </tr>
                    <tr>
                        <td>First Cell</td>
                        <td>Second Cell</td>
                        <td>Third Cell</td>
                    </tr>
               </table>
            </Result>
        </div>
        <h5>2 - السمة rowspan </h5>
        <p  className="style_divv">
            تحدد السمة <b>rowspan</b>  عدد الأسطر التي يجب أن تمتد الخلية .
        </p>
        <div className="sum_exemple_style">
            <div className="mital">مثال : </div>
            <CodeHighlighter file_name="index.html" code={codeExemple6[0]} head={codeExemple6[1]} language="html" is_html={true} title="Table" addClass="mt-3 mb-3" copie={true}/>
            <Result  title='Table' logo={props.html_logo} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
                <table className="b_tablE" border="1">
                  <tr>
                    <th border="1">Header 1</th>
                    <th border="1">Header 2</th>
                    <th border="1">Header 3</th>
                  </tr>
                  <tr>
                    <td rowspan="2" className="bg-danger">Row 1, Cell 1 </td>
                    <td>Row 1, Cell 2</td>
                    <td>Row 1, Cell 3</td>
                  </tr>
                  <tr>
                    <td>Row 2, Cell 2</td>
                    <td>Row 2, Cell 3</td>
                  </tr>
                  <tr>
                    <td>Row 3, Cell 1</td>
                    <td>Row 3, Cell 2</td>
                    <td>Row 3, Cell 3</td>
                  </tr>
                </table>
            </Result>
        </div>
    </article>
</section>
)
}