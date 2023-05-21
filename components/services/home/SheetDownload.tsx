import useWindowSize from "../../../hooks/useWindowSize";
import Button from "../../Button/Button";
import SubTitle from "../../text/SubTitle";
import Title from "../../text/Title";
import styles from "./SheetDownload.module.css";

interface IProp {
	link: string;
	reverse?: boolean;
	title?: React.ReactNode;
	imgUrl?: string;
}

export default function SheetDownload({ link, reverse, title, imgUrl }: IProp) {
	const { isMobile } = useWindowSize();
	return (
		<section className={reverse ? styles.wrapperReverse : styles.wrapper}>
			<div className={styles.imgWrapper}>{imgUrl && <img className={styles.img} src={imgUrl} alt={link} />}</div>
			<div className={styles.contentWrapper}>
				<section className={styles.titleWrapper}>
					{!isMobile ? <Title level={3}>{title}</Title> : <SubTitle level={1}>{title}</SubTitle>}
				</section>
				<section className={styles.buttonWrapper}>
					<Button color="solid">비법 다운로드</Button>
				</section>
			</div>
		</section>
	);
}
