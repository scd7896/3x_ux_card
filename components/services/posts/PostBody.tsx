import ArrowLeft from "../../icon/ArrowLeft";
import Link from "../../Link/Link";
import styles from "./PostBody.module.css";

interface IProp {
	contentHtml: string;
}

export default function PostBody({ contentHtml }: IProp) {
	return (
		<section className={styles.wrapper}>
			<div className={styles.contentWrapper}>
				<div className={styles.content} dangerouslySetInnerHTML={{ __html: contentHtml }}></div>
				<section className={styles.linkWrapper}>
					<Link href="/cards" style={{ fontSize: "16px" }}>
						<ArrowLeft />
						목록으로
					</Link>
				</section>
			</div>
		</section>
	);
}
