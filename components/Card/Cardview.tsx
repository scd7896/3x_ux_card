import { useState } from "react";
import Body from "../text/Body";
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
			<div className={styles.titleWrapper}>
				<Title level={3}>{title}</Title>
			</div>
			<div className={styles.contentsWrapper}>
				<Body level={1}>{contents}</Body>
			</div>
			<div className={styles.footerWrapper}>{footer}</div>
		</section>
	);
}
