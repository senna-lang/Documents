import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { CodeComponent } from "react-markdown/lib/ast-to-react";

const customCode: CodeComponent = ({ inline, className, children }) => {
  const style = vscDarkPlus;
  const match = /language-(\w+)(:?.+)?/.exec(className || "");
  const lang = match && match[1] ? match[1] : "";
  const name = match && match[2] ? match[2].slice(1) : "";
  return !inline && match ? (
    <div>
      {name && <span className="bg-stone-200 py-1 px-2 text-xs">{name}</span>}
      <SyntaxHighlighter style={style} language={lang} PreTag="div" className="md-codeblock">
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    </div>
  ) : (
    <code className="rounded-md bg-stone-200 text-red-600">{children}</code>
  );
};
export const CodeBlock = {
  code: customCode,
};
