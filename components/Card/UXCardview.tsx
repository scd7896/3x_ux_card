import { ICard } from "../../types/card.d";
import SubTitle from "../text/SubTitle";
import { Caption } from "../text/Text";
import Title from "../text/Title";
import styles from "./UXCardview.module.css";

export default function UXCardview({ title, enTitle, members, icon, process }: ICard) {
	return (
		<div className={`${styles.wrapper} ${styles[process]}`}>
			<section>
				<Caption>{enTitle}</Caption>
				<Title level={3}>{title}</Title>
			</section>
			<section className={styles.bottomWrapper}>
				<div className={styles.badgeWrapper}>
					{members?.map((it) => (
						<Badge key={it} process={process} member={it} />
					))}
				</div>
			</section>
		</div>
	);
}

interface IBadge extends Pick<ICard, "process"> {
	member: string;
}

function Badge({ member, process }: IBadge) {
	return (
		<div className={styles.badgeGap}>
			<span className={`${styles.badge} ${styles[process]}`}>
				<SubTitle level={4}>{member}</SubTitle>
			</span>
		</div>
	);
}
