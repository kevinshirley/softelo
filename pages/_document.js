import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class Root extends Document {
  render() {
    return (
      <Html lang={this.props.__NEXT_DATA__.query.language}>
        <Head />
        <body className='body'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Root;
