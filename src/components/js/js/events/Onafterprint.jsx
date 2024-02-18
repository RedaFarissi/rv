import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Onafterprint(){
    const codeExemple1= { 
        head:`
        <style>
          
        </style>`,
        code: `      <h2 id="result"></h2>
          
         <script src="./index.js"></script>`,
        script:``
        }
    
    return(
  <section className="section-conetent">
    <h1 className="heading-style">JavaScript onafterprint</h1>
    <article>
        <p className="style_divv mt-5">
            يقع حدث <b>onafterprint</b>  بعد الطباعة مباشرة .<br/>
            <b>تلميح</b>: حدث <b>onafterprint</b> هو عكس حدث <b>onbeforeprint</b>.
        </p>

        <div className="mital"> متال :  </div>
        <ul>
            <li>في المتال التالي قمنا بستعمال <b>onbeforeprint</b> لتغيير التصميم قبل الطباعة .</li>
            <li>تم <b>onafterprint</b> لإعدة التصميم إلى شكله الأصلي بعد الطباعة . </li>
        </ul>
        <img src={images.js54_afterprint} alt="onafterprint" className="img"/>
        <img src={images.js54_afterprint_2} alt="onafterprint" className="img"/>
        <img src={images.js54_afterprint_3} alt="onafterprint" className="img"/>
        <img src={images.js54_afterprint_2} alt="onafterprint" className="img"/>
    </article>
</section>
    )
}