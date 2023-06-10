import Body from "../../text/Body";
import styles from "./Label.module.css";

interface IProp {
	icon?: React.ReactNode;
	name: string;
	value: string;
}

export default function PostLabel({ name, value, icon }: IProp) {
	return (
		<div className={styles.wrapper}>
			<div className={styles.icon}>{icon}</div>
			<Body level={2} className={styles.name}>
				{name}
			</Body>
			<Body className={styles.value} level={2}>
				{value}
			</Body>
		</div>
	);
}
