import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";
import { useState, useEffect } from 'react';

export default function DateJS(){
    const [currentDate, setCurrentDate] = useState(new Date());
    useEffect(() => {
        setCurrentDate(new Date()); 
    },[]); 


    const codeExemple1= { 
    code: `     <h2 id="Date">  </h2>
    
     <script src="./index.js"></script>`,
    script:`let currentDate = new Date();
document.getElementById("Date").innerHTML = currentDate;`
    }
    const codeExemple2= { 
    code: `     <h2 id="Date">  </h2>
    
     <script src="./index.js"></script>`,
    script:`document.getElementById("Date").innerHTML = new Date(2021, 7, 17, 10, 33, 30, 0);`
    }
    const codeExemple3= { 
    code: `     <h2 id="Date">  </h2>
    
     <script src="./index.js"></script>`,
    script:`document.getElementById("Date").innerHTML = new Date(2023, 12, 14);`
    }
    const codeExemple4= { 
    code: `     <h2 id="Date">  </h2>
    
     <script src="./index.js"></script>`,
    script:`document.getElementById("Date").innerHTML = new Date("October 17, 2023 11:14:00");`
    }
    return(
<section className="section-conetent">
    <h1 className="heading-style">JavaScript Date</h1>
    <article className="mt-5">
        <h2 className="title-h2">1. التاريخ </h2>
        <p className="style_divv">
            بشكل افتراضي ، ستستخدم <b>JavaScript</b> المنطقة الزمنية للمتصفح وتعرض التاريخ كسلسلة نصية كاملة
            <CodeHighlighter code={`let variable = new Date()`} language="js" addClass="mt-3 mb-3" copie={true}  />  
        </p>
        <div className="mital">متال 1 :  </div>
        <ul><li>من خلال الكائن <b><bdi>Date()</bdi></b> يمكن للمتصفح عرض التاريخ الحالي لك .</li></ul>
        <CodeHighlighter file_name="index.html"code={codeExemple1.code} language="html" is_html={true} title="Date" addClass="mt-3 mb-3" copie={true}  number={false}/>  
        <CodeHighlighter file_name="index.js" code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={false}/>
        <Result title='Date' logo={images.html_logo} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2> {currentDate.toString()} </h2>
        </Result>
        <div className="mital"> متال 2 :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple2.code} language="html" is_html={true} title="Date" addClass="mt-3 mb-3" copie={true}  number={false}/>  
        <CodeHighlighter file_name="index.js" code={codeExemple2.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={false}/>
        <Result title='Date' logo={images.html_logo} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2> Tue Aug 17 2021 10:33:30 GMT+0100 (GMT+01:00) </h2>
        </Result>
        <div className="mital"> متال 3 :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple3.code} language="html" is_html={true} title="Date" addClass="mt-3 mb-3" copie={true}  number={false}/>  
        <CodeHighlighter file_name="index.js" code={codeExemple3.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={false}/>
        <Result title='Date' logo={images.html_logo} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2> Sun Jan 14 2024 00:00:00 GMT+0100 (GMT+01:00) </h2>
        </Result>
    </article>
    <article>
        <h2 className="title-h2">2. سلسلة التاريخ</h2>
        <p className="style_divv">
            يقوم  التاريخ <b><bdi>Date()</bdi></b> بإنشاء كائن تاريخ جديد من سلسلة التاريخ
            <CodeHighlighter code={`let variable = new Date("October 17, 2021 11:14:00")`} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital"> متال :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple4.code} language="html" is_html={true} title="Date" addClass="mt-3 mb-3" copie={true}  number={false}/>  
        <CodeHighlighter file_name="index.js" code={codeExemple4.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={false}/>
        <Result title='Date' logo={images.html_logo} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>Tue Oct 17 2023 11:14:00 GMT+0100 (GMT+01:00)</h2>
        </Result>
    </article>
</section>
    )
}