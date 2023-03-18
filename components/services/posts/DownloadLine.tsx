import { useCallback } from "react";

import ArrowLeft from "../../icon/ArrowLeft";
import Body from "../../text/Body";
import styles from "./DownloadLine.module.css";

interface IProp {
	url: string;
	type: "workSheet" | "figma";
	title: string;
}

export default function DownloadLine({ title, type, url }: IProp) {
	const description = type === "workSheet" ? "인쇄용 워크시트 다운로드" : "피그마 워크시트 바로가기";

	const handleClickListener = useCallback(() => {
		const a = document.createElement("a");
		a.href = url;
		a.target = "_blank";
		a.click();
		a.remove();
	}, [url]);

	return (
		<section className={styles.wrapper} onClick={handleClickListener}>
			<Body level={2}>
				<span className={styles.title}>{title} </span>
				{description}
			</Body>
			<ArrowLeft isReverse />
		</section>
	);
}
