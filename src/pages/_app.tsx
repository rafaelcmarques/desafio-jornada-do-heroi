import type { AppProps } from 'next/app'
import { Sidebar } from '../components/Sidebar'
import { SearchProvider } from '../hooks/Search'
import '@/src/styles/global.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SearchProvider>
      <div className="grid grid-cols-app min-h-screen">
        <Sidebar />
        <main className="px-4 pb-12 pt-8">
          <Component {...pageProps} />
        </main>
      </div>
    </SearchProvider>
  )
}
