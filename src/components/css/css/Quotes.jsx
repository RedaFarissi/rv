import { CodeHighlighter ,  Result} from "../../path";
import images from "../imagesCss";
import "./Quotes.css"

export default function Quotes(props){
    const codeExemple2= { 
        css:`#a {
    quotes: """ """;
}

#b {
    quotes: "(" ")" ''' ''';
}

#c {
    quotes: "<" ">"  "(" ")";
}`,
    head:`  
        <link rel="stylesheet" href="./index.css">`,
        code:`      <h2><q id="a">This is a quote.</q></h2>
          <h2><q id="b">This is a <q>quote</q> inside a quote.</q></h2>
          <h2><q id="c">This is a <q>quote</q> inside a quote.</q></h2>`
    }
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-css-color"> CSS Quotes </h1>
    <article>
        <p class="style_divv mt-5">
            تحدد الخاصية <b>quotes</b> نوع علامات الاقتباس الخاصة بالاقتباس .
        </p>
        <div class="mital">متال : </div>
        <CodeHighlighter file_name="index.css" code={codeExemple2.css} language="css" copie={true}/>
        <CodeHighlighter file_name="index.html" code={codeExemple2.code} head={codeExemple2.head} language="html" title="CSS Quotes" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Quotes' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/reda.html">
            <h2><q id="css-quotes-ex1-a">This is a quote.</q></h2>
            <h2><q id="css-quotes-ex1-b">This is a <q>quote</q> inside a quote.</q></h2>
            <h2><q id="css-quotes-ex1-c">This is a <q>quote</q> inside a quote.</q></h2>
        </Result>
    </article>
</section>
    )
}