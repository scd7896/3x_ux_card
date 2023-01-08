import { useCallback, useState } from "react";

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
					{currentStep === it.key ? (
						<Selected>{it.label || it.key}</Selected>
					) : (
						<div key={it.key}>{it.label || it.key}</div>
					)}

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

interface ISelectProp {
	children?: React.ReactNode;
}

function Selected({ children }: ISelectProp) {
	return <section>{children}</section>;
}
