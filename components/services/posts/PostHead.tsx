import { ICard } from "../../../types/card";
import Body from "../../text/Body";
import { Caption } from "../../text/Text";
import Title from "../../text/Title";

import styles from "./PostHead.module.css";

export default function PostHead({ enTitle, title, description, level, members, process }: ICard) {
	return (
		<section className={`${styles.wrapper} ${styles[process]}`}>
			<section className={styles.contentWrapper}>
				<Title level={2} style={{ marginBottom: "2px" }}>
					{title}
				</Title>

				<Caption style={{ marginBottom: "16px" }}>{enTitle}</Caption>
				<Body level={2}>{description}</Body>
			</section>
		</section>
	);
}
