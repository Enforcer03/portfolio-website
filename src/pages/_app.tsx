import 'tailwindcss/tailwind.css';
import '../globalStyles.scss';

import type {AppProps} from 'next/app';
import {memo} from 'react';

import ThemeProvider from '../context/ThemeContext';

const MyApp = memo(({Component, pageProps}: AppProps): JSX.Element => {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
});

export default MyApp;
