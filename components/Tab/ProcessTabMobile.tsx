import { useState, useMemo, useCallback, useEffect } from "react";
import { CardSubTitleDescription } from "../../lib/constant";
import Button from "../Button/Button";
import { ArrowDown16 } from "../icon/ArrowLeft";
import { CheckIconBlack } from "../icon/CheckIcon";
import Modal from "../Modal/Modal";
import Body from "../text/Body";
import styles from "./ProcessTabMobile.module.css";

interface IProp {
	process: Array<{
		key: string;
		label?: React.ReactNode;
	}>;
	category: string;
	currentProcess: string;
	onChange?: (key: string) => void;
}

const modalTitle: Record<string, string> = {
	process: "프로세스별 보기",
	situation: "상황별 보기",
};

export default function ProcessTabMobile({ process, onChange, category, currentProcess }: IProp) {
	const [modalOpen, setModalOpen] = useState(false);

	const handleNavClick = useCallback(
		(diff: number) => {
			const currentIndex = process.findIndex((it) => it.key === currentProcess);
			let nextIndex = currentIndex + diff;
			if (nextIndex < 0) {
				nextIndex = process.length - 1;
			}
			if (nextIndex === process.length) {
				nextIndex = 0;
			}
			onChange?.(process[nextIndex].key);
		},
		[onChange, process]
	);

	const handleClickProcess = useCallback(
		(index: number) => {
			onChange?.(process[index].key);
		},
		[process, onChange]
	);

	const subTitleDescription = useMemo(() => {
		if (!CardSubTitleDescription[currentProcess]) {
			return CardSubTitleDescription.empty;
		}

		return CardSubTitleDescription[currentProcess];
	}, [currentProcess]);

	return (
		<div className={styles.wrapper}>
			<section className={styles.navWrapper}>
				<div className={styles.left} onClick={() => handleNavClick(-1)}>
					<ArrowDown16 />
				</div>
				<div className={styles.processName} onClick={() => setModalOpen(true)}>
					{currentProcess}
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
						<div className={styles.tabItem} onClick={() => handleClickProcess(index)} key={index}>
							<Body
								className={`${styles.processText} ${currentProcess === it.key ? styles.selected : undefined}`}
								level={1}
							>
								{it.key}
							</Body>
							{currentProcess === it.key && <CheckIconBlack />}
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
