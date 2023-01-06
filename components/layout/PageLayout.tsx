import Footer from "./Footer";
import HeaderNav from "./HeaderNav";

interface IProp {
	children?: React.ReactNode;
}

export default function PageLayout({ children }: IProp) {
	return (
		<>
			<HeaderNav></HeaderNav>
			<main>{children}</main>
			<Footer />
		</>
	);
}
