import { useMemo } from "react";
import { CardSubTitleDescription } from "../../../lib/constant";
import Body from "../../text/Body";
import Title from "../../text/Title";

import styles from "./StepDescription.module.css";

interface IProp {
	descriptionKey?: string;
}

export default function StepDescription({ descriptionKey }: IProp) {
	const description = useMemo(() => {
		if (descriptionKey) {
			return CardSubTitleDescription[descriptionKey] || CardSubTitleDescription.empty;
		}

		return CardSubTitleDescription.empty;
	}, [descriptionKey]);

	return (
		<section className={styles.wrapper}>
			<div className={styles.titleWrapper}>
				<Title level={3}>{descriptionKey || "전체"}</Title>
			</div>
			<Body level={1} data-cy="description">
				{description}
			</Body>
		</section>
	);
}
