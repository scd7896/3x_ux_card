import { ICard } from "../../types/card.d";
import Body from "../text/Body";
import SubTitle from "../text/SubTitle";
import { Caption } from "../text/Text";
import Title from "../text/Title";
import styles from "./UXCardview.module.css";

export default function UXCardview({ title, enTitle, members, icon, process, description, level, duration }: ICard) {
	return (
		<section className={`${styles.container} ${styles[process]}`}>
			<div className={`${styles.wrapper}`}>
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
			<div className={`${styles.backWrapper}`}>
				<section>
					<Caption>{enTitle}</Caption>
					<Title level={3} className={styles.backTitle}>
						{title}
					</Title>
					<Body level={3}>{description}</Body>
				</section>
				<section>
					<Caption>소요시간 / {duration}</Caption>
					<br />
					<Caption>난이도 / {level}</Caption>
				</section>
			</div>
		</section>
	);
}

interface IBadge extends Pick<ICard, "process"> {
	member: string;
}

function Badge({ member, process }: IBadge) {
	return (
		<div className={styles.badgeContainer}>
			<div className={`${styles.badge} ${styles[process]}`}>
				<SubTitle className={styles.membetText} level={4}>
					{member}
				</SubTitle>
			</div>
		</div>
	);
}
