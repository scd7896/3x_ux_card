import { useState, useCallback, useEffect } from "react";
import { members } from "../../../lib/constant";
import gaLogger from "../../../lib/log";
import Button from "../../Button/Button";
import MemberInfoIcon from "../../icon/MemberInfoIcon";
import Modal from "../../Modal/Modal";
import Body from "../../text/Body";
import SubTitle from "../../text/SubTitle";

import styles from "./MemberFilter.module.css";

interface IProp {
	onChange?: (members: string[]) => void;
}

export default function MemberFilter({ onChange }: IProp) {
	const [modalOpen, setModalOpen] = useState(false);
	const [selectedMembers, setSelectedMemebers] = useState<string[]>([]);

	const getSelected = useCallback(
		(member: string) => {
			return selectedMembers.find((it) => member === it) !== undefined;
		},
		[selectedMembers]
	);

	useEffect(() => {
		onChange?.(selectedMembers);
	}, [onChange, selectedMembers]);

	return (
		<section className={styles.wrapper}>
			<SubTitle level={1} className={styles.memberTitle}>
				참여자
				<span className={styles.infoIcon} onClick={() => setModalOpen(true)}>
					<MemberInfoIcon />
				</span>
			</SubTitle>
			<div className={styles.membersWrapper}>
				{members.map((it) => (
					<button
						key={it}
						data-cy={it}
						className={`${styles.button} ${getSelected(it) ? styles.selected : ""}`}
						onClick={() => {
							setSelectedMemebers((prev) => {
								const findResult = prev.find((member) => it === member);
								if (findResult) {
									gaLogger.clickCardListMemberFilter(it, false);
									return prev.filter((member) => member !== findResult);
								}
								gaLogger.clickCardListMemberFilter(it, true);
								return [...prev, it];
							});
						}}
					>
						{it}
					</button>
				))}
			</div>
			<Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title="참여자 정의">
				<div className={styles.memberDefineWrapper}>
					<section className={styles.memberDefined}>
						<SubTitle level={2}>UXUI 전문가</SubTitle>
						<Body className={styles.memberText} level={3}>
							프로덕트 디자이너, UX 기획자 등 사용자 경험/환경 분야에 전문성을 가진 사람
						</Body>
					</section>
					<section className={styles.memberDefined}>
						<SubTitle level={2}>팀 구성원</SubTitle>
						<Body className={styles.memberText} level={3}>
							개발자 등 UXUI 전문가 이외에 함꼐 프로덕트를 만들어가는 팀 구성원
						</Body>
					</section>
					<section className={styles.memberDefined}>
						<SubTitle level={2}>이해관계자</SubTitle>
						<Body className={styles.memberText} level={3}>
							같은 팀 구성원은 아니지만 업무 영향을 받는 유관부서, 외주 프로젝트일 경우 고객사
						</Body>
					</section>
					<Button color="ghost" className={styles.checkButton} onClick={() => setModalOpen(false)}>
						확인
					</Button>
				</div>
			</Modal>
		</section>
	);
}
