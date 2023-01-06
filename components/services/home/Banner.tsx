import Button from "../../Button/Button";
import { ButtonText } from "../../text/Text";
import styles from "./Banner.module.css";

export default function HomeBanner() {
	return (
		<section className={styles.wrapper}>
			<div className={styles.bannerTextWrapper}>
				<section className={styles.bannerText}>차근차근 하나씩 하다보면</section>
				<section className={styles.bannerText}>UX 전문가가 되어있을 거에요</section>
			</div>
			<div className={styles.buttonWrapper}>
				<Button color="line">
					<ButtonText level={1}>3x 이용방법</ButtonText>
				</Button>
			</div>
			<div className={styles.imgWrapper}></div>
		</section>
	);
}
