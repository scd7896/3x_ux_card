import styles from "./Body.module.css";

interface IProp {
	level?: number;
	children?: React.ReactNode;
}

export default function Body({ children, level = 1 }: IProp) {
	return <div className={styles[`level_${level}`]}>{children}</div>;
}
