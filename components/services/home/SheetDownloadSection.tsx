import useWindowSize from "../../../hooks/useWindowSize";
import FadeInUpContainer from "../../layout/FadeInUpContainer";
import Title from "../../text/Title";
import SheetDownload from "./SheetDownload";
import styles from "./SheetDownloadSection.module.css";

export default function SheetDownloadSection() {
	const { isMobile } = useWindowSize();

	return (
		<section className={styles.wrapper}>
			<FadeInUpContainer>
				<div className={styles.titleWrapper}>
					{!isMobile ? (
						<Title level={2}>UX 비법 자료가 당신을 기다려요</Title>
					) : (
						<>
							<Title level={2}>UX 비법 자료가</Title>
							<Title level={2}>당신을 기다려요</Title>
						</>
					)}
				</div>
			</FadeInUpContainer>
			<div className={styles.sheetDownloadWrapper}>
				<section className={styles.sheetDownloadContainer}>
					<FadeInUpContainer>
						<SheetDownload
							link="/howtouse#fileDownload"
							title="인쇄해서 쓸 수 있는 방법론 카드와 워크 시트를 
한 곳에 모았어요"
							imgUrl="/img/main_prints.png"
						/>
					</FadeInUpContainer>
					{!isMobile && (
						<FadeInUpContainer>
							<div className={styles.hr}> </div>
						</FadeInUpContainer>
					)}
					<FadeInUpContainer>
						<SheetDownload
							reverse
							link="/cards"
							title="3X:UX Card만 있으면 UX방법론을 찾아 헤멜 필요 없어요"
							imgUrl="/img/main_uxcard.png"
							buttonText="방법론 보기"
						/>
					</FadeInUpContainer>
				</section>
			</div>
		</section>
	);
}
