import type { AppProps } from "next/app";
import Head from "next/head";
import PageLayout from "../components/layout/PageLayout";

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
				<meta property="og:description" content="우리의 디자인을 위한 UX 방법론 모음" />
				<meta property="og:site_name" content="3X:UX Card" />
				<meta property="og:locale" content="ko_KR" />
			</Head>
			<PageLayout>
				<Component {...pageProps} />
			</PageLayout>
		</>
	);
}
