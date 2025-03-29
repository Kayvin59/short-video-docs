import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedDarkAtom } from 'react-syntax-highlighter/dist/esm/styles/prism';

export function Code({ code }: { code: string }) {
  return (
/*     <div className="overflow-auto rounded-lg bg-[#1e1e1e] p-4·font-mono text-sm">
      <pre className="!m-0">
        <code className="language-jsx">{code}</code>
      </pre>
    </div> */
    <SyntaxHighlighter
      language="typescript"
      style={solarizedDarkAtom}
      showLineNumbers
    >
      {code}
    </SyntaxHighlighter>
  );
}
