import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Assignment(){
    const codeExemple1= { 
    code: `     <h2>The = Operator</h2>
     <p id="de"></p>
    
     <script src="./index.js"></script>`,
    script:` let x = 10;
document.getElementById("de").innerHTML = x;`
    }
    const codeExemple2= { 
    code: `     <h2>The += Operator</h2>
     <p id="de"></p>
    
     <script src="./index.js"></script>`,
    script:`let x = 10;
document.getElementById("de").innerHTML = x += 5 ;`
    }
    const codeExemple3= { 
    code: `     <h2>The -= Operator</h2>
     <p id="de"></p>
    
     <script src="./index.js"></script>`,
    script:`let x = 10;
document.getElementById("de").innerHTML = x -= 5 ;`
    }
    const codeExemple4= { 
    code: `     <h2>The *= Operator</h2>
     <p id="de"></p>
    
     <script src="./index.js"></script>`,
    script:`let x = 10;
document.getElementById("de").innerHTML = x *= 5 ;`
    }
    const codeExemple5= { 
    code: `     <h2>The /= Operator</h2>
     <p id="de"></p>
    
     <script src="./index.js"></script>`,
    script:`let x = 10;
document.getElementById("de").innerHTML = x /= 5 ;`
    }
    const codeExemple6= { 
    code: `     <h2>The %= Operator</h2>
     <p id="de"></p>
    
     <script src="./index.js"></script>`,
    script:`let x = 10;
document.getElementById("de").innerHTML = x %= 5 ;`
    }    
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript Assignment</h1>
    <article className="mt-5">
        <p className="style_divv">
            تقوم عوامل التعيين بتعيين قيم لمتغيرات <b>JavaScript</b>. <br/>
        </p>
        <table className="table" dir="ltr">
            <thead className="bg-secondary">
                <tr  className="text-center fs-5"> <th> Operator </th> <th> Example </th> <th> Same As</th> </tr>
            </thead>
            <tbody>
                <tr> <td>= </td> <td>x = y  </td> <td>x = y </td> </tr>
                <tr> <td>+=</td> <td>x += y </td> <td>x = x + y</td></tr>
                <tr> <td>-+</td> <td>x -= y </td> <td>x = x - y</td></tr>
                <tr> <td>*=</td> <td>x *= y </td> <td>x = x * y</td></tr>
                <tr> <td>/=</td> <td>x /= y </td> <td>x = x / y</td></tr>
                <tr> <td>%=</td> <td>x %= y </td> <td>x = x % y</td></tr>
                <tr> <td>{">>"}=</td> <td>x {">>"}= y </td> <td>x = x {">>"} y</td></tr>
                <tr> <td>{"<<"}=</td> <td>x {"<<"}= y </td> <td>x = x {"<<"} y</td></tr>
                <tr> <td>&=</td> <td>x &= y </td> <td>x = x & y</td></tr>
                <tr> <td>^=</td> <td>x ^= y </td> <td>x = x ^ y</td></tr>
                <tr> <td>|=</td> <td>x |= y </td> <td>x = x | y</td></tr>
                <tr> <td>**=</td> <td>x **= y </td> <td>x = x ** y</td></tr>
            </tbody>
        </table>
    </article>
    <article>
        <h2 className="title-h2">1. عامل الإسناد</h2>
        <div className="mital"> متال :  </div>
        <ul><li>يعين عامل الإسناد(<b style={{color:"darkorange"}}>=</b>) قيمة إلى متغير.</li></ul>
        <CodeHighlighter file_name="index.html"code={codeExemple1.code} language="html" is_html={true} title="Assignment" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Assignment' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>The = Operator</h2>
            <p>10</p>
        </Result>
    </article>
    <article>
        <h2 className="title-h2">2. عامل التخصيص <bdi>(+=)</bdi></h2>
        <div className="mital"> متال :  </div>
        <ul><li> يضيف عامل التخصيص += قيمة إلى متغير . </li></ul>
        <CodeHighlighter file_name="index.html"code={codeExemple2.code} language="html" is_html={true} title="Assignment" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple2.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Assignment' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>The += Operator</h2>
            <p>15</p>
        </Result>
    </article>
    <article>
        <h2 className="title-h2">3. عامل التخصيص <bdi>(-=)</bdi></h2>
        <div className="mital"> متال :  </div>
        <ul><li> يطرح عامل التخصيص -= قيمة من متغير. </li></ul>
        <CodeHighlighter file_name="index.html"code={codeExemple3.code} language="html" is_html={true} title="Assignment" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple3.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Assignment' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>The -= Operator</h2>
            <p>5</p>
        </Result>
    </article>
    <article>
        <h2 className="title-h2">4. عامل التخصيص <bdi>(*=)</bdi></h2>
        <div className="mital"> متال :  </div>
        <ul><li> * = عامل الإسناد يضرب متغيرًا.  </li></ul>
        <CodeHighlighter file_name="index.html"code={codeExemple4.code} language="html" is_html={true} title="Assignment" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple4.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Assignment' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>The *= Operator</h2>
            <p>50</p>
        </Result>
    </article>
    <article>
        <h2 className="title-h2">5. عامل التخصيص <bdi>(/=)</bdi></h2>
        <div className="mital"> متال :  </div>
        <ul><li> /= عامل الإسناد يقسم متغيرًا.  </li></ul>
        <CodeHighlighter file_name="index.html"code={codeExemple5.code} language="html" is_html={true} title="Assignment" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple5.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Assignment' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>The /= Operator</h2>
            <p>2</p>
        </Result>
        <div className="styleee"><h2>The /= Operator</h2>2</div>
    </article>
    <article>
        <h2 className="title-h2">6. عامل التخصيص <bdi>(%=)</bdi></h2>
        <div className="mital"> متال :  </div>
        <ul><li> %= عامل الإسناد يسند باقي القسمة.  </li></ul>
        <CodeHighlighter file_name="index.html"code={codeExemple6.code} language="html" is_html={true} title="Assignment" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple6.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Assignment' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>The %= Operator</h2>
            <p>0</p>
        </Result>
    </article>
</section>
    )
}