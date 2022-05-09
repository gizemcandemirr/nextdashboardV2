import React, {FC} from 'react';
import type { AppProps } from 'next/app';
import { wrapper } from '../redux/store';
import '../styles/globals.css';
import {ThemeProvider} from 'next-themes'


const App: FC<AppProps> = ({ Component, pageProps } : AppProps) =>
<ThemeProvider attribute='class'>
  
    <Component {...pageProps} />
	
</ThemeProvider>


export default wrapper.withRedux(App)  ;
