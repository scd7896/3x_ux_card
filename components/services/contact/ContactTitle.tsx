import Body from "../../text/Body";
import SubTitle from "../../text/SubTitle";
import Title from "../../text/Title";

import styles from "./ContactTitle.module.css";

export default function ContactTitle() {
	return (
		<section className={styles.wrapper}>
			<SubTitle className={styles.membersContact} level={2}>
				Members & Contact
			</SubTitle>
			<Title className={styles.title} level={2}>
				<div>3명의 디자이너와</div>
				<div>개발자, 데이터 분석가로</div>
				<div>이루어진 팀이에요</div>
			</Title>
			<Body className={styles.body} level={2}>
				<div>더 넓은 통찰력이 필요한 사람들을 위해, 디자인적 관점의 문제해결 능력의 확장 방안을 연구합니다.</div>
				<div>3X로 디자인에 대한 어려움을 낮추고 모두가 디자이너가 될 수 있는 가이드를 추구합니다</div>
			</Body>
		</section>
	);
}
