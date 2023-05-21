import useWindowSize from "../../hooks/useWindowSize";
import Body from "../text/Body";
import SubTitle from "../text/SubTitle";
import Title from "../text/Title";
import styles from "./Cardview.module.css";

interface IProp {
	title?: React.ReactNode;
	contents?: React.ReactNode;
	footer?: React.ReactNode;
	imageUrl?: string;
}

export default function Cardview({ title, contents, footer, imageUrl }: IProp) {
	const { isMobile } = useWindowSize();

	return (
		<section className={styles.wrapper}>
			<div className={styles.imageWrapper}>
				<img src={imageUrl} />
			</div>
			<div className={styles.titleWrapper}>
				{!isMobile ? <Title level={3}>{title}</Title> : <SubTitle level={2}>{title}</SubTitle>}
			</div>
			<div className={styles.contentsWrapper}>
				<Body level={isMobile ? 2 : 1} className={styles.contents}>
					{contents}
				</Body>
			</div>
			<div className={styles.footerWrapper}>{footer}</div>
		</section>
	);
}
