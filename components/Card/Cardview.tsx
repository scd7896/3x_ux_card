import Body from "../text/Body";
import SubTitle from "../text/SubTitle";
import styles from "./Cardview.module.css";

interface IProp {
	title?: React.ReactNode;
	contents?: React.ReactNode;
	footer?: React.ReactNode;
	imageUrl?: string;
}

export default function Cardview({ title, contents, footer, imageUrl }: IProp) {
	return (
		<section className={styles.wrapper}>
			<div className={styles.imageWrapper}>
				<img src={imageUrl} />
			</div>
			<div className={styles.titleWrapper}>
				<SubTitle level={2} className={styles.title}>
					{title}
				</SubTitle>
			</div>
			<div className={styles.contentsWrapper}>
				<Body level={2} className={styles.contents}>
					{contents}
				</Body>
			</div>
			<div className={styles.footerWrapper}>{footer}</div>
		</section>
	);
}
