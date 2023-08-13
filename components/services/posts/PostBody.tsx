import { useCallback } from "react";
import gaLogger from "../../../lib/log";
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
	id: string;
}

export default function PostBody({ contentHtml, title, figmaUrl, workSheetUrl, id }: IProp) {
	const clickShareButton = useCallback((e: any) => {
		e.preventDefault();
		gaLogger.clickCardDetailShare(id);
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
						링크가 복사되었어요!
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

	const bodyClickListener = useCallback(
		(e: React.MouseEvent) => {
			let target: HTMLElement | null = e.target as HTMLElement;
			while (target) {
				if (target.tagName.toLowerCase() === "iframe") {
					gaLogger.clickPostIframe(id);
				}
				target = target.parentElement;
			}
		},
		[id]
	);

	return (
		<section className={styles.wrapper}>
			<div className={styles.contentWrapper}>
				<div
					className={styles.content}
					dangerouslySetInnerHTML={{ __html: contentHtml }}
					onClick={bodyClickListener}
				></div>
				<section className={styles.downloadWrapper}>
					{workSheetUrl && (
						<DownloadLine
							title={title}
							type="workSheet"
							url={workSheetUrl}
							onClick={() => gaLogger.clickCardDetailWorksheetDownload(id)}
						/>
					)}
					{figmaUrl && (
						<DownloadLine
							title={title}
							type="figma"
							url={figmaUrl}
							onClick={() => gaLogger.clickCardDetailWroksheetGoFigma(id)}
						/>
					)}
				</section>
				<section className={styles.linkWrapper}>
					<Link href="/cards" className={styles.link} onClick={() => gaLogger.clickCardDetailGotoList(id)}>
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
