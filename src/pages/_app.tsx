import React, {FC} from 'react';
import type { AppProps } from 'next/app';
import { wrapper } from '../redux/store';
import '../styles/globals.css';

const App: FC<AppProps> = ({ Component, pageProps } : AppProps) => <Component {...pageProps} />;

export default wrapper.withRedux(App)  ;
