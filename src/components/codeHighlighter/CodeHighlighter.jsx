import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { useState } from 'react';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import "./CodeHighlighter.sass"
import "./CodeHighlighter.css"


const CodeHighlighter = ({ code="", is_html , language , addClass , copie , number=false , title="Html Title",head="" , file_name=false }) => {
    const [copySuccess, setCopySuccess] = useState(false);
    const processedCode = (is_html)?CadreHtml({children:code,title:title,head:head}):code;  
    const handleCopyClick = () => {
        const textArea = document.createElement('textarea');
        textArea.value = processedCode;
        textArea.style = `position:fixed;top:0;left:0;width:2em;height:2em;padding:0;border:none;outline:none;box-shadow:none;background:transparent;`
        document.body.appendChild(textArea);
        textArea.select();
        try {
          const success = document.execCommand('copy');
          setCopySuccess(success);
          setTimeout(()=>{
            setCopySuccess(false)
          },2500)
        }catch (err) {
          console.error('Unable to copy to clipboard.', err);
        }
        document.body.removeChild(textArea);
    };
    return (
    <div className={`${addClass} position-relative mt-3 mb-3`}>
      <div className={`file-name-title ps-3 m-0 ${(file_name)?"d-block":"d-none"}`} dir='ltr'>
        <span>{file_name}</span>
      </div>
      <SyntaxHighlighter language={language} className={`box-code d-block   ${(file_name)?"pt-5":""} overflow-x`} showLineNumbers={number} 
          style={vscDarkPlus}
      >
        {processedCode}
      </SyntaxHighlighter>
      <button onClick={handleCopyClick} className={`button-copie ${(copie)?"d-block":"d-none"}`}>
        {copySuccess ? 'Copied' : 'Copy'}
        <i className="fa-regular fa-file me-2"></i> 
      </button>
    </div>
  );
};



function CadreHtml(props,){
  return `<!DOCTYPE html>
<html>
<head>
   <title> ${props.title}  </title>
   <link rel="icon" href="./html_logo.png" type="image/png">
   <meta name="viewport" content="width=device-width, initial-scale=1"> ${props.head}
</head>
<body>
${props.children}
</body>
</html>`
}

export default CodeHighlighter;