import Title from "../../text/Title";
import DownloadSolid from "./DownloadSolid";
import styles from "./PostFooter.module.css";

export default function PostFooter() {
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
				downloadLink="https://drive.google.com/drive/folders/1g6hCNsP-gc5vVlnzP8oitws7Zu9pzu5Z"
			/>
			<DownloadSolid
				title="워크시트 전체"
				downloadLink="https://drive.google.com/drive/folders/1g6hCNsP-gc5vVlnzP8oitws7Zu9pzu5Z"
			/>
		</section>
	);
}
