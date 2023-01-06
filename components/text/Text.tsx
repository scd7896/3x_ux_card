import styles from "./Text.module.css";

interface IProp {
	level: number;
	children?: React.ReactNode;
}

export function ButtonText({ children, level }: IProp) {
	return <span className={styles[`button_${level}`]}>{children}</span>;
}

export function Caption({ children }: Omit<IProp, "level">) {
	return <span className={styles.caption}>{children}</span>;
}
