export function Code({ code: code }: { code: string }) {
  return (
    <div className="font-mono text-sm p-4 bg-[#1e1e1e] rounded-lg overflow-auto">
      <pre className="!m-0">
        <code className="language-jsx">
          {code}
        </code>
      </pre>
    </div>
  );
}
