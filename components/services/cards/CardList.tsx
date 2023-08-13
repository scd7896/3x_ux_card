import useWindowSize from "../../../hooks/useWindowSize";
import gaLogger from "../../../lib/log";
import { ICard } from "../../../types/card.d";
import UXCardview from "../../Card/UXCardview";
import { Col, Row } from "../../layout/Layout";
import Link from "../../Link/Link";
import styles from "./CardList.module.css";

interface IProp {
	cards: ICard[];
}

export default function CardList({ cards }: IProp) {
	const { isMobile } = useWindowSize();

	return (
		<Row className={styles.cardList} rowGap={24} data-cy="card_wrapper" style={{ marginBottom: "120px" }}>
			{cards.map((it, idx) => (
				<Col className={styles.card} col={isMobile ? 12 : 3} key={idx} data-cy="card">
					<Link
						className={styles.link}
						href={`/posts/${it.id}`}
						onClick={() => {
							gaLogger.clickCardList(it.id);
						}}
					>
						<UXCardview key={idx} {...it} />
					</Link>
				</Col>
			))}
		</Row>
	);
}
