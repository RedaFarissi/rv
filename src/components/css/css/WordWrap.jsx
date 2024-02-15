import { CodeHighlighter ,  Result} from "../../path";
import images from "../imagesCss";
import "./WordWrap.css"

export default function WordWrap(props){
  const codeExemple= { 
    css:`.box{
    width: 200px; 
    height: 200px; 
    background-color:thistle;
    padding: 9px;
}
.a { 
    word-wrap: break-word;
}
.b { 
    word-wrap: normal;
}`,
    head:`  
    <link rel="stylesheet" href="./index.css">`,
    code:`      <h1 The word-wrap Property</h1>
    <h2> word-wrap: break-word  </h2>
    <div class="box">
      <p class="a">
        https://www.google.com/search?q=url&oq=url&aqs=chrome..69i57j0i512l4j69i60l3.2059j0j7&sourceid=chrome&ie=UTF-8
      </p>
    </div>
    <h2> word-wrap: normal  </h2>
    <div class="box">
      <p class="b">
        https://www.google.com/search?q=url&oq=url&aqs=chrome..69i57j0i512l4j69i60l3.2059j0j7&sourceid=chrome&ie=UTF-8
      </p>
    </div>
`
}
  return(
  <section className="section-conetent">
    <h1 className="heading-style"> CSS Word-Wrap </h1>
    <article>
      <p className="style_divv mt-5">
          تتيح الخاصية <b>word-wrap</b> إمكانية كسر الكلمات الطويلة والالتفاف على السطر التالي.
      </p>

      <div className="mital">متال :  </div>
      <CodeHighlighter file_name="index.css" code={codeExemple.css} language="css" copie={true}/>
      <CodeHighlighter file_name="index.html" code={codeExemple.code} head={codeExemple.head} language="html" is_html={true} title="CSS Word-Wrap" addClass="mt-3 mb-3" copie={true}/>
      <Result title='CSS Word-Wrap' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/reda.html">
        <div className="style-result" style={{overflow:"auto"}}>
            <h1 className="h1">The word-wrap Property</h1>
            <h2> word-wrap: break-word  </h2>
            <div className="css-word-wrap-ex1-box">
              <p className="css-word-wrap-ex1-a">
                https://www.google.com/search?q=url&oq=url&aqs=chrome..69i57j0i512l4j69i60l3.2059j0j7&sourceid=chrome&ie=UTF-8
              </p>
            </div>
            <h2> word-wrap: normal  </h2>
            <div className="css-word-wrap-ex1-box">
              <p className="css-word-wrap-ex1-b">
                https://www.google.com/search?q=url&oq=url&aqs=chrome..69i57j0i512l4j69i60l3.2059j0j7&sourceid=chrome&ie=UTF-8
              </p>
            </div>
        </div>
      </Result>
    </article>
  </section>
    )
  }