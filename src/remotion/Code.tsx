import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialOceanic } from 'react-syntax-highlighter/dist/esm/styles/prism';

export function Code({ code }: { code: string }) {
  return (
    <>
      <SyntaxHighlighter
        language="typescript"
        style={materialOceanic}
        showLineNumbers={true}
      >
        {code}
      </SyntaxHighlighter>
    </>
  );
}
