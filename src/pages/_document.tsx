import PrelineScript from "@/components/preline-script";
import { Html, Head, Main, NextScript } from "next/document";
import { Toaster } from "react-hot-toast";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="dark:bg-slate-900">
        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{ duration: 2000 }}
        />
        <Main />
        <NextScript />
        <PrelineScript />
      </body>
    </Html>
  );
}
