import { CodeHighlighter ,  Result} from "../../path";
import images from "../imagesCss";
import "./TextDecoration.css";

export default function TextDecoration(props){
    const codeExemple1= { 
        css:`#title1{ text-decoration-line: overline; }
#title2{ text-decoration-line: underline; }
#title3{ text-decoration-line: line-through; }
#title4{ text-decoration-line: none; }`,
    head:`  
    <link rel="stylesheet" href="./index.css">`,
        code:`      <h2 id="title1"> overline </h2>
      <h2 id="title2"> underline </h2>
      <h2 id="title3"> line-through</h2> 
      <h2 id="title4"> none</h2>`
    }
    const codeExemple2= { 
        css:`#title1{ text-decoration-line: overline; }
#title2{ text-decoration-line: underline; }
#title3{ text-decoration-line: line-through; }
#title4{ text-decoration-line: none; }
h2{ text-decoration-color: red;}`,
    head:`  
    <link rel="stylesheet" href="./index.css">`,
        code:`      <h2 id="title1"> overline </h2>
      <h2 id="title2"> underline </h2>
      <h2 id="title3"> line-through</h2> 
      <h2 id="title4"> none</h2>`
    }
    const codeExemple3= { 
        css:`#title1{text-decoration-line: overline;text-decoration-style:dashed}
#title2{ text-decoration-line: overline;  text-decoration-style: dotted}
#title3{ text-decoration-line: overline; text-decoration-style: double}
#title4{ text-decoration-line: overline; text-decoration-style: none}
#title5{ text-decoration-line: overline; text-decoration-style: solid}
#title6{ text-decoration-line: overline; text-decoration-style: wavy}
#title7{ text-decoration-line: overline; text-decoration-style: inherit}
#title8{ text-decoration-line: overline; text-decoration-style: unset}`,
    head:`  
    <link rel="stylesheet" href="./index.css">`,
        code:`      <h2 id="title1">titlel</h2>
      <h2 id="title2">title2</h2>
      <h2 id="title3">title3</h2>
      <h2 id="title4">title4</h2>
      <h2 id="title5">title5</h2>
      <h2 id="title6">title6</h2>
      <h2 id="title7">title7</h2>
      <h2 id="title8">title8</h2>`
    }
    const codeExemple4= { 
        css:`#title1{ 
    text-decoration: overline red dashed; 
}
#title2{ 
    text-decoration: underline green double; 
}`,
    head:`  
    <link rel="stylesheet" href="./index.css">`,
        code:`      <h2 id="title1">titlel</h2>
      <h2 id="title2">title2</h2>`
    }
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-css-color"> CSS Text-Decoration </h1>
    <article>
        <p className="style_divv mt-5">
            تحدد خاصية <b>text-decoration</b> الزخرفة المضافة إلى النص ، وهي خاصية اختصار لـ:
            <ul dir="ltr">
                <li><b>text-decoration-line (required)</b></li>
                <li><b>text-decoration-color</b></li>
                <li><b>text-decoration-style</b></li>
            </ul>
        </p>
    </article>
    <article>
        <h2 className="title-h2">1. الخاصية  text-decoration-line</h2>
        <ul><li> تستعمل الخاصية <b>text-decoration-line</b> من أجل إنشاء خط جميل فوق أو وسط أو تحت العناصر أنضر المتال أسفله . </li></ul>
        <div className="mital"> متال :</div>
        <CodeHighlighter file_name="index.css" code={codeExemple1.css} language="css" copie={true}/>
        <CodeHighlighter file_name="index.html" code={codeExemple1.code} head={codeExemple1.head} language="html" is_html={true} title="CSS Text-Decoration" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Text-Decoration' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/reda.html">
            <h2 id="css-text-decoration-ex1-title1"> overline </h2>
            <h2 id="css-text-decoration-ex1-title2"> underline </h2>
            <h2 id="css-text-decoration-ex1-title3"> line-through</h2> 
            <h2 id="css-text-decoration-ex1-title4"> none</h2>
        </Result>
    </article>
    <article>
        <h2 className="title-h2">2. الخاصية  text-decoration-color</h2>
        <p className="style_divv"> تستعمل الخاصية <b>text-decoration-color</b> من أجل  إعطاء لون للخط الذي تم كتابته بواسطة الخاصية <b>text-decoration-line</b> . </p>
        <div className="mital"> متال :</div>
        <CodeHighlighter file_name="index.css" code={codeExemple2.css} language="css" copie={true}/>
        <CodeHighlighter file_name="index.html" code={codeExemple2.code} head={codeExemple2.head} language="html" is_html={true} title="CSS Text-Decoration" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Text-Decoration' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/reda.html">
            <h2 id="css-text-decoration-ex2-title1"> overline </h2>
            <h2 id="css-text-decoration-ex2-title2"> underline </h2>
            <h2 id="css-text-decoration-ex2-title3"> line-through</h2> 
            <h2 id="css-text-decoration-ex2-title4"> none</h2>
        </Result>
    </article>
    <article>
        <h2 className="title-h2">3. الخاصية  text-decoration-style</h2>
        <p className="style_divv"> 
            تستعمل الخاصية <b>text-decoration-style</b> من أجل إختيار نوع الخط و توجد عدة أنواع وهي كتالي  :
            <ul dir="ltr">
                <li><b>double</b></li>
                <li><b>dotted</b></li>
                <li><b>havy  </b></li>
                <li><b>solid </b></li>
                <li><b>dashed</b></li>
            </ul>
        </p>
        <div className="mital"> متال :</div>
        <CodeHighlighter file_name="index.css" code={codeExemple3.css} language="css" copie={true}/>
        <CodeHighlighter file_name="index.html" code={codeExemple3.code} head={codeExemple3.head} language="html" is_html={true} title="CSS Text-Decoration" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Text-Decoration' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/reda.html">
            <h2 id="css-text-decoration-ex3-title1">titlel</h2>
            <h2 id="css-text-decoration-ex3-title2">title2</h2>
            <h2 id="css-text-decoration-ex3-title3">title3</h2>
            <h2 id="css-text-decoration-ex3-title4">title4</h2>
            <h2 id="css-text-decoration-ex3-title5">title5</h2>
            <h2 id="css-text-decoration-ex3-title6">title6</h2>
            <h2 id="css-text-decoration-ex3-title7">title7</h2>
            <h2 id="css-text-decoration-ex3-title8">title8</h2>
        </Result>
        <ul><li>يمكنك كتابة العنصر <b>text-decoration</b> دفعتا واحدة بستعمال الطريقة المعروضة في المتال أسفله . </li></ul>
        <div className="mital"> متال :</div>
        <CodeHighlighter file_name="index.css" code={codeExemple4.css} language="css" copie={true}/>
        <CodeHighlighter file_name="index.html" code={codeExemple4.code} head={codeExemple4.head} language="html" is_html={true} title="CSS Text-Decoration" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Text-Decoration' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/reda.html">
            <h2 id="css-text-decoration-ex4-title1">titlel</h2>
            <h2 id="css-text-decoration-ex4-title2">title2</h2>
        </Result>
    </article>
</section>
)
}