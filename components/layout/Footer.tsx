import Body from "../text/Body";
import SubTitle from "../text/SubTitle";
import styles from "./Footer.module.css";

export default function Footer() {
	return (
		<footer className={styles.wrapper}>
			<section className={styles.subTitleWrapper}>
				<SubTitle level={1}>Copyright 2021. 3X . All rights reserved.</SubTitle>
			</section>
			<Body level={3}>사이트 공유외의 무단 배포 및 가공을 불허합니다.</Body>
			<Body level={3}>3xdesign.ux@gmail.com</Body>
		</footer>
	);
}
