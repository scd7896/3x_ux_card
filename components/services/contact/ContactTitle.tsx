import Body from "../../text/Body";
import SubTitle from "../../text/SubTitle";
import Title from "../../text/Title";

export default function ContactTitle() {
	return (
		<section style={{ marginBottom: "48px", textAlign: "center", marginTop: "100px" }}>
			<SubTitle level={2} style={{ display: "block", marginBottom: "16px" }}>
				Members & Contact
			</SubTitle>
			<Title level={2} style={{ marginBottom: "8px" }}>
				<div>3명의 디자이너와</div>
				<div>개발자, 데이터 분석가로</div>
				<div>이루어진 팀이에요</div>
			</Title>
			<Body level={2}>
				<div>더 넓은 통찰력이 필요한 사람들을 위해, 디자인적 관점의 문제해결 능력의 확장 방안을 연구합니다.</div>
				<div>3X로 디자인에 대한 어려움을 낮추고 모두가 디자이너가 될 수 있는 가이드를 추구합니다</div>
			</Body>
		</section>
	);
}
