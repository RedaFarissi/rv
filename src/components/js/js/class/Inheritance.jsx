import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Inheritance(){
    // function super_function(){
    //     alert("first name : Reda last name : Eskouni") ;
    //     alert("Hello Reda");
    //     document.getElementById("btn_test").removeEventListener("click" ,super_function )
    // }
    // document.getElementById("btn_test").addEventListener("click" ,super_function )

    const codeExemple1= { 
    code: `       <h2 id="result"></h2>

     <script src="./index.js"></script>`,
    script:``
    };
    const codeExemple2= { 
    code: `       <h2 id="result"></h2>

     <script src="./index.js"></script>`,
    script:``
    };
    const codeExemple3= { 
    code: `       <h2 id="result"></h2>

     <script src="./index.js"></script>`,
    script:``
    };
    const codeExemple4= { 
    code: `       <h2 id="result"></h2>

     <script src="./index.js"></script>`,
    script:``
    }
    const codeExemple5= { 
    code: `       <h2 id="result"></h2>

     <script src="./index.js"></script>`,
    script:``
    }
    const codeExemple6= { 
    code: `       <h2 id="result"></h2>

     <script src="./index.js"></script>`,
    script:``
    }
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript Inheritance</h1>
    <article>
        <h2 className="title-h2">1 - Inheritance</h2>
        <p className="style_divv">
            <b>Inheritance</b>  وتعني وراثة .<br/>
            الوراثة مفيدة لإعادة استخدام الكود: إعادة استخدام خصائص وطرق <b>class</b> موجودة عند إنشاء <b>class</b> جديدة.<br/>
            لإنشاء وراثة <b>class</b> ، استخدم الكلمة الأساسية <b>extends</b>.<br/>
            ترث ال <b>class</b> التي تم إنشاؤها باستخدام ميراث  جميع <b>methods</b> من <b>class</b> لأخرى .<br/>
        </p>
        <div className="mital">متال :  </div>
        <img src={images.js142_class_Inheritance} className="img"/>
        <div className="styleee img">
            <h2>JavaScript Class Inheritance</h2>
            <p className="Sty"> Use the "extends" keyword to inherit all methods from another class. </p>
            <p className="Sty"> Use the "super" method to call the parent's constructor function. </p>
            <p id="resuLt"> I have a Ford, it is a Mustang </p>
        </div>
    </article>
    <article>
        <h2 className="title-h2">2 - <bdi>super()</bdi></h2>
        <p className="style_divv">
            طريقة <bdi><b>super()</b></bdi> تشير إلى ال <b>class</b> الأب.<br/>
            من خلال استدعاء طريقة <bdi><b>super()</b></bdi> في طريقة <b>constructor</b> ، فإننا نطلق على طريقة <b>constructor</b> الخاصة بالوالدين ونحصل على إمكانية الوصول إلى <b>properties</b> و <b>methods</b> الخاصة بالوالدين    
        </p>
        <div className="mital">متال :  </div>
        <img src={images.js142_class_Inheritance3} className="img"/>
        <div className="styleee img">
            <button id="btn_test" className="btn btn-primary"> click here </button> 
        </div>
    </article>
    <article>
        <h2 className="title-h2">3 - Getters and Setters</h2>
        <p className="style_divv">
            يتيح لك <b>classes</b> أيضًا استخدام أدوات <b>getters</b> و <b>setters</b>.<br/>
            قد يكون من الذكاء استخدام <b>getters</b> و <b>setters</b> مع <b>properites</b> ، خاصة إذا كنت تريد القيام بشيء خاص بالقيمة قبل إعادتها ، أو قبل تعيينها.<br/>
            لإضافة <b>getters</b> و <b>setters</b> في <b>class</b> ، استخدم الكلمات الأساسية <b>get</b> و <b>set</b>.
        </p>
        <div className="mital">متال :  </div>
        <img src={images.js142_class_Inheritance2} className="img"/>
        <div className="styleee img">
            <h2>JavaScript Class Gettter/Setter</h2>
            <p>A demonstration of how to add getters and setters in a class, and how to use the getter to get the property value.</p>
            <p id="res">Ford get</p>
        </div>
    </article>
</section>
    )
}