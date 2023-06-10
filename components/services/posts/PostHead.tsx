import { ICard } from "../../../types/card";
import LevelIcon from "../../icon/LevelIcon";
import MembersIcon from "../../icon/Members";
import TimerIcon from "../../icon/Timer";
import Body from "../../text/Body";
import { Caption } from "../../text/Text";
import Title from "../../text/Title";
import PostLabel from "./Label";

import styles from "./PostHead.module.css";

interface IProp extends Omit<ICard, "members"> {
	members?: string;
}

export default function PostHead({ enTitle, title, description, level, members, process, duration }: IProp) {
	return (
		<section className={`${styles.wrapper} ${styles[process]}`}>
			<section className={styles.contentWrapper}>
				<Title level={2} style={{ marginBottom: "2px" }}>
					{title}
				</Title>

				<Caption style={{ marginBottom: "16px" }}>{enTitle}</Caption>
				<Body className={styles.descriptionWrapper} level={2}>
					{description}
				</Body>
			</section>
			<section className={styles.detailInfo}>
				<PostLabel name="참여자" value={members || ""} icon={<MembersIcon />} />
				<PostLabel name="소요시간" value={duration || ""} icon={<TimerIcon />} />
				<PostLabel name="난이도" value={level || ""} icon={<LevelIcon />} />
			</section>
		</section>
	);
}
