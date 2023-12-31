import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function ClearInterval(){
    // let id = document.getElementById("h2")
    // let s=0 ; m=0 , h=0 ; 
    // var clear = setInterval( Clock ,1000)
    // function Clock(){
    //     if( s < 59)   s++;
    //     else{ m++;  s=0; 
    //         if(m == 60){ m=0; h++; } 
    //     }
    //     id.innerHTML = ` ${h} : ${m} : ${s} `
    // }
    // function stop_Inter(){
    //     clearInterval(clear)
    // }
    const code11 = `let variable =  setInterval( Function_name , milliseconds);

clearInterval(variable);`
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript clearInterval</h1>
    <article>
        <p className="style_divv mt-5">
            لمسح فاصل زمني ، قم إدخال قيمة  <bdi><b>setInterval()</b></bdi> داخل متغير تم قم بإسناد قيمة المتغير داخل <bdi><b>clearInterval()</b></bdi> .<br/>
            <CodeHighlighter code={code11} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        
        <div className="mital"> متال  :  </div>
        <img src={images.js36_clearInterval} className="img"/>
        <div className="styleee">
            <h2 id='h2'>  0 : 0 : 0  </h2>
            <button onclick="stop_Inter()" style={{outline:"none",borderRadius:"2px",border:"1px solid black"}}> STOP </button>
        </div>
    </article>
</section>
    )
}