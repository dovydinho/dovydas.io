import { Html, Main, Head, NextScript } from "next/document";

export default function Document(props) {
  return (
    <Html lang="en">
      <Head />
      <body className="text-gray-800 dark:text-gray-200 font-light">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
