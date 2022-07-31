import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="manifest" href="/site.webmanifest" />
                    <link rel="apple-touch-icon" href="/icon.png" />
                    <link rel="icon" href="/icon.ico" />
                    <meta name="theme-color" content="#fff" />


                    <link rel="preload" href="/styles/BetterGrade-519DV.ttf" as="font" type="font/ttf" crossOrigin="true" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="true" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />

                    {/* Custom Fonts */}
                    <link rel='preload' as='style' href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@305;430;500;700&family=PT+Sans&display=swap" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@305;430;500;700&family=PT+Sans&display=swap"
                        rel="stylesheet"
                    />
                    
                    {/* Custom Fonts Usage
                        font-family: 'Open Sans', sans-serif; // Headings
                        font-family: 'PT Sans', sans-serif;   // Body
                    */}

                    {/* For MUI Material Font Icons */}
                    <link rel='preload' as='style' href="https://fonts.googleapis.com/icon?family=Material+Icons" />
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/icon?family=Material+Icons"
                    />
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