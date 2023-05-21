import { useState } from "react";
import CloseIcon from "../icon/CloseIcon";
import MenuIcon from "../icon/MenuIcon";
import Link from "../Link/Link";
import Body from "../text/Body";
import styles from "./HeaderNavMobile.module.css";

export default function HeaderNavMobile() {
	const [showMenu, setShowMenu] = useState(false);

	return (
		<header className={styles.header}>
			<nav className={styles.nav}>
				<section className={styles.gnbWrapper}></section>
				<button className={styles.menuButton} onClick={() => setShowMenu((prev) => !prev)}>
					{showMenu ? <CloseIcon /> : <MenuIcon />}
				</button>
			</nav>
			<section className={`${styles.menuList} ${showMenu && styles.open}`}>
				<Link className={styles.link} href="/">
					<Body level={2}>Home</Body>
				</Link>
				<Link className={styles.link} href="/howtouse">
					<Body level={2}>How to use</Body>
				</Link>
				<Link className={styles.link} href="/cards">
					<Body level={2}>Cards</Body>
				</Link>
				<Link className={styles.link} href="/contact">
					<Body level={2}>Contact</Body>
				</Link>
			</section>
		</header>
	);
}
