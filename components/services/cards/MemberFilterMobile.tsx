import { useCallback, useState } from "react";
import { members } from "../../../lib/constant";
import Button from "../../Button/Button";
import Modal from "../../Modal/Modal";
import { ArrowDown16 } from "../../icon/ArrowLeft";
import styles from "./MemberFilterMobile.module.css";
import MemberInfoIcon from "../../icon/MemberInfoIcon";
import { CheckIconBlack } from "../../icon/CheckIcon";

interface IProp {
	onChange?: (members: string[]) => void;
}

export default function MemberFilterMobile({ onChange }: IProp) {
	const [selectOpen, setSelectOpen] = useState(false);
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

				<span className={styles.infoIcon}>
					<MemberInfoIcon />
				</span>
			</div>
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
