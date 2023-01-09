import { useState } from "react";
import Title from "../text/Title";
import styles from "./Tab.module.css";

interface IProp {
	steps: Array<{
		key: string;
		label?: React.ReactNode;
	}>;
	defaultStep?: string;
	onChange?: (key: string) => void;
}

export default function Tab({ steps, defaultStep, onChange }: IProp) {
	const [currentStep, setCurrentStep] = useState(defaultStep || steps[0]?.key || "");

	return (
		<section className={styles.wrapper}>
			{steps.map((it) => (
				<Item
					onClick={() => {
						setCurrentStep(it.key);
						onChange?.(it.key);
					}}
					selected={currentStep === it.key}
				>
					{it.label || it.key}
				</Item>
			))}
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
			<Title level={3}>{children}</Title>
		</section>
	);
}
