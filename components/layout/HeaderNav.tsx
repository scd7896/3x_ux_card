import { useRouter } from "next/router";
import { useCallback } from "react";
import MainGnb from "../icon/MainGnb";
import Link from "../Link/Link";
import Body from "../text/Body";
import SubTitle from "../text/SubTitle";
import { ButtonText } from "../text/Text";
import styles from "./HeaderNav.module.css";

export default function HeaderNav() {
	const { pathname } = useRouter();

	const getText = useCallback(
		(keyString: string, text: string) => {
			if (keyString === pathname) {
				return <SubTitle level={2}>{text}</SubTitle>;
			} else {
				return <Body level={2}>{text}</Body>;
			}
		},
		[pathname]
	);

	return (
		<header className={styles.header}>
			<nav className={styles.nav}>
				<Link href="/" className={styles.link}>
					<MainGnb />
				</Link>
				<Link className={`${styles.link} ${pathname === "/howtouse" && styles.selected}`} href="/howtouse">
					{getText("/howtouse", "How to use")}
				</Link>
				<Link className={`${styles.link} ${pathname === "/cards" && styles.selected}`} href="/cards">
					{getText("/cards", "Cards")}
				</Link>
				<Link className={`${styles.link} ${pathname === "/contact" && styles.selected}`} href="/contact">
					{getText("/contact", "Contact")}
				</Link>
			</nav>
		</header>
	);
}
