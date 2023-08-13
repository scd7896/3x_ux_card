import { handbookUrl, worksheetUrl } from "../../../lib/env";
import gaLogger from "../../../lib/log";
import Title from "../../text/Title";
import DownloadSolid from "./DownloadSolid";
import styles from "./PostFooter.module.css";

interface IProp {
	id: string;
}

export default function PostFooter({ id }: IProp) {
	return (
		<section className={styles.wrapper}>
			<div className={styles.contentWrapper}>
				<Title level={3} style={{ fontWeight: "400" }}>
					3X:UX Card의 <b>모든 방법론 자료를</b>
				</Title>
				<Title level={3} style={{ fontWeight: "400" }}>
					한번에 받고 싶다면?
				</Title>
			</div>
			<DownloadSolid
				title="핸드북 전체"
				downloadLink={handbookUrl}
				onClick={() => gaLogger.clickCardDetailDownloadAllHandbook(id)}
			/>
			<DownloadSolid
				title="워크시트 전체"
				downloadLink={worksheetUrl}
				onClick={() => gaLogger.clickCardDetailDownloadAllWorksheet(id)}
			/>
		</section>
	);
}
