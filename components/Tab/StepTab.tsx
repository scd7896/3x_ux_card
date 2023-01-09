import { useCallback, useState } from "react";
import SubTitle from "../text/SubTitle";

import styles from "./StepTab.module.css";

interface IProp {
	steps: Array<{
		key: string;
		label?: React.ReactNode;
	}>;
	defaultStep?: string;
	onChange?: (key: string) => void;
	arrowStartIndex?: number;
}

export default function StepTab({ steps, defaultStep, onChange, arrowStartIndex = 0 }: IProp) {
	const [currentStep, setCurrentStep] = useState(defaultStep || steps[0]?.key || "");

	const getShowArrow = useCallback(
		(index: number) => {
			if (steps.length - 1 === index) return false;
			if (arrowStartIndex <= index) return true;
			return false;
		},
		[steps.length]
	);

	return (
		<section className={styles.wrapper}>
			{steps.map((it, index) => (
				<>
					<Item
						onClick={() => {
							setCurrentStep(it.key);
							onChange?.(it.key);
						}}
						selected={currentStep === it.key}
					>
						{it.label || it.key}
					</Item>

					{getShowArrow(index) && <StepArrow />}
				</>
			))}
		</section>
	);
}

function StepArrow() {
	return (
		<section className={styles.arrowWrapper}>
			<div className={styles.arrow} />
		</section>
	);
}

interface IItemProp {
	children?: React.ReactNode;
	onClick?: () => void;
	selected: boolean;
}

function Item({ children, selected, onClick }: IItemProp) {
	return (
		<section className={`${styles.item} ${selected && styles.selected}`} onClick={onClick}>
			<SubTitle level={2}>{children}</SubTitle>
		</section>
	);
}
