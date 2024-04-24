import Head from 'next/head';
import { useRef, useState } from 'react';
import LoadingDots from '@/components/loading-dots';
import {
  createParser,
  ParsedEvent,
  ReconnectInterval,
} from 'eventsource-parser';
import {Markdown} from '@/components/markdown';

export default function AskPage() {
  const [loading, setLoading] = useState(false);
  const [question, setQuestion] = useState<string>('Write me python code to read, write and delete text file including the unit test.');
  const [answer, setAnswer] = useState<string>('');

  const bottomRef = useRef<null | HTMLDivElement>(null);

  const scrollIntoBottom = () => {
    if (bottomRef.current !== null) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const submitQuestion = async (e: any) => {
    e.preventDefault();
    setAnswer('');
    setLoading(true);
    const response = await fetch('/api/openai', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt: question,
      }),
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    // This data is a ReadableStream
    const data = response.body;
    if (!data) {
      return;
    }

    const onParse = (event: ParsedEvent | ReconnectInterval) => {
      if (event.type === 'event') {
        const data = event.data;
        try {
          const text = JSON.parse(data).text ?? '';
          setAnswer((prev) => prev + text);
        } catch (e) {
          console.error(e);
        }
      }
    };

    // https://web.dev/streams/#the-getreader-and-read-methods
    const reader = data.getReader();
    const decoder = new TextDecoder();
    const parser = createParser(onParse);
    let done = false;
    while (!done) {
      const { value, done: doneReading } = await reader.read();
      done = doneReading;
      const chunkValue = decoder.decode(value);
      parser.feed(chunkValue);
    }
    scrollIntoBottom();
    setLoading(false);
  };

  return (
    <div className="flex max-w-7xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Head>
        <title>Ask AI</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-1 w-full flex-col items-center justify-center px-4 mt-12 sm:mt-20">
        <h1 className="sm:text-6xl text-4xl max-w-6xl font-bold text-slate-900 dark:text-slate-300 text-center">
          Ask AI
        </h1>

        <div className="max-w-xl w-full dark:text-slate-300 text-center">
          <div className="flex mt-10 items-center space-x-3">
            <p className="text-left font-medium">
              Ask any question
            </p>
          </div>
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            rows={4}
            className="w-full rounded-md p-2 border border-gray-300 shadow-sm focus:border-black focus:ring-black my-5 bg-transparent dark:border-gray-700"
            placeholder={'e.g. How to become successful in life?'}
          />

          {!loading && (
            <button
              className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              onClick={(e) => submitQuestion(e)}
            >
              Submit &rarr;
            </button>
          )}
          {loading && (
            <button
              className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              disabled
            >
              <LoadingDots color="white" style="large" />
            </button>
          )}
        </div>
        <hr className="h-px bg-gray-700 border-1 dark:bg-gray-700" />
        <div className="space-y-10 my-10">
          {answer && (
            <>
              <div>
                <h2
                  className="sm:text-4xl text-3xl font-bold text-slate-900 mx-auto"
                  ref={bottomRef}
                >
                  Your generated bios
                </h2>
              </div>
              <div className="lg:prose-xs prose text-[15px] dark:prose-invert prose-h1:text-[3.25em] prose-a:text-primary prose-a:no-underline prose-blockquote:rounded prose-blockquote:bg-gray-600 prose-code:rounded-md prose-code:bg-gray-650 prose-code:p-1 prose-code:font-normal prose-code:text-gray-400 prose-code:before:hidden prose-code:after:hidden prose-table:border-b prose-table:border-gray-500 prose-tr:even:bg-gray-700 prose-th:p-2 prose-td:border-l prose-td:border-gray-500 prose-td:p-2 prose-td:last:border-r prose-img:rounded sm:text-[16px]">
                <Markdown>{answer}</Markdown>
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
};
