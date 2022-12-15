import styles from "./Title.module.css";

interface IProp {
	level: 1 | 2 | 3;
	children: React.ReactNode;
}

export default function Title({ level, children }: IProp) {
	const HeaderElement = `h${level}` as keyof JSX.IntrinsicElements;

	return <HeaderElement className={styles.wrapper}>{children}</HeaderElement>;
}
