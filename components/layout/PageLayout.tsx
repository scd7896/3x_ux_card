import useWindowSize from "../../hooks/useWindowSize";
import Footer from "./Footer";
import HeaderNav from "./HeaderNav";
import HeaderNavMobile from "./HeaderNavMobile";
import styles from "./PageLayout.module.css";

interface IProp {
	children?: React.ReactNode;
}

export default function PageLayout({ children }: IProp) {
	const { isMobile } = useWindowSize();
	return (
		<>
			{isMobile ? <HeaderNavMobile /> : <HeaderNav />}
			<main className={styles.main}>{children}</main>
			<Footer />
		</>
	);
}
