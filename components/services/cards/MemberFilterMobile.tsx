import { useCallback, useState } from "react";
import { members } from "../../../lib/constant";
import Button from "../../Button/Button";
import Modal from "../../Modal/Modal";
import { ArrowDown16 } from "../../icon/ArrowLeft";
import styles from "./MemberFilterMobile.module.css";
import MemberInfoIcon from "../../icon/MemberInfoIcon";
import { CheckIconBlack } from "../../icon/CheckIcon";
import SubTitle from "../../text/SubTitle";
import Body from "../../text/Body";

interface IProp {
	onChange?: (members: string[]) => void;
}

export default function MemberFilterMobile({ onChange }: IProp) {
	const [selectOpen, setSelectOpen] = useState(false);
	const [defineOpen, setDefineOpen] = useState(false);
	const [selectedMembers, setSelectedMemebers] = useState<string[]>([]);

	const getSelected = useCallback(
		(member: string) => {
			return selectedMembers.find((it) => member === it) !== undefined;
		},
		[selectedMembers]
	);

	return (
		<div className={styles.wrapper}>
			<div className={styles.menuWrapper}>
				<div
					className={styles.memberButton}
					onClick={() => {
						setSelectOpen(true);
					}}
				>
					참여자
					<section className={styles.arrow}>
						<ArrowDown16 />
					</section>
				</div>

				<span className={styles.infoIcon} onClick={() => setDefineOpen(true)}>
					<MemberInfoIcon />
				</span>
			</div>
			<Modal position="bottom" title="참여자 정의" isOpen={defineOpen} onClose={() => setDefineOpen(false)}>
				<section className={styles.defineWrapper}>
					<SubTitle level={3} className={styles.defineLabel}>
						UXUI 전문가
					</SubTitle>
					<Body level={2}>프로덕트 디자이너, UX 기획자 등 사용자 경험/환경 분야에 전문성을 가진 사람</Body>
				</section>
				<section className={styles.defineWrapper}>
					<SubTitle level={3} className={styles.defineLabel}>
						팀 구성원
					</SubTitle>
					<Body level={2}>개발자 등 UXUI 전문가 이외에 함께 프로덕트를 만들어가는 팀 구성원</Body>
				</section>
				<section className={styles.defineWrapper}>
					<SubTitle level={3} className={styles.defineLabel}>
						이해관계자
					</SubTitle>
					<Body level={2}>같은 팀 구성원은 아니지만 프로젝트에 간접적 영향 받는 사람들 또는 고객사 등</Body>
				</section>
				<Button color="ghost" className={styles.confirmButton} onClick={() => setDefineOpen(false)}>
					확인
				</Button>
			</Modal>
			<Modal position="bottom" isOpen={selectOpen} title="참여자 선택" onClose={() => setSelectOpen(false)}>
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
										return prev.filter((member) => member !== findResult);
									}
									return [...prev, it];
								});
							}}
						>
							<span>{it}</span>
							{getSelected(it) && (
								<span className={styles.check}>
									<CheckIconBlack />
								</span>
							)}
						</button>
					))}
				</div>
				<Button
					color="ghost"
					className={styles.confirmButton}
					onClick={() => {
						setSelectOpen(false);
						onChange?.(selectedMembers);
					}}
				>
					확인
				</Button>
			</Modal>
		</div>
	);
}
