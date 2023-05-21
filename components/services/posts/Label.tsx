import Body from "../../text/Body";
import SubTitle from "../../text/SubTitle";
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
			<Body level={2}>
				<b>{name}</b>
			</Body>
			<Body level={2} style={{ marginLeft: "4px" }}>
				{value}
			</Body>
		</div>
	);
}
