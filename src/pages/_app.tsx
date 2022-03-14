//
// Application
// ...
//

import { SessionProvider } from 'next-auth/react'
import { AppProps } from 'next/app'

import '@/scss/main.scss'

function Application({ Component, pageProps: { session, ...pageProps } }: AppProps): JSX.Element {
    return (
        <SessionProvider session={session}>
            <Component {...pageProps} />
        </SessionProvider>
    )
}

export default Application

//
// END
//
