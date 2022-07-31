import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin="true" />
                    <link rel='preload' as='style' href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@305;430;500;700&family=PT+Sans&display=swap" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@305;430;500;700&family=PT+Sans&display=swap"
                        rel="stylesheet"
                    />
                    {/* Custom Fonts Usage
                        font-family: 'Open Sans', sans-serif; // Headings
                        font-family: 'PT Sans', sans-serif;   // Body
                    */}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument