import '../app/styles/globals.css'
import type { AppProps } from 'next/app'
import { appWithTranslation } from "next-i18next";
import NProgress from 'nprogress'
import '../app/styles/nprogress.css'
import { useEffect } from 'react';
import { useRouter } from 'next/router'


function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    const handleStart = (url: any) => {
      console.log(`Loading: ${url}`)
      NProgress.start()
    }
    const handleStop = () => {
      NProgress.done()
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }
  }, [router])

  return <Component {...pageProps} />
}

export default appWithTranslation(MyApp);
