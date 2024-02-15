import { CodeHighlighter ,  Result , InteractivCss} from "../../path";
import { useState , useRef ,useEffect} from "react";
import images from "../imagesCss";
import "./WordSpacing.css"

export default function WordSpacing(props){
    const codeExemple= { 
      css:`.a  {  word-spacing: normal; }
.b  {  word-spacing: 0.4em; }
.c {  word-spacing: 1em; }
.d {  word-spacing: -0.05em; }
.e {  word-spacing: 6px; }`,
    head:`  
    <link rel="stylesheet" href="./index.css">`,
    code:`      <p class="a"> word spacing in CSS </p>
      <p class="b"> word spacing in CSS </p>
      <p class="c"> word spacing in CSS </p>
      <p class="d"> word spacing in CSS </p>
      <p class="e"> word spacing in CSS </p>`
    }

    const [selectedValue, setSelectedValue] = useState("30px");
    const resultRef = useRef()
    const inputRef = useRef()
    const handleWordSpacing = (event) => {
      const { value } = event.target;
      setSelectedValue(value);
      resultRef.current.style.wordSpacing = value
    };
    useEffect(() => {
      inputRef.current.click();
    }, []);
    
    return(
<section className="section-conetent">
    <h1 className="heading-style"> CSS Word-Spacing </h1>
    <article>
      <p className="style_divv mt-5">
          تعيّن الخاصية <b>word-spacing</b> في لغة <b>CSS</b>  سلوك التباعد الأفقي بين كلمات النص. تُضاف هذه القيمة إلى التباعد الطبيعي بين الكلمات أثناء عرض النص. تؤدي القيم الموجبة لتباعد الكلمات  ، بينما تعمل القيم السالبة لتباعد الأحرف على تقريب الكلمات من بعضها.
      </p>
      <div className="mital">متال  :  </div>
      <CodeHighlighter file_name="index.css" code={codeExemple.css} language="css" copie={true}/>
      <CodeHighlighter file_name="index.html" code={codeExemple.code} head={codeExemple.head} language="html" is_html={true} title="CSS Word-Spacing" addClass="mt-3 mb-3" copie={true}/>
      <Result title='CSS Word-Spacing' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/reda.html">
        <p className="css-word-spacing-ex1-a"> word spacing in CSS</p>
        <p className="css-word-spacing-ex1-b"> word spacing in CSS</p>
        <p className="css-word-spacing-ex1-c"> word spacing in CSS</p>
        <p className="css-word-spacing-ex1-d"> word spacing in CSS</p>
        <p className="css-word-spacing-ex1-e"> word spacing in CSS</p>
      </Result>
  </article>
  <article>
      <div className="mital"> متال توضيحي تفاعلي  :</div>
      <InteractivCss 
          property="word-spacing" 
          value={selectedValue}
          classParent="css-word-spacing-ex2-parent"
          classChild="css-word-spacing-ex2"  
          resultRef={resultRef}
          textInResult="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, distinctio in adipisci accusantium saepe mollitia nesciunt deserunt itaque hic commodi, porro exercitationem."
        >
            <ul className="p-0">
                <li><input type="checkbox" name="bo-sh6" ref={inputRef} onChange={handleWordSpacing} checked={selectedValue === 'normal'} value="normal" /> &nbsp; normal</li>
                <li><input type="checkbox" name="bo-sh6" onChange={handleWordSpacing} checked={selectedValue === '5rem'} value="5rem"/> &nbsp; 5rem </li>
                <li><input type="checkbox" name="bo-sh6" onChange={handleWordSpacing} checked={selectedValue === '2px'} value="2px"/> &nbsp; 2px </li>
                <li><input type="checkbox" name="bo-sh6" onChange={handleWordSpacing} checked={selectedValue === '-12px'} value="-12px"/> &nbsp; -12px</li>
            </ul>
        </InteractivCss>     
  </article>

</section>
)
}