import Body from "../../text/Body";
import SubTitle from "../../text/SubTitle";
import Title from "../../text/Title";
import styles from "./HowtouseBody.module.css";

export default function HowtouseBody() {
	return (
		<div className={styles.wrapper}>
			<SubTitle level={2}>3X 활용법</SubTitle>
			<Title level={2}>3X의 핵심은 3가지에요</Title>
			<Title level={2}>웹사이트, 워크시트, 핸드북</Title>
			<Body level={2} className={styles.description}>
				UX공부부터 실무까지, 3X를 활용한다면 쉽게 UX방법론을 적용할 수 있어요
			</Body>
			<section className={styles.card}>
				<SubTitle level={3} className={styles.orangeTitle}>
					웹사이트
				</SubTitle>
				<Title level={3}>Cards 페이지에서</Title>
				<Title level={3}>UX방법론을 찾아내세요</Title>
				<section className={styles.descriptionWrapper}>
					<Body level={3} className={styles.cardDescription}>
						필터를 통해 프로젝트 단계별, 상황별, 참여자 별로
					</Body>
					<Body level={3} className={styles.cardDescription}>
						지금 당장 필요한 방법론이 무엇인지 찾을 수 있어요.
					</Body>
				</section>
			</section>
			<section className={styles.card}>
				<SubTitle level={3} className={styles.orangeTitle}>
					워크시트
				</SubTitle>
				<Title level={3}>워크시트를 채워나가며</Title>
				<Title level={3}>UX방법론을 적용해보세요</Title>
				<section className={styles.descriptionWrapper}>
					<Body level={3} className={styles.cardDescription}>
						혼자 또는 팀과 함께 워크시트의 설명을 따라 칸을 하나씩
					</Body>
					<Body level={3} className={styles.cardDescription}>
						채워나가다 보면, 방법론을 실무에 적용해 낼 수 있어요.
					</Body>
				</section>
			</section>
			<section className={styles.card}>
				<SubTitle level={3} className={styles.orangeTitle}>
					핸드북
				</SubTitle>
				<Title level={3}>핸드북으로 간편하게</Title>
				<Title level={3}>UX지식을 쌓으세요</Title>
				<section className={styles.descriptionWrapper}>
					<Body level={3} className={styles.cardDescription}>
						UX방법론의 쉽고 간략한 정보를 요약해 둔 핸드북이에요.
					</Body>
					<Body level={3} className={styles.cardDescription}>
						책상에 두고 손으로 넘기며 방법론을 살펴보세요.
					</Body>
					<Body level={3} className={styles.cardDescription}>
						UX 지식이 쑥쑥 쌓여요.
					</Body>
				</section>
			</section>
		</div>
	);
}
