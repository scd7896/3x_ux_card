import styles from "./Body.module.css";

interface IProp extends React.HTMLAttributes<HTMLDivElement> {
	level?: number;
	children?: React.ReactNode;
}

export default function Body({ children, level = 1, ...props }: IProp) {
	return (
		<div {...props} className={`${styles[`level_${level}`]} ${props.className || ""}`}>
			{children}
		</div>
	);
}
