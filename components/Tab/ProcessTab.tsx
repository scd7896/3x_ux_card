import { Fragment, useCallback, useEffect, useRef, useState } from "react";
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
	const wrapperRef = useRef<HTMLDivElement>(null);
	const [itemWidth, setItemWidth] = useState<number>(0);
	const [itemOffset, setItemOffset] = useState<number>(0);

	const getShowArrow = useCallback(
		(index: number) => {
			if (process.length - 1 === index) return false;
			if (arrowStartIndex <= index) return true;
			return false;
		},
		[process.length, arrowStartIndex]
	);

	useEffect(() => {
		if (wrapperRef.current) {
			const selectElement = wrapperRef.current.querySelector<HTMLDivElement>(`.${styles.selected}`);
			if (selectElement) {
				setItemWidth(selectElement.clientWidth);
				setItemOffset(selectElement.offsetLeft - 8);
			}
		}
	}, [currentProcess, process]);

	return (
		<section className={styles.wrapper} ref={wrapperRef}>
			<div
				className={styles.slectedItem}
				style={{ "--width": `${itemWidth}px`, "--left": `${itemOffset}px` } as any}
			></div>
			{process.map((it, index) => (
				<Fragment key={it.key}>
					<Item
						onClick={() => {
							onChange?.(it.key);
						}}
						selected={currentProcess === it.key}
						data-cy={it.key}
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

interface IItemProp extends React.HTMLAttributes<HTMLDivElement> {
	children?: React.ReactNode;
	onClick?: () => void;
	onLoad?: () => void;
	selected: boolean;
}

function Item({ children, selected, onClick, onLoad, ...props }: IItemProp) {
	return (
		<section className={`${styles.item} ${selected && styles.selected}`} onClick={onClick} {...props}>
			<SubTitle level={2}>{children}</SubTitle>
		</section>
	);
}
