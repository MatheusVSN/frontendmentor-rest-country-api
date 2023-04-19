import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-light-grayish-blue dark:bg-very-dark-desaturated-blue">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
