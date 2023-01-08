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
			</Head>
			<PageLayout>
				<Component {...pageProps} />
			</PageLayout>
		</>
	);
}
