import '@/styles/globals.css'
import { useRouter } from 'next/router'
import {Int}

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
