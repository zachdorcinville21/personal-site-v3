import { Layout } from '@/components/Layout';
// import "@/styles/globals.css";
import type { AppProps } from 'next/app';
import { GlobalStyle } from '@/styles/global.styled';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/theme';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <GlobalStyle />
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
    );
}
