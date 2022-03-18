import React, {FC} from 'react';
import type { AppProps } from 'next/app';
import { wrapper } from '../redux/store';
import '../styles/globals.css';
import {ThemeProvider} from 'next-themes'
import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import  TestModal  from '../components/testModal/TestModal';


const App: FC<AppProps> = ({ Component, pageProps } : AppProps) =>
<ThemeProvider attribute='class'>
    <MantineProvider>
      <ModalsProvider>
    <Component {...pageProps} />
		</ModalsProvider>
    </MantineProvider>
</ThemeProvider>


export default wrapper.withRedux(App)  ;
