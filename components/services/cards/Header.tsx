import useSteps from "../../../hooks/cards/useSteps";
import StepTab from "../../Tab/StepTab";
import Tab from "../../Tab/Tab";
import Title from "../../text/Title";
import styles from "./Header.module.css";

export default function CardsHeader() {
	const { filter, category, setCategory, steps, categories } = useSteps();

	return (
		<div className={styles.wrapper}>
			<section className={styles.contentWrapper}>
				<section className={styles.titleWrapper}>
					<Title level={1}>Cards</Title>
				</section>
				<section className={styles.tabWrapper}>
					<Tab steps={categories} onChange={(key) => setCategory(key)} defaultStep={category} />
				</section>
				<StepTab steps={steps} arrowStartIndex={1} defaultStep={filter} />
			</section>
		</div>
	);
}
