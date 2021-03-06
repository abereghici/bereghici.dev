import * as React from 'react';
import type { AppProps } from 'next/app';
import { GlobalStyles } from '@bereghici/design-system.global-styles';
import { ThemeProvider } from '@bereghici/design-system.theme';
import { GoogleAnalytics } from 'shared/analytics/google-analytics';
import '../styles/index.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <Component {...pageProps} />
      <GoogleAnalytics />
    </ThemeProvider>
  );
}
export default App;
