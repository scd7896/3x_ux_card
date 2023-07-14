import { useState, useMemo, useCallback, useEffect } from "react";
import { CardSubTitleDescription } from "../../lib/constant";
import Button from "../Button/Button";
import { ArrowDown16 } from "../icon/ArrowLeft";
import Modal from "../Modal/Modal";
import Body from "../text/Body";
import styles from "./ProcessTabMobile.module.css";

interface IProp {
	process: Array<{
		key: string;
		label?: React.ReactNode;
	}>;
	category: string;

	onChange?: (key: string) => void;
}

const modalTitle: Record<string, string> = {
	process: "프로세스별 보기",
	situation: "상황별 보기",
};

export default function ProcessTabMobile({ process, onChange, category }: IProp) {
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [modalOpen, setModalOpen] = useState(false);
	console.log(process);

	useEffect(() => {
		setSelectedIndex(0);
	}, [process]);

	const currentProcess = useMemo(() => {
		return process[selectedIndex];
	}, [selectedIndex, process]);

	const handleNavClick = useCallback(
		(diff: number) => {
			setSelectedIndex((prev) => {
				let nextIndex = prev + diff;
				if (nextIndex < 0) {
					nextIndex = process.length - 1;
				}
				if (nextIndex === process.length) {
					nextIndex = 0;
				}
				onChange?.(process[nextIndex].key);
				return nextIndex;
			});
		},
		[onChange, process]
	);

	const handleClickProcess = useCallback(
		(index: number) => {
			setSelectedIndex(index);
			onChange?.(process[index].key);
		},
		[process, onChange]
	);

	const subTitleDescription = useMemo(() => {
		if (!CardSubTitleDescription[currentProcess.key]) {
			return "사용자를 이해하고 데이터를 쌓아가는 단계입니다.";
		}

		return CardSubTitleDescription[currentProcess.key];
	}, [currentProcess]);

	return (
		<div className={styles.wrapper}>
			<section className={styles.navWrapper}>
				<div className={styles.left} onClick={() => handleNavClick(-1)}>
					<ArrowDown16 />
				</div>
				<div className={styles.processName} onClick={() => setModalOpen(true)}>
					{currentProcess.key}
				</div>
				<div className={styles.right} onClick={() => handleNavClick(1)}>
					<ArrowDown16 />
				</div>
			</section>
			<section className={styles.descriptionWrapper}>
				<Body level={1}>{subTitleDescription}</Body>
			</section>
			<Modal position="bottom" title={modalTitle[category]} isOpen={modalOpen} onClose={() => setModalOpen(false)}>
				<div>
					{process.map((it, index) => (
						<div onClick={() => handleClickProcess(index)} key={index}>
							<Body
								className={`${styles.processText} ${currentProcess.key === it.key ? styles.selected : undefined}`}
								level={1}
							>
								{it.key}
							</Body>
						</div>
					))}
					<Button color="ghost" className={styles.confirmButton} onClick={() => setModalOpen(false)}>
						확인
					</Button>
				</div>
			</Modal>
		</div>
	);
}
