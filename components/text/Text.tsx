import styles from "./Text.module.css";

interface IProp {
	level: number;
	children?: React.ReactNode;
}

export function ButtonText({ children, level }: IProp) {
	return <span className={styles[`button_${level}`]}>{children}</span>;
}
