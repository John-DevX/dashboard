import '../styles/globals.css';
import '../styles/aside.css';
import '../styles/search.css';
import '../styles/profile.css';
import '../styles/container.css';
import '../styles/analytics.css';
import '../styles/developer.css';
import type { AppProps } from 'next/app'
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
