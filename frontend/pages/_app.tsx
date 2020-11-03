import '../styles/global.scss'
import { AppProps } from 'next/app'
import Head from 'next/head'
import Layout from '../components/layout'

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default App