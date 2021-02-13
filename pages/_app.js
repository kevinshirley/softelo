import React from 'react';

function Root({ Component, pageProps }) {
  return (
    <div className='content'>
      <Component {...pageProps} />
    </div>
  );
}

Root.getInitialProps = (async ({ Component, ctx }) => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return {
    pageProps
  };
});

// @ts-ignore
export default Root;
