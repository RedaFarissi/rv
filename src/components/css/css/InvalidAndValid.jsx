import { CodeHighlighter ,  Result} from "../../path";
import images from "../imagesCss";

export default function InvalidAndValid(props){
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-css-color"> CSS Invalid And Valid </h1>
    <article>
        <h3>1. الخاصية  invalid </h3>
        <div className="style_divv">
            تستعمل  <b>invalid</b>  مع عناصر ال <b>input</b>  وتسمح بإعطاء خصائص <b>CSS</b> إلى عناصر الإدخال عند إدخال نوع خاطئ أو إدخال عدد أحرف أقل مما تحديده داخل السمة <b>min</b> أو إدخال عدد أكتر مما تم تحديده داخل السمة <b>max</b> . <br/>
        </div>
        <div className="mital"> متال : </div>
        <ul>
            <li> عند إزالة القيمة داخل عنصر <b>input</b> سيتم إزالة الخصائص التي داخل <b>invalid</b>   </li>
            <li> سيتم إزالة الخصائص التي داخل <b>invalid</b> عند إدخال <b>email</b>  </li>
        </ul>
        <img src={images.css38_invalid} className="img"/>
        <div className="style-result">
        	<input type="email" value="redaEskouni" name="email" id="email"/><br/><br/>
        	<input type="submit" name="Submit" value="submit"/>
        </div>
    </article>
    <article>
        <h3>2. الخاصية  valid </h3>
        <div  className="style_divv">
            تستعمل  <b>valid</b>  مع عناصر ال <b>input</b>  وتسمح بإعطاء خصائص <b>CSS</b> عند إدخال البيانات بشكل صحيح . <br/>
        </div>
        <div className="sum_exemple_style">
        <div className="mital"> متال  : </div>
        <img src={images.css38_valid} className="img"/>
        <div className="style-result">
            <input type="email" value="redaEskouni@gmail.com" name="email"  id="Email"/><br/><br/>
        </div>
        </div>
        <div className="sum_exemple_style">
        <div className="mital"> متال 2 : </div>
        <ul><li>يفضل إستعمال الخصائص  invalid و valid مع على نفس العنصر قم بإدخال إيمايل للفهم بشكل أفضل . </li></ul>
        <img src={images.css38_valid_invalid} className="img"/>
        <div className="style-result">
          	<input type="email" value="redaEskouni@gmail.com" name="email"  id="emaiL"/><br/>
        </div>
        </div>
    </article>
 </section>
    )
}