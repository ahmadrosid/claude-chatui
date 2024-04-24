import MarkdownPrimitive from "react-markdown";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";
import toast from "react-hot-toast";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";

import { cn } from "@/utils/utils";
import { tw } from "@/utils/tw";
import { Fragment } from "react";

export function Markdown({
  className,
  ...props
}: React.ComponentProps<typeof MarkdownPrimitive>) {
  return (
    <MarkdownPrimitive
      remarkPlugins={[
        [
          remarkBreaks,
          {
            softbreak: "\n",
            strongbreak: "\n",
          },
        ],
        [remarkGfm, { singleTilde: false }],
      ]}
      // Don't want big headings in user content
      components={{
        h1: "h4",
        h2: "h4",
        h3: "h4",
        h4: "h4",
        h5: "h4",
        h6: "h4",
        a: (props) => (
          <a
            className="decoration-white/30 underline-offset-2 outline-none transition-opacity hover:opacity-80 focus:opacity-80"
            {...props}
          />
        ),
        pre: ({...props}) => (
            <Fragment
              {...props}
            />
          ),
        code({ node, inline, className, children, ...props }: any) {
          const match = /language-(\w+)/.exec(className || "");

          return !inline && match ? (
            <div>
              <div className="flex justify-between items-center pb-1.5 px-3 rounded-t-md bg-neutral-600" style={{marginBottom: '-0.8rem'}}>
                <div>
                  <p className="text-xs text-text-400">{match[1]}</p>
                </div>
                <button onClick={() => toast.success('Copied!')} className="flex flex-row gap-1 items-center hover:bg-bg-200 p-1 py-0.5 rounded-md transition-opacity delay-100 text-xs">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                    className="mr-1 text-text-500"
                  >
                    <path d="M200,32H163.74a47.92,47.92,0,0,0-71.48,0H56A16,16,0,0,0,40,48V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm-72,0a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Zm72,184H56V48H82.75A47.93,47.93,0,0,0,80,64v8a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V64a47.93,47.93,0,0,0-2.75-16H200Z"></path>
                  </svg>
                  <span className="text-text-500">Copy code</span>
                </button>
              </div>
              <SyntaxHighlighter style={dracula} language={match[1]} PreTag='div' className='text-base'>
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            </div>
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
      }}
      allowedElements={[
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "a",
        "p",
        "ul",
        "ol",
        "li",
        "em",
        "strong",
        // 'del',
        "code",
        "pre",
        "br",
      ]}
      // `unwrapDisallowed` because **some text** should still render "some text" rather than nothing
      unwrapDisallowed
      // `skipHtml` still renders contents
      skipHtml
      className={cn(textClass, className)}
      {...props}
    />
  );
}

const textClass = tw`prose prose-sm prose-neutral prose-invert overflow-x-hidden`;
