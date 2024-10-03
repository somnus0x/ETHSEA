import type { AppProps } from 'next/app'
import { ThemeProvider } from '@/libs/next-themes'
import { Provider } from 'react-redux'

import '@/styles/globals.css'
import 'tailwindcss/tailwind.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      attribute="class"
      enableColorScheme={false}
      value={{ light: 'light', dark: 'un-dark dark' }}
      themes={['light', 'dark']}
    >
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
