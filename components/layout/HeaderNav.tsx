import Link from "../Link/Link";
import { ButtonText } from "../text/Text";
import styles from "./HeaderNav.module.css";

export default function HeaderNav() {
	return (
		<header className={styles.header}>
			<nav className={styles.nav}>
				<section className={styles.gnbWrapper}></section>
				<Link className={styles.link}>
					<ButtonText level={1}>How to use</ButtonText>
				</Link>
				<Link className={styles.link} href="/cards">
					<ButtonText level={1}>Cards</ButtonText>
				</Link>
				<Link className={styles.link} href="/contact">
					<ButtonText level={1}>Contact</ButtonText>
				</Link>
			</nav>
		</header>
	);
}
