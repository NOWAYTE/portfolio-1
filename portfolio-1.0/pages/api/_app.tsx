// pages/_app.tsx

import { AppProps } from 'next/app';
import '../styles/globals.css'; // Example: Import global CSS
import Layout from '@/app/layout';

function MyApp({ Component, pageProps }: AppProps) {
  // Any initializations or setup you want to do globally can go here
  // For example, initializing a state provider, setting up context, etc.

  return (
    <>
      {/* Example: Include a layout component */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
