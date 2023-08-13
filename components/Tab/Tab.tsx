import { useState } from "react";
import gaLogger from "../../lib/log";
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
					key={it.key}
					onClick={() => {
						setCurrentStep(it.key);
						onChange?.(it.key);
						gaLogger.clickCardListCategory(it.key);
					}}
					selected={currentStep === it.key}
					data-cy={`${it.key}_filter`}
				>
					{it.label || it.key}
				</Item>
			))}
		</section>
	);
}

interface IItemProp extends React.HTMLAttributes<HTMLDivElement> {
	children?: React.ReactNode;
	onClick?: () => void;
	selected: boolean;
}

function Item({ children, selected, onClick, ...props }: IItemProp) {
	return (
		<section className={`${styles.item} ${selected && styles.selected}`} onClick={onClick} {...props}>
			<Title level={3}>{children}</Title>
		</section>
	);
}
