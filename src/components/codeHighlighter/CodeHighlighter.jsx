import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeHighlighter = ({ code, language }) => {
  return (
    <SyntaxHighlighter language={language} style={solarizedlight} className="col-5 bg-dark box-code">
      {code}
    </SyntaxHighlighter>
  );
};


export default CodeHighlighter