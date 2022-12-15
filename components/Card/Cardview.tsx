import { useState } from "react";
import Title from "../text/Title";
import styles from "./Cardview.module.css";

interface IProp {
	title?: React.ReactNode;
	contents?: React.ReactNode;
	footer?: React.ReactNode;
	imageUrl?: string;
}

export default function Cardview({ title, contents, footer, imageUrl }: IProp) {
	const [isDummyShow, setIsDummyShow] = useState(imageUrl === undefined);

	return (
		<section className={styles.wrapper}>
			<div className={styles.imageWrapper}>
				<source src={imageUrl} />
			</div>
			<Title level={3}>{title}</Title>
		</section>
	);
}
