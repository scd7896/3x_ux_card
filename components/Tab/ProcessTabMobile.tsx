import { useState, useMemo, useCallback, useEffect } from "react";
import { CardSubTitleDescription } from "../../lib/constant";
import { ArrowDown16 } from "../icon/ArrowLeft";
import Body from "../text/Body";
import styles from "./ProcessTabMobile.module.css";

interface IProp {
	process: Array<{
		key: string;
		label?: React.ReactNode;
	}>;

	onChange?: (key: string) => void;
}

export default function ProcessTabMobile({ process, onChange }: IProp) {
	const [selectedIndex, setSelectedIndex] = useState(0);

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
				<div className={styles.processName}>{currentProcess.key}</div>
				<div className={styles.right} onClick={() => handleNavClick(1)}>
					<ArrowDown16 />
				</div>
			</section>
			<section className={styles.descriptionWrapper}>
				<Body level={1}>{subTitleDescription}</Body>
			</section>
		</div>
	);
}
