import styles from "./Button.module.css";

interface IProp extends React.HTMLAttributes<HTMLButtonElement> {
	size?: "small" | "middle" | "default";
	color?: "solid" | "line" | "ghost";
}

export default function Button({ color = "line", size = "default", children, ...props }: IProp) {
	return (
		<button {...props} className={`${styles.button} ${styles[color]} ${styles[size]} ${props.className}`}>
			{children}
		</button>
	);
}
