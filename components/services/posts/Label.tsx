import Body from "../../text/Body";
import SubTitle from "../../text/SubTitle";
import styles from "./Label.module.css";

interface IProp {
	icon?: string;
	name: string;
	value: string;
}

export default function PostLabel({ name, value }: IProp) {
	return (
		<div className={styles.wrapper}>
			<div className={styles.icon} />
			<Body level={2}>
				<b>{name}</b>
			</Body>
			<Body level={2} style={{ marginLeft: "4px" }}>
				{value}
			</Body>
		</div>
	);
}
