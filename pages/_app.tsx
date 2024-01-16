import '../styles/globals.css'
import type { AppProps } from 'next/app'
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
      <Head>
          <meta name="facebook-domain-verification" content="c7pns0ybtixl43feet5fxorxqs5juj"/>
          <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet"/>
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS}`}/>
          <script
              dangerouslySetInnerHTML={{
                  __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${process.env.GOOGLE_ANALYTICS}', {
                          page_path: window.location.pathname,
                        });
                    `,
              }}
          />
          <script
              id="fb-pixel"
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
              fbq('track', 'PageView');
            `
              }}
          />
          <noscript
              dangerouslySetInnerHTML={{
                  __html: `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=${fbq.FB_PIXEL_ID}&ev=PageView&noscript=1" alt="fb_tag"/>`
              }}
          />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
      </Head>
      <Component {...pageProps} />
  </>
}

export default MyApp
