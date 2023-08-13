import { useCallback } from "react";

import ArrowLeft from "../../icon/ArrowLeft";
import Body from "../../text/Body";
import styles from "./DownloadLine.module.css";

interface IProp {
	url: string;
	type: "workSheet" | "figma";
	title: string;
	onClick?: () => void;
}

export default function DownloadLine({ title, type, url, onClick }: IProp) {
	const description = type === "workSheet" ? "인쇄용 워크시트" : "피그마 워크시트";
	const doingText = type === "workSheet" ? "다운로드" : "바로가기";

	const handleClickListener = useCallback(() => {
		onClick?.();
		const a = document.createElement("a");
		a.href = url;
		a.target = "_blank";
		a.click();
		a.remove();
	}, [url]);

	return (
		<section className={styles.wrapper} onClick={handleClickListener}>
			<Body level={2} className={styles.descriptionWrapper}>
				<div>
					<span className={styles.title}>{title} </span>
					<span>{description}</span>
				</div>
				<span>{doingText}</span>
			</Body>
			<ArrowLeft isReverse />
		</section>
	);
}
