import Body from "../../text/Body";
import SubTitle from "../../text/SubTitle";
import Title from "../../text/Title";
import styles from "./HowtouseHeader.module.css";

export default function HowtouseHeader() {
	return (
		<div className={styles.wrapper}>
			<img className={styles.bgimg} src="/img/howtouse-bg.png" />
			<div className={styles.howtouseCard}>
				<Title style={{ marginBottom: "48px" }} level={2}>
					3X: UX Card는
				</Title>
				<div className={styles.description}>
					<SubTitle level={1}>상황별 적합한 방법론을 찾고 싶은 UX디자이너, 설계자, 기획자</SubTitle>
					<span className={styles.subText}>를 위해,</span>
				</div>
				<div className={styles.description}>
					<SubTitle level={1}>언제든지 쉽고 빠르게 UX방법론을 확인</SubTitle>
					<span className={styles.subText}>할 수 있도록</span>
				</div>
				<div className={styles.description}>
					<SubTitle level={1}>실무에 활용 가능한 방법론 정보와 워크시트</SubTitle>
					<span className={styles.subText}>를 제공합니다.</span>
				</div>
				<div>
					<Body className={styles.btnText} level={3}>
						Using <span className={styles.highlight}>Eelevator Pitch</span>
					</Body>
				</div>
			</div>
		</div>
	);
}
