import { CodeHighlighter ,  Result} from "../../path";
import images from "../imagesCss";
import "./Focus.css"

export default function Focus(props){
    const codeExemple1= { 
    head:`  
    <style> 
        #input1:focus{
            width:60%;
            background-color:magenta;
            padding:9px 25px;
            border:2px wavy darkblue;
            border-radius:20% 9px;
            color: white;
            font-size: xx-large;
        }
        #input2:focus{
            width:40%;
            background-color:green;
            text-align: center;
            border:0.5px solid darkblue;
            border-radius: 9px;
            color: aliceblue;
            font-size: xx-large;
        }    
    </style>`,
    code:`      <input type="text" value="style1 focus" id="input1"/>
      <input type="text" value="style2 focus" id="input2"/>`
    }
    const codeExemple2= { 
    head:`  
    <style>
        #textarea{
            width: 80%;
            height: 20vh;
            border:3px solid gray;
            background-color: yellow;
        }
        #textarea:focus{
            background-image:linear-gradient(to left , red , green ,blue) ;
            font-size: larger;
            color: white; 
            border:9px dashed darkorange;  
            padding: 20px;
            margin-left: 9.9%;  
        }    
    </style>`,
    code:`      <textarea type="text" id="textarea"> textarea:focus click ici  </textarea>`
    }
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-css-color"> CSS Focus </h1>
    <article>
        <p className="style_divv mt-5">
            تستخدم الخاصية <b>focus</b>  في لغة <b>CSS</b> لإستهداف عنصر عندما يتلقى التركيز ( يتم تنشيطه عند النقر ).<br/>
            غالبا ما يتم إستعمال الخاصية <b>focus</b> مع وسوم الإدخال  .  
        </p>
        <div className="mital">متال  :  </div>
        <ul><li> أنقر على أزرار الإدخال لفهم بشكل أفضل عن إستخدامات الخاصية focus </li></ul>
        <CodeHighlighter file_name="index.html"code={codeExemple1.code} head={codeExemple1.head} language="html" title="CSS Focus" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Focus' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <input type="text" value="style1 focus" id="css-focus-ex1-input1"/>
            <input type="text" value="style2 focus" id="css-focus-ex1-input2"/>
        </Result>
        
        <div className="mital">متال 2 : </div>
        <ul><li> يمكنك أيضا تغيير خصائص CSS بعد إضافة الخاصية focus  </li></ul>
        <CodeHighlighter file_name="index.html"code={codeExemple2.code} head={codeExemple2.head} language="html" title="CSS Focus" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Focus' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <textarea type="text" id="css-focus-ex2-textarea"> textarea:focus click ici  </textarea>
        </Result>
    </article>
</section>
)
}