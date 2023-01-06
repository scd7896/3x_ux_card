import Title from "../../text/Title";
import SheetDownload from "./SheetDownload";
import styles from "./SheetDownloadSection.module.css";

export default function SheetDownloadSection() {
	return (
		<section className={styles.wrapper}>
			<div className={styles.titleWrapper}>
				<Title level={2}>UX 비법 자료가 당신을 기다려요</Title>
			</div>
			<div className={styles.sheetDownloadWrapper}>
				<section className={styles.sheetDownloadContainer}>
					<SheetDownload
						link=""
						title="인쇄해서 쓸 수 있는 방법론 카드와 워크 시트를 
한 곳에 모았어요"
					/>
					<div className={styles.hr}> </div>
					<SheetDownload
						reverse
						link=""
						title="인쇄해서 쓸 수 있는 방법론 카드와 워크 시트를 
한 곳에 모았어요"
					/>
				</section>
			</div>
		</section>
	);
}
