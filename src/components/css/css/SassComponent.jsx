import { CodeHighlighter ,  Result , CodeCommand} from "../../path";
import images from "../imagesCss";
import "./SassComponent.sass"


export default function SassComponent(props){
    const codeExemple1= { 
        sassFlex:`%flex-center-center
display: flex
justify-content: center
align-items: center`,
        css:`@import "./sass-flex"
@mixin animationRotate($name , $x , $y ) 
    animation: #{"{"}$name{"}"} 2s linear infinite
    @keyframes #{"{"}$name{"}"}
        0%
            transform: rotateX($x) rotateY($y) rotateZ(0deg)
        100%
            transform: rotateX($x) rotateY($y) rotateZ(360deg)
    
.container-test
    @extend %flex-center-center
    background-color: black
    width: 100%
    height: 700px
    .ring
        width: 200px
        height: 200px
        border-radius: 50% 
        position: absolute
        &:nth-child(1)
            border-top: 5px solid green
            @include animationRotate( "ring-animatio-1" , 35deg , -45deg) 
        &:nth-child(2)
            border-top: 5px solid red
            @include animationRotate( "ring-animation-2" , 50deg , 10deg) 
        &:nth-child(3)
            border-top: 5px solid yellow
            @include animationRotate( "ring-animation-3" , 35deg , 55deg)`,
    head:`  
   <link rel="stylesheet" href="./index.css">`,
    code:`      <div class='container-test'>
          <div class='ring'></div>
          <div class='ring'></div>
          <div class='ring'></div>
      </div>`
    }
    const codeExemple2= { 
        
        css:`@import "./sass-flex"
*
    margin: 0
    padding: 0
    
.container-test-2 
    @extend %flex-center-center
    background-color: black
    width: 100%
    height: 500px
    h2
        position: relative
        margin: 0
        font-size: 4.5rem
        color: white
        z-index: 1
        overflow: hidden
        span
            color: red
        &:before
            content: ''
            position: absolute
            left: 120%
            width: 120%
            height: 100%
            background: linear-gradient(90deg, transparent 0%, black 5%, black 100%)
            animation: animate-heading 6s linear forwards infinite
            @keyframes animate-heading
                0%
                    left: 110%
                100% 
                    left: -20%`,
    head:`  
   <link rel="stylesheet" href="./index.css">`,
    code:`      <div class="container-test-2">
          <h2> <span>P</span>articles Di<span>st</span>ortion Effects </h2>
      </div>  `
    }
    const codeExemple3= { 
    css:`.container-3
container-box
    height: 600px
    background: black
    .container-h2
        text-align: center 
        line-height: 600px
        font-size: 5rem
        letter-spacing: 0.2em
        span
            color: white
            opacity: 0
            display: inline-block
            animation: animate-name 1s linear forwards infinite
            @keyframes animate-name 
                0%
                    opacity: 0
                    transform: rotateY(90deg)
                    filter: blur(10px)
                100%  
                    opacity: 1
                    transform: rotateY(0deg)     
                    filter: blur(0)`,
    head:`  
   <link rel="stylesheet" href="./index.css">`,
    code:`      <div class='container-3'>
    <div class='container-box'>
       <div class="container-h2">
             <span>R</span><span>e</span><span>d</span><span>a</span>
             <span>E</span><span>s</span><span>k</span><span>o</span><span>u</span><span>n</span><span>i</span>
       </div>
    </div>
</div>`
    }
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-css-color"> SASS ('front/css/sass.css')</h1>
    <article>
        <h2 className="title-h2"> 1 - install sass from npm </h2>
        <CodeCommand>npm install -g sass</CodeCommand>
        
        <b>Get version sass </b>
        <CodeCommand>sass --version</CodeCommand>
        <ul>
            <li> Search for "Command Prompt" or "cmd" in the Windows Start menu. </li>
            <li> Right-click on "Command Prompt" and select "Run as administrator. </li>
            <li> In the elevated Command Prompt, Try : </li>
        </ul>
        <CodeCommand>where sass</CodeCommand>
        <ul>
            <li>On Windows: You can add the directory to your PATH by opening the System Properties, going to the "Advanced" tab, clicking on "Environment Variables," and then editing the PATH variable to include the directory where Sass is installed.</li>
        </ul>
        <img src={images.sass1} className="img"/>
        <b>Create output.css with CMD </b>
        <img src={images.sass2} className="img"/>
    </article>
    <article>  
        <div className="mital">متال :  </div>
        <CodeHighlighter file_name="_sass-flex.sass" code={codeExemple1.sassFlex} language="sass" copie={true}/>
        <CodeHighlighter file_name="index.sass" code={codeExemple1.css} language="sass" copie={true}/>
        <CodeHighlighter file_name="index.html" code={codeExemple1.code} head={codeExemple1.head} language="html" title="SASS" addClass="mt-3 mb-3" copie={true}/>
        <Result title='SASS' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/reda.html">
            <div className='sass-ex1-container-test'>
                <div className='ring'></div>
                <div className='ring'></div>
                <div className='ring'></div>
            </div>
        </Result>
        <div className="mital"> متال 2 :  </div>
        <CodeHighlighter file_name="_sass-flex.sass" code={codeExemple1.sassFlex} language="sass" copie={true}/>
        <CodeHighlighter file_name="index.sass" code={codeExemple2.css} language="sass" copie={true}/>
        <CodeHighlighter file_name="index.html" code={codeExemple2.code} head={codeExemple2.head} language="html" title="SASS" addClass="mt-3 mb-3" copie={true}/>
        <Result title='SASS' logo={images.html_logo} styleAdd="sass-ex2-styleAdd"  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/reda.html">
            <div className="sass-ex2-container-test-2">
                <h2> <span>P</span>articles Di<span>st</span>ortion Effects </h2>
            </div>        
        </Result>
        <div className="mital"> متال 3 :  </div>
        <CodeHighlighter file_name="index.sass" code={codeExemple3.css} language="sass" copie={true}/>
        <CodeHighlighter file_name="index.html" code={codeExemple3.code} head={codeExemple3.head} language="html" title="SASS" addClass="mt-3 mb-3" copie={true}/>
        <Result title='SASS' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/reda.html">
            <div className='sass-ex3-container-3'>
                <div className='container-box'>
                   <div className="container-h2">
                         <span>R</span><span>e</span><span>d</span><span>a</span>
                         <span>E</span><span>s</span><span>k</span><span>o</span><span>u</span><span>n</span><span>i</span>
                   </div>
                </div>
            </div>
        </Result>
    </article>
</section>
)
}