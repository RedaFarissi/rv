import { useState } from 'react';
import "./CodeCommand.sass"


export default function CodeCommand(props){
    const [copySuccess, setCopySuccess] = useState(false);
    const handleCopyClick = () => {
      const textArea = document.createElement('textarea');
      textArea.value = props.children;
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

    return(
        <div className="alert bg-dark text-light my-3 pb-0">
            <pre style={{overflow:"hidden"}} className={`positon-relative ${props.preClass}}`}>
                {props.children}
            </pre>
            <button 
              onClick={handleCopyClick} 
              className={`${(props.copy === true || props.copy === null)?"d-block":"d-none"} btn bg-dark position-absolute text-light btn-CodeCommand`}
            >  
                    {copySuccess ? 'Copied' : 'Copy'} 
            </button>
        </div>
    )
}