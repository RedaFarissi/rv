const index8react_syntax_highlighter1=()=>{
  return`import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeExample = () => {
  const codeString = \`const greeting = 'Hello, world!';\`;

  return (
    <SyntaxHighlighter language="javascript" style={solarizedlight} showLineNumbers>
      {codeString}
    </SyntaxHighlighter>
  );
};

export default CodeExample;`
}


export default index8react_syntax_highlighter1;