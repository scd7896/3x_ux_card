import styles from "./Layout.module.css";

interface IProp extends React.HTMLAttributes<HTMLDivElement> {
	rowGap?: number;
}

export function Row({ children, rowGap, ...props }: IProp) {
	const style = props.style || {};

	return (
		<section
			{...props}
			style={{
				gridRowGap: rowGap ? `${rowGap}px` : "",
				...style,
			}}
			className={styles.wrapper}
		>
			{children}
		</section>
	);
}

interface IColProp extends React.HTMLAttributes<HTMLDivElement> {
	col?: number;
	row?: number;
}

export function Col({ children, col = 1, row = 1, ...props }: IColProp) {
	const style = props.style || {};
	return (
		<div
			{...props}
			style={{
				gridColumn: `span ${col}`,
				gridRow: `span ${row}`,
				...style,
			}}
		>
			{children}
		</div>
	);
}
