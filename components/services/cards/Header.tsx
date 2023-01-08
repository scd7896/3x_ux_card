import Title from "../../text/Title";
import styles from "./Header.module.css";

export default function CardsHeader() {
	return (
		<div className={styles.wrapper}>
			<section className={styles.contentWrapper}>
				<Title level={1}>Cards</Title>
			</section>
		</div>
	);
}
