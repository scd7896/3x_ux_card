import { useCallback } from "react";
import { push } from "../../../lib/notification";
import ArrowLeft from "../../icon/ArrowLeft";
import Link from "../../Link/Link";
import Body from "../../text/Body";
import DownloadLine from "./DownloadLine";
import styles from "./PostBody.module.css";

interface IProp {
	contentHtml: string;
	title: string;
	figmaUrl?: string;
	workSheetUrl?: string;
}

export default function PostBody({ contentHtml, title, figmaUrl, workSheetUrl }: IProp) {
	const clickShareButton = useCallback((e: any) => {
		e.preventDefault();

		if (typeof navigator.share === "undefined") {
			const href = window.location.href;
			var tempElem = document.createElement("textarea");
			tempElem.value = href;
			document.body.appendChild(tempElem);
			tempElem.select();
			document.execCommand("copy");
			document.body.removeChild(tempElem);
			push({
				message: (
					<Body level={2} className={styles.message}>
						<b>링크가 복사되었어요!</b> 원하는 곳에 붙여넣으세요.
					</Body>
				),
				type: "check",
			});
		} else {
			window.navigator.share({
				url: window.location.href,
				title: title,
			});
		}
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
					<Link href="/cards" className={styles.link}>
						<ArrowLeft />
						목록으로
					</Link>

					<Link href="#" onClick={clickShareButton} className={styles.link}>
						공유하기
					</Link>
				</section>
			</div>
		</section>
	);
}
