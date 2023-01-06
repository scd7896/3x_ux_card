import SubTitle from "../text/SubTitle";
import { Caption } from "../text/Text";
import Title from "../text/Title";
import styles from "./UXCardview.module.css";

interface IProp {
	step: "공감" | "아이디어" | "프로토타입" | "테스트" | "출시";
	title?: string;
	enTitle?: string;
	members?: string[];
	icon?: string;
	description?: string;
	level?: string;
}

export default function UXCardview({ title, enTitle, members, icon, step }: IProp) {
	return (
		<div className={`${styles.wrapper} ${styles[step]}`}>
			<section>
				<Caption>{enTitle}</Caption>
				<Title level={3}>{title}</Title>
			</section>
			<section className={styles.bottomWrapper}>
				<div className={styles.badgeWrapper}>
					{members?.map((it) => (
						<Badge key={it} step={step} member={it} />
					))}
				</div>
				<div className={styles.iconWrapper}>
					<i className={styles.icon}>
						<img className={styles.iconImg} src={icon} />
					</i>
				</div>
			</section>
		</div>
	);
}

interface IBadge extends Pick<IProp, "step"> {
	member: string;
}

function Badge({ member, step }: IBadge) {
	return (
		<div className={styles.badgeGap}>
			<span className={`${styles.badge} ${styles[step]}`}>
				<SubTitle level={4}>{member}</SubTitle>
			</span>
		</div>
	);
}
