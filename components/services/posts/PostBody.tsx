import { useCallback } from "react";
import ArrowLeft from "../../icon/ArrowLeft";
import Link from "../../Link/Link";
import styles from "./PostBody.module.css";

interface IProp {
	contentHtml: string;
}

export default function PostBody({ contentHtml }: IProp) {
	const copyClickHandler = useCallback((e: any) => {
		e.preventDefault();

		const href = window.location.href;
		var tempElem = document.createElement("textarea");
		tempElem.value = href;
		document.body.appendChild(tempElem);
		tempElem.select();
		document.execCommand("copy");
		document.body.removeChild(tempElem);
	}, []);

	return (
		<section className={styles.wrapper}>
			<div className={styles.contentWrapper}>
				<div className={styles.content} dangerouslySetInnerHTML={{ __html: contentHtml }}></div>
				<section className={styles.linkWrapper}>
					<Link href="/cards">
						<ArrowLeft />
						목록으로
					</Link>

					<Link href="#" onClick={copyClickHandler}>
						링크 복사
					</Link>
				</section>
			</div>
		</section>
	);
}
