import { useEffect, useState, ReactNode } from "react";
import useWindowSize from "../../../hooks/useWindowSize";
import styles from "./KeyVisualCardList.module.css";

function KeyVisualCardList() {
	const { clientSize } = useWindowSize();
	const [renderSets, setRednerSets] = useState<ReactNode[] | null>(null);

	useEffect(() => {
		const cardSizes = 480;
		const cardMargins = 12 * 6;
		const totalSize = cardSizes + cardMargins;

		if (clientSize) {
			const renderCount = Math.floor(clientSize / totalSize) + 1;

			const dummyArrays = new Array(renderCount).fill("");
			setRednerSets(dummyArrays.map((_, index) => <KeyVisualCardSet key={index} />));
		} else {
			return setRednerSets(null);
		}
	}, [clientSize]);

	return (
		<div className={styles.wrapper}>
			<section className={styles.listWrapper}>{renderSets}</section>
			<section className={styles.listWrapper}>{renderSets}</section>
			<section className={styles.listWrapper}>{renderSets}</section>
		</div>
	);
}

export default KeyVisualCardList;

function KeyVisualCardSet() {
	return (
		<section className={styles.cardSetWrapper}>
			<div className={styles.cardWrapper}>
				<div className={styles.subTitle}></div>
				<div className={styles.title}></div>
			</div>
			<div className={styles.cardWrapper}>
				<div className={styles.subTitle}></div>
				<div className={styles.title}></div>
			</div>
			<div className={styles.cardWrapper}>
				<div className={styles.subTitle}></div>
				<div className={styles.title}></div>
			</div>
			<div className={styles.cardWrapper}>
				<div className={styles.subTitle}></div>
				<div className={styles.title}></div>
			</div>
			<div className={styles.cardWrapper}>
				<div className={styles.subTitle}></div>
				<div className={styles.title}></div>
			</div>
			<div className={styles.cardWrapper}>
				<div className={styles.subTitle}></div>
				<div className={styles.title}></div>
			</div>
		</section>
	);
}
