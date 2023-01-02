import styles from "./Button.module.css";

interface IProp extends React.HTMLAttributes<HTMLButtonElement> {
	size?: "small" | "middle" | "default";
	color?: "solid" | "line";
}

export default function Button({ color = "line", size = "default", children, ...props }: IProp) {
	return <button className={`${styles.button} ${styles[color]} ${styles[size]}`}>{children}</button>;
}
