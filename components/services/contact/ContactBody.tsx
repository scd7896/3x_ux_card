import styles from "./ContactBody.module.css";
import ContactCard, { ContactEmptyCard } from "./ContactCard";

const members = ["mj", "donna", "cha", "server", "iron"];

export default function ContactBody() {
	return (
		<section className={styles.wrapper}>
			<div className={styles.cardListWrapper}>
				{members.map((it) => (
					<ContactCard key={it} member={it as any} />
				))}
				<ContactEmptyCard />;
			</div>
		</section>
	);
}
