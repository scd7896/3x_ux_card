import { useCallback } from "react";

import Button from "../../Button/Button";
import Body from "../../text/Body";

import styles from "./DownloadSolid.module.css";

interface IProp {
	title: string;
	downloadLink: string;
}

export default function DownloadSolid({ title, downloadLink }: IProp) {
	const handleClick = useCallback(() => {
		const a = document.createElement("a");
		a.target = "_blank";
		a.href = downloadLink;
		a.click();
		a.remove();
	}, [downloadLink]);

	return (
		<section className={styles.wrapper}>
			<Body className={styles.title} level={2} style={{ fontWeight: "400" }}>
				<b>{title}</b> PDF 다운로드
			</Body>
			<Button className={styles.button} size="middle" onClick={handleClick}>
				다운로드
			</Button>
		</section>
	);
}
