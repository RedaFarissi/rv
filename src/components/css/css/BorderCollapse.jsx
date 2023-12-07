import { CodeHighlighter ,  Result} from "../../path";
import images from "../imagesCss";
import "./BorderCollapse.css"

export default function BorderCollapse(props){

    const codeExemple= { 
        head:`  
    <style> 
        table, td, th {
            border: 1px solid black;
        }
    
          #table1 {
            border-collapse: separate;
          }
    
        #table2 {
          border-collapse: collapse;
        }   
    </style>`,
        code:`     <table id="table1">
        <thead>
            <tr>  <th>First Name</th>  <th>Last Name</th>  </tr>
        </thead>
        <tbody>
            <tr>  <td>Reda</td>  <td>Eskouni</td> </tr>
            <tr>  <td>Adil</td>  <td>Eskouni</td>  </tr>
        </tbody>
    </table>
    <hr/>
    <table id="table2">
        <thead>
            <tr>  <th>First Name</th>  <th>Last Name</th>  </tr>
        </thead>
        <tbody>
            <tr>  <td>Reda</td>  <td>Eskouni</td>  </tr>
            <tr>  <td>Adil</td>  <td>Eskouni</td>  </tr>
        </tbody>
    </table>`
    }
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-css-color"> CSS Border-Collapse </h1>
    <article>
        <div class="style_divv mt-5">
            تستعمل الخاصية <b>border-collapse</b> مع الجداول و تحدد الخاصية تصغير الحدود ما إذا كان يجب طي حدود الجدول إلى حد واحد أو فصلها كما هو الحال في <b>HTML</b> القياسي.<br/>
            تستقبل الخاصية <b>border-collapse</b> القيم التالية :
            <ul dir="ltr">
                <li> <b>border-collapse : separate</b></li>
                <li> <b>border-collapse : collapse</b></li>
            </ul>
        </div>
        <div class="mital"> متال : </div>
        <CodeHighlighter file_name="index.html"code={codeExemple.code} head={codeExemple.head} language="html" is_html={true} title="CSS Border-Collapse" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Border-Collapse' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <table className="css-border-collapse-ex1"  id="css-border-collapse-ex1-table1">
                <thead><tr><th className="css-border-collapse-ex1">First Name</th><th className="css-border-collapse-ex1">Last Name</th></tr></thead>
                <tbody>
                  <tr><td className="css-border-collapse-ex1">Reda</td><td className="css-border-collapse-ex1">Eskouni</td></tr>
                  <tr><td className="css-border-collapse-ex1">Kamal</td><td className="css-border-collapse-ex1">Malik</td></tr>
                </tbody>
            </table>
            <hr/>
            <table className="css-border-collapse-ex1" id="css-border-collapse-ex1-table2">
                <thead><tr><th className="css-border-collapse-ex1">First Name</th><th className="css-border-collapse-ex1">Last Name</th></tr></thead>
                <tbody>
                  <tr><td className="css-border-collapse-ex1">Reda</td><td className="css-border-collapse-ex1">Eskouni</td></tr>
                  <tr><td className="css-border-collapse-ex1">Kamal</td><td className="css-border-collapse-ex1">Malik</td></tr>
                </tbody>
            </table>
        </Result>
    </article>
</section>
)
}