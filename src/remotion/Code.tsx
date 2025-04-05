import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export function Code({ code }: { code: string }) {
  return (
    <>
      <SyntaxHighlighter
        language="typescript"
        style={vscDarkPlus}
        showLineNumbers={true}
        wrapLines={true}
        wrapLongLines={true}
        customStyle={ { width: '50%', margin: '0', backgroundColor: '#263238' } }
      >
        {code}
      </SyntaxHighlighter>
    </>
  );
}
