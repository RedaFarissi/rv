import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import "./CodeHighlighter.sass"
import { useState } from 'react';

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

const CodeHighlighter = ({ code="", language , addClass , copie , number=false , title="Html Title",head="" , file_name=false}) => {
  const [copySuccess, setCopySuccess] = useState(false);

  const processedCode = language === "html" ? 
                            CadreHtml({children: code , title: title , head: head}) 
                            : code;

  const handleCopyClick = () => {
    const textArea = document.createElement('textarea');
    textArea.value = processedCode;
    // Style the textarea to make it invisible
    textArea.style.position = 'fixed';
    textArea.style.top = '0';
    textArea.style.left = '0';
    textArea.style.width = '2em';
    textArea.style.height = '2em';
    textArea.style.padding = '0';
    textArea.style.border = 'none';
    textArea.style.outline = 'none';
    textArea.style.boxShadow = 'none';
    textArea.style.background = 'transparent';
    document.body.appendChild(textArea);
    textArea.select();
    try {
      const success = document.execCommand('copy');
      setCopySuccess(success);
    }catch (err) {
      console.error('Unable to copy to clipboard.', err);
    }
    document.body.removeChild(textArea);
  };
  return (
    <div className={`${addClass} position-relative mt-3 mb-3`}>
      <div className={`file-name-title ps-3 m-0 ${(file_name)?"d-block":"d-none"}`} dir='ltr'>
        <span className='text-secondary'>{file_name}</span>
      </div>
      <SyntaxHighlighter language={language} className={`box-code d-block ${(file_name)?"pt-5":""} overflow-x`} showLineNumbers={number} style={tomorrow}>
        {processedCode}
      </SyntaxHighlighter>
      <button onClick={handleCopyClick} className={`button-copie ${(copie)?"d-block":"d-none"}`}>
        {copySuccess ? 'Copied' : 'Copy'}
      </button>
    </div>
  );
};


export default CodeHighlighter