import useWindowSize from "../../../hooks/useWindowSize";
import Button from "../../Button/Button";
import Link from "../../Link/Link";
import { ButtonText } from "../../text/Text";
import styles from "./Banner.module.css";
import KeyvisualCardList from "./KeyVisualCardList";

function HomeBanner() {
	const { isMobile } = useWindowSize();
	return (
		<section className={styles.wrapper}>
			<div className={styles.bannerTextWrapper}>
				{!isMobile ? (
					<>
						<section className={styles.bannerText}>차근차근 하나씩 하다보면</section>
						<section className={styles.bannerText}>UX 전문가가 되어있을 거에요</section>
					</>
				) : (
					<>
						<section className={styles.bannerText}>차근차근 하나씩 하다보면</section>
						<section className={styles.bannerText}>UX 전문가가 </section>
						<section className={styles.bannerText}>되어있을 거에요</section>
					</>
				)}
			</div>
			<div className={styles.buttonWrapper}>
				<Link href="/howtouse#fileDownload">
					<Button color="line" className={styles.button}>
						<ButtonText level={1}>3x 이용 방법</ButtonText>
					</Button>
				</Link>
			</div>
			<div className={styles.imgWrapper}>
				<KeyvisualCardList />
			</div>
		</section>
	);
}

export default HomeBanner;
