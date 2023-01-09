import StepTab from "../../Tab/StepTab";
import Title from "../../text/Title";
import styles from "./Header.module.css";

export default function CardsHeader() {
	return (
		<div className={styles.wrapper}>
			<section className={styles.contentWrapper}>
				<section className={styles.titleWrapper}>
					<Title level={1}>Cards</Title>
				</section>
				<StepTab
					steps={[
						{ key: "전체" },
						{ key: "공감" },
						{ key: "아이디어" },
						{ key: "프로토타입" },
						{ key: "테스트" },
						{ key: "출시" },
					]}
					arrowStartIndex={1}
				/>
			</section>
		</div>
	);
}
