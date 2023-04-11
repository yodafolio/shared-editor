import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'react-quill/dist/quill.snow.css'

function MyApp({ Component, pageProps }: AppProps) {
  // console.log('----- 1', Component)
  // console.log('----- 2', pageProps)

  return <Component {...pageProps} />
}

export default MyApp
