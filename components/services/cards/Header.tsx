import { useEffect } from "react";
import useSteps from "../../../hooks/cards/useSteps";
import StepTab from "../../Tab/StepTab";
import Tab from "../../Tab/Tab";
import Title from "../../text/Title";
import styles from "./Header.module.css";

interface IProp {
	onChange: (params: { step: string; category: string }) => void;
}

export default function CardsHeader({ onChange }: IProp) {
	const { selectedStep, category, setCategory, steps, categories, setSelectedStep } = useSteps();

	useEffect(() => {
		onChange({
			step: selectedStep,
			category,
		});
	}, [onChange, selectedStep, category]);

	return (
		<div className={styles.wrapper}>
			<section className={styles.contentWrapper}>
				<section className={styles.titleWrapper}>
					<Title level={1}>Cards</Title>
				</section>
				<section className={styles.tabWrapper}>
					<Tab steps={categories} onChange={(key) => setCategory(key)} defaultStep={category} />
				</section>
				<StepTab steps={steps} arrowStartIndex={1} currentStep={selectedStep} onChange={setSelectedStep} />
			</section>
		</div>
	);
}
