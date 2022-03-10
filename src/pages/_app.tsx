import React, {FC} from 'react';
import type { AppProps } from 'next/app';
import { wrapper } from '../redux/store';
import '../styles/globals.css';
import Layout from '../components/layout/Layout';

const App: FC<AppProps> = ({ Component, pageProps } : AppProps) =>
 <Layout>
    <Component {...pageProps} />
</Layout> 

export default wrapper.withRedux(App)  ;
