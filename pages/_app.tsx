import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import PageLayout from "../components/layout/PageLayout";
import { IS_PRODUCTION } from "../lib/env";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          as="style"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/static/pretendard-dynamic-subset.css"
        />
        <link rel="stylesheet" as="style" href="/color.css" />
        <title>3X:UX Card</title>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="3X:UX Card" />
        <meta property="og:image" content="/img/OG_IMG.png" />
        <meta
          property="og:description"
          content="우리의 디자인을 위한 UX 방법론 모음"
        />
        <meta property="og:site_name" content="3X:UX Card" />
        <meta property="og:locale" content="ko_KR" />
        <meta
          name="naver-site-verification"
          content="1083b40c5803c35421c0e4be126674521292e570"
        />
      </Head>
      <PageLayout>
        {IS_PRODUCTION && (
          <>
            <Script id="hj-script" strategy="afterInteractive">{`
    (function (c, s, q, u, a, r, e) {
        c.hj=c.hj||function(){(c.hj.q=c.hj.q||[]).push(arguments)};
        c._hjSettings = { hjid: a };
        r = s.getElementsByTagName('head')[0];
        e = s.createElement('script');
        e.async = true;
        e.src = q + c._hjSettings.hjid + u;
        r.appendChild(e);
    })(window, document, 'https://static.hj.contentsquare.net/c/csq-', '.js', 5253198);
`}</Script>
            <Script
              id="google-tag-manager"
              strategy="afterInteractive"
            >{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5SCT7FV');`}</Script>

            <Script
              id="google-analytics"
              strategy="afterInteractive"
              src="https://www.googletagmanager.com/gtag/js?id=G-T6W039SRH8"
            ></Script>

            <Script id="google-analytics" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
							
							function gtag(){window.dataLayer.push(arguments)}
							
							gtag('js', new Date()); gtag('config', 'G-T6W039SRH8');`}
            </Script>
          </>
        )}
        <Component {...pageProps} />
      </PageLayout>
    </>
  );
}
