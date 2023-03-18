import { useCallback } from "react";
import ArrowLeft from "../../icon/ArrowLeft";
import Link from "../../Link/Link";
import DownloadLine from "./DownloadLine";
import styles from "./PostBody.module.css";

interface IProp {
	contentHtml: string;
	title: string;
	figmaUrl?: string;
	workSheetUrl?: string;
}

export default function PostBody({ contentHtml, title, figmaUrl, workSheetUrl }: IProp) {
	const copyClickHandler = useCallback((e: any) => {
		e.preventDefault();

		const href = window.location.href;
		var tempElem = document.createElement("textarea");
		tempElem.value = href;
		document.body.appendChild(tempElem);
		tempElem.select();
		document.execCommand("copy");
		document.body.removeChild(tempElem);
	}, []);

	return (
		<section className={styles.wrapper}>
			<div className={styles.contentWrapper}>
				<div className={styles.content} dangerouslySetInnerHTML={{ __html: contentHtml }}></div>
				<section className={styles.downloadWrapper}>
					{workSheetUrl && <DownloadLine title={title} type="workSheet" url={workSheetUrl} />}
					{figmaUrl && <DownloadLine title={title} type="figma" url={figmaUrl} />}
				</section>
				<section className={styles.linkWrapper}>
					<Link href="/cards">
						<ArrowLeft />
						목록으로
					</Link>

					<Link href="#" onClick={copyClickHandler}>
						링크 복사
					</Link>
				</section>
			</div>
		</section>
	);
}
