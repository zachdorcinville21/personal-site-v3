import { Layout } from '@/components/Layout';
import type { AppProps } from 'next/app';
import { GlobalStyle } from '@/styles/global.styled';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/theme';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Zachary Dorcinville | Welcome</title>
            </Head>
            <ThemeProvider theme={theme}>
                <Layout>
                    <GlobalStyle />
                    <Component {...pageProps} />
                </Layout>
            </ThemeProvider>
        </>
    );
}
