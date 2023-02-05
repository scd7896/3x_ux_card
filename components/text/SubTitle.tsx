import styles from "./SubTitle.module.css";

interface IProp extends React.HTMLAttributes<HTMLSpanElement> {
	level: 1 | 2 | 3 | 4;
	children: React.ReactNode;
}

export default function SubTitle({ level, children, ...props }: IProp) {
	return (
		<span {...props} className={`${styles.wrapper} ${styles[`level-${level}`]}`}>
			{children}
		</span>
	);
}
