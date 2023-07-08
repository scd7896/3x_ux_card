import useWindowSize from "../../../hooks/useWindowSize";
import Body from "../../text/Body";
import SubTitle from "../../text/SubTitle";
import Title from "../../text/Title";
import styles from "./HowtouseHeader.module.css";
import HowtouseKeyvisual from "./HowtouseKeyvisual";
import HowtouseKeyvisualMobile from "./HowtouseKeyvisualMobile";

export default function HowtouseHeader() {
	const { isMobile } = useWindowSize();

	return (
		<div className={styles.wrapper}>
			<img className={styles.bgimg} src="/img/howtouse-bg.png" />
			{isMobile ? <HowtouseKeyvisualMobile /> : <HowtouseKeyvisual />}
		</div>
	);
}
