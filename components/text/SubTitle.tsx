import styles from "./SubTitle.module.css";

interface IProp {
	level: 1 | 2 | 3 | 4;
	children: string;
}

export default function SubTitle({ level, children }: IProp) {
	return <span className={`${styles.wrapper} ${styles[`level-${level}`]}`}>{children}</span>;
}
