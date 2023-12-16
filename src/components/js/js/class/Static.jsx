import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Static(){
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
    <h1 className="heading-style heading-style-js-color">JavaScript Static</h1>
    <article>
        <p className="style_divv mt-5">
            يتم تعريف <b>static class</b> في الفئة نفسها.<br/>
            لا يمكنك استدعاء طريقة ثابتة على <b>object</b>، فقط على <b>object class</b>.<br/>
        </p> 
        <div className="mital"> متال 1 :  </div>
        <img src={images.js140_class_static2} className="img"/>
        <div className="styleee">
            <div className="h2"> JavaScript Class Static variable </div>
            <p>20</p>
        </div>
        <div className="mital"> متال 2 :  </div>
        <img src={images.js140_class_static} className="img"/>
        <div className="styleee">
            <h2>JavaScript Class Static Methods</h2>
            <p> A static method is created with the "static" keyword, and you can only call the  method on the class itself. </p>
            <p id="result"> Hello!! </p>
        </div>
    </article>
</section>
    )
}