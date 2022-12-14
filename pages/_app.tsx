import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Script from "next/script";
import * as fbq from "../lib/fbpixel";
import * as ga from '../lib/ga';
import React, {useEffect} from "react";
import {useRouter} from "next/router";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    fbq.pageview()

    const handleRouteChange = (url: any) => {
      fbq.pageview()
      ga.pageview(url)
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return <>
    <Script
        id="fb-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', ${fbq.FB_PIXEL_ID});
          `
        }}
    />
    <Head>
      <meta name="facebook-domain-verification" content="c7pns0ybtixl43feet5fxorxqs5juj" />
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp
