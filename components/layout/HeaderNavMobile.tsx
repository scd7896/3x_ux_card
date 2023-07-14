import { useCallback, useEffect, useState } from "react";
import CloseIcon from "../icon/CloseIcon";
import MainGnb from "../icon/MainGnb";
import MenuIcon from "../icon/MenuIcon";
import Link from "../Link/Link";
import Body from "../text/Body";
import styles from "./HeaderNavMobile.module.css";

export default function HeaderNavMobile() {
	const [showMenu, setShowMenu] = useState(false);

	const closeMenu = useCallback(() => {
		setShowMenu(false);
	}, []);

	useEffect(() => {
		if (showMenu) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
	}, [showMenu]);

	return (
		<header className={styles.header}>
			<nav className={styles.nav}>
				<Link href="/">
					<MainGnb />
				</Link>

				<button className={styles.menuButton} onClick={() => setShowMenu((prev) => !prev)}>
					{showMenu ? <CloseIcon /> : <MenuIcon />}
				</button>
			</nav>
			<section className={`${styles.menuList} ${showMenu && styles.open}`}>
				<Link className={styles.link} onClick={closeMenu} href="/">
					<Body level={2}>Home</Body>
				</Link>
				<Link className={styles.link} onClick={closeMenu} href="/howtouse">
					<Body level={2}>How to use</Body>
				</Link>
				<Link className={styles.link} onClick={closeMenu} href="/cards">
					<Body level={2}>Cards</Body>
				</Link>
				<Link className={styles.link} onClick={closeMenu} href="/contact">
					<Body level={2}>Contact</Body>
				</Link>
			</section>
		</header>
	);
}
