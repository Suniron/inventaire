import React from "react";
import { createCss } from "@stitches/css";
import Document, { Html, Head, Main, NextScript } from "next/document";

import { config } from "../styles";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const css = createCss(config);
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => <App {...props} serverCss={css} />,
      });

    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {css.getStyles().map((css, index) => (
            <style key={index}>
              {css.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, "")}
            </style>
          ))}
          {/* <style>{css.getStyles()}</style> */}
        </>
      ),
    };
  }

  render(): JSX.Element {
    return (
      <Html lang="fr">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
