import { Fragment, useCallback } from "react";
import SubTitle from "../text/SubTitle";

import styles from "./ProcessTab.module.css";

interface IProp {
	process: Array<{
		key: string;
		label?: React.ReactNode;
	}>;
	currentProcess?: string;
	onChange?: (key: string) => void;
	arrowStartIndex?: number;
}

export default function ProcessTab({ process, currentProcess, onChange, arrowStartIndex = 0 }: IProp) {
	const getShowArrow = useCallback(
		(index: number) => {
			if (process.length - 1 === index) return false;
			if (arrowStartIndex <= index) return true;
			return false;
		},
		[process.length, arrowStartIndex]
	);

	return (
		<section className={styles.wrapper}>
			{process.map((it, index) => (
				<Fragment key={it.key}>
					<Item
						onClick={() => {
							onChange?.(it.key);
						}}
						selected={currentProcess === it.key}
					>
						{it.label || it.key}
					</Item>

					{getShowArrow(index) && <StepArrow />}
				</Fragment>
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
