import styles from "./Title.module.css";

interface IProp extends React.HTMLAttributes<HTMLDivElement> {
	level: 1 | 2 | 3;
	children: React.ReactNode;
}

export default function Title({ level, children, ...props }: IProp) {
	const HeaderElement = `h${level}` as any;

	return (
		<HeaderElement {...props} className={`${styles.wrapper} ${props.className}`}>
			{children}
		</HeaderElement>
	);
}
