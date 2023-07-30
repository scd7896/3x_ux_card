import { useCallback } from "react";
import Button from "../../Button/Button";
import MailIcon from "../../icon/MailIcon";
import Body from "../../text/Body";
import SubTitle from "../../text/SubTitle";
import { ButtonText } from "../../text/Text";
import Title from "../../text/Title";
import styles from "./ContactCard.module.css";

interface IProp {
	member: "mj" | "donna" | "cha" | "server" | "iron";
}

const title = {
	mj: "선구안의 우직한 디자이너",
	donna: "이정표가 되는 디자이너",
	cha: "덕업일치를 실현중인 UX덕후",
	server: "재미를 찾아 탐구하는 개발자",
	iron: "휴먼 DB 데이터분석가",
};

const description = {
	mj: (
		<>
			<div>집요하게 그려보며</div>
			<div>해결책을 시각화 하는 것을 좋아해요</div>
		</>
	),
	donna: (
		<>
			<div>다양한 관점에서 고민하고</div>
			<div>프로덕트를 체계적으로 관리해요</div>
		</>
	),
	cha: (
		<>
			<div>편견 없이 문제의 본질에 접근하고</div>
			<div>예리한 해결책을 제시해요</div>
		</>
	),
	server: (
		<>
			<div>흥미-Driven으로 만들어내는 것을</div>
			<div>취미로 하고 있어요</div>
		</>
	),
	iron: (
		<>
			<div>데이터로 세상을 변화시키는 일을 </div>
			<div>하고 있어요</div>
		</>
	),
};

const role = {
	mj: {
		lead: "UI 디자인, 비주얼",
		sub: "리서치, 기획",
	},
	donna: {
		lead: "시스템 설계",
		sub: "리서치, 비주얼",
	},
	cha: {
		lead: "UX라이팅, 리서치/기획",
		sub: "비주얼",
	},

	server: "사이트 전체 개발",
	iron: "데이터 분석",
};

const mail = {
	mj: "mjmj9400@gmail.com",
	donna: "dahye2011@gmail.com",
	cha: "-",
	server: "scd7896@gmail.com",
	iron: "mylee4605@gmail.com",
};

const memberName = {
	mj: "MJ",
	donna: "Donna",
	cha: "Cha",
	server: "Server.K",
	iron: "Iron",
};

export default function ContactCard({ member }: IProp) {
	return (
		<div className={`${styles.wrapper} ${styles[member]}`}>
			<Title level={3} className={styles.title}>
				{memberName[member]}
			</Title>
			<section className={styles.subTitleWrapper}>
				<SubTitle level={1}>{title[member]}</SubTitle>
			</section>
			<section className={styles.bodyWrapper}>
				<Body level={3}>{description[member]}</Body>
			</section>
			<section className={styles.roleWrapper}>
				<SubTitle className={styles.roleSubTitle} level={3}>
					Role
				</SubTitle>
				<Role member={member} />
			</section>

			<section className={styles.mailWrapper}>
				<SubTitle level={3} className={styles.mailSubTitle} style={{ marginBottom: "4px", display: "block" }}>
					Mail
				</SubTitle>
				<Body className={styles.mail} level={3}>
					{mail[member]}
				</Body>
			</section>
		</div>
	);
}

function Role({ member }: IProp) {
	const currentRole = role[member];
	if (typeof currentRole === "string") {
		return (
			<Body className={styles.lead} level={3}>
				{currentRole}
			</Body>
		);
	}

	return (
		<section>
			<div className={styles.role}>
				<div className={`${styles.tag} ${styles[member]}`}>lead</div>
				<Body className={styles.lead} level={3}>
					{currentRole.lead}
				</Body>
			</div>
			<div className={styles.role}>
				<div className={`${styles.tag} ${styles[member]}`}>Sub</div>
				<Body className={styles.sub} level={3}>
					{currentRole.sub}
				</Body>
			</div>
		</section>
	);
}

export function ContactEmptyCard() {
	const sendMailClickHanlder = useCallback(() => {
		const a = document.createElement("a");
		a.href = `mailto:"3x_UXcard@gmail.com"`;
		a.click();
		a.remove();
	}, []);

	return (
		<div className={`${styles.wrapper} ${styles.empty}`}>
			<div className={styles.icon}>
				<MailIcon />
			</div>
			<section className={styles.paddingWrapper}>
				<div className={styles.emptyTitle}>
					<div>저희 팀에게</div>
					<div>하고싶은 말이 있나요?</div>
				</div>
				<div className={styles.emptyDescription}>
					<div>
						<u onClick={sendMailClickHanlder}>3x_UXcard@gmail.com</u> 으로
					</div>
					<div>메일을 보내주세요. 사이트에 대한 피드백, 응원 모두 환영해요!</div>
				</div>
			</section>
			<Button color="solid" size="small" style={{ padding: "7px 16px" }} onClick={sendMailClickHanlder}>
				<ButtonText level={2}>메일 보내기</ButtonText>
			</Button>
		</div>
	);
}
