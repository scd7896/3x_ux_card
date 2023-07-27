import Button from "../../Button/Button";
import Link from "../../Link/Link";
import Title from "../../text/Title";
import styles from "./SheetDownload.module.css";

interface IProp {
	link: string;
	reverse?: boolean;
	title?: React.ReactNode;
	imgUrl?: string;
	buttonText?: string;
}

export default function SheetDownload({ link, reverse, title, imgUrl, buttonText = "비법 다운로드" }: IProp) {
	return (
		<section className={reverse ? styles.wrapperReverse : styles.wrapper}>
			<div className={styles.imgWrapper}>{imgUrl && <img className={styles.img} src={imgUrl} alt={link} />}</div>
			<div className={styles.contentWrapper}>
				<section className={styles.titleWrapper}>
					<Title className={styles.title} level={3}>
						{title}
					</Title>
				</section>
				<Link href={link} className={styles.buttonWrapper}>
					<Button color="solid" className={styles.button}>
						{buttonText}
					</Button>
				</Link>
			</div>
		</section>
	);
}
