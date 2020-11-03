import Head from 'next/head'
import Layout from '../components/layout'

// pages/404.js
function Custom404() {
    return (
        <Layout>
            <Head>
                <title>404 - Page Not Found</title>
            </Head>
            <article>
                <h1>404 - Page Not Found</h1>
            </article>
        </Layout>
    )
}

export default Custom404