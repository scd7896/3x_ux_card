import { useRouter } from "next/router";
import { useCallback } from "react";
import gaLogger from "../../lib/log";
import MainGnb from "../icon/MainGnb";
import Link from "../Link/Link";
import Body from "../text/Body";
import SubTitle from "../text/SubTitle";
import styles from "./HeaderNav.module.css";

export default function HeaderNav() {
	const { pathname } = useRouter();

	const getText = useCallback(
		(keyString: string, text: string) => {
			return (
				<Body level={2} className={keyString === pathname ? styles.selected : ""}>
					{text}
				</Body>
			);
		},
		[pathname]
	);

	return (
		<header className={styles.header}>
			<nav className={styles.nav}>
				<Link href="/" className={styles.link} onClick={() => gaLogger.clickGnbLogo()}>
					<MainGnb />
				</Link>
				<Link
					className={`${styles.link} ${pathname === "/howtouse" && styles.selected}`}
					href="/howtouse"
					onClick={() => gaLogger.clickGnbHowtouse()}
				>
					{getText("/howtouse", "How to use")}
				</Link>
				<Link
					className={`${styles.link} ${pathname === "/cards" && styles.selected}`}
					href="/cards"
					onClick={() => gaLogger.clickGnbCards()}
				>
					{getText("/cards", "Cards")}
				</Link>
				<Link
					className={`${styles.link} ${pathname === "/contact" && styles.selected}`}
					href="/contact"
					onClick={() => gaLogger.clickGnbContact()}
				>
					{getText("/contact", "Contact")}
				</Link>
			</nav>
		</header>
	);
}
