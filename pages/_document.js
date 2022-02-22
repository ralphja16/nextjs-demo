import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,400;0,700;1,700&display=swap" rel="stylesheet" />
      </Head>
      <body className="bg-slate-300">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
