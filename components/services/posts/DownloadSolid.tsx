import { useCallback } from "react";

import Button from "../../Button/Button";
import SubTitle from "../../text/SubTitle";
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
			<SubTitle level={2} style={{ fontWeight: "400" }}>
				<b>{title}</b> PDF 다운로드
			</SubTitle>
			<Button size="middle" onClick={handleClick} style={{ fontSize: "14px", height: "36px" }}>
				다운로드
			</Button>
		</section>
	);
}
