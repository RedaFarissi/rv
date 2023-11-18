import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import "./CodeHighlighter.sass"
import { useState } from 'react';

const CodeHighlighter = ({ code, language , addClass , copie , number=false}) => {
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopyClick = () => {
    const textArea = document.createElement('textarea');
    textArea.value = code;
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
      <SyntaxHighlighter language={language} style={tomorrow} className="box-code overflow-x" showLineNumbers={number}>
        {code}
      </SyntaxHighlighter>
      <button onClick={handleCopyClick} className={`button-copie ${(copie)?"d-block":"d-none"}`}>
        {copySuccess ? 'Copied' : 'Copy'}
      </button>
    </div>
  );
};


export default CodeHighlighter