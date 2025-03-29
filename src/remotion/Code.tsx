export function Code({ code }: { code: string }) {
  return (
    <div className="overflow-auto rounded-lg bg-[#1e1e1e] p-4·font-mono text-sm">
      <pre className="!m-0">
        <code className="language-jsx">{code}</code>
      </pre>
    </div>
  );
}
