import { useEffect } from "react";
import useCategoryFilter from "../../../hooks/cards/useCategoryFilter";
import useWindowSize from "../../../hooks/useWindowSize";
import ProcessTab from "../../Tab/ProcessTab";
import ProcessTabMobile from "../../Tab/ProcessTabMobile";
import Tab from "../../Tab/Tab";
import Title from "../../text/Title";
import styles from "./Header.module.css";

interface IProp {
	onChange: (params: { value?: string; category: string }) => void;
}

export default function CardsHeader({ onChange }: IProp) {
	const { isMobile } = useWindowSize();
	const { value, category, setCategory, process, categories, setValue } = useCategoryFilter();

	useEffect(() => {
		onChange({
			value: value === "전체" ? undefined : value,
			category: category,
		});
	}, [onChange, value, category]);

	return (
		<div className={styles.wrapper}>
			<section className={styles.contentWrapper}>
				<section className={styles.titleWrapper}>
					<Title level={1}>Cards</Title>
				</section>
				<section className={styles.tabWrapper}>
					<Tab steps={categories} onChange={(key) => setCategory(key)} defaultStep={category} />
				</section>
				{isMobile ? (
					<ProcessTabMobile category={category} currentProcess={value} process={process} onChange={setValue} />
				) : (
					<ProcessTab process={process} arrowStartIndex={1} currentProcess={value} onChange={setValue} />
				)}
			</section>
		</div>
	);
}
