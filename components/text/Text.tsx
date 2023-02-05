import styles from "./Text.module.css";

interface IProp extends React.HTMLAttributes<HTMLSpanElement> {
	level: number;
	children?: React.ReactNode;
}

export function ButtonText({ children, level, ...props }: IProp) {
	return (
		<span {...props} className={styles[`button_${level}`]}>
			{children}
		</span>
	);
}

export function Caption({ children, ...props }: Omit<IProp, "level">) {
	return (
		<span {...props} className={styles.caption}>
			{children}
		</span>
	);
}
