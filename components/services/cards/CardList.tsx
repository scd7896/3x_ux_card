import { ICard } from "../../../types/card";
import UXCardview from "../../Card/UXCardview";
import { Col, Row } from "../../layout/Layout";
import Link from "../../Link/Link";
import styles from "./CardList.module.css";

interface IProp {
	cards: ICard[];
}

export default function CardList({ cards }: IProp) {
	return (
		<section className={styles.wrapper}>
			<Row rowGap={24}>
				{cards.map((it, idx) => (
					<Col col={3} key={idx}>
						<Link className={styles.link} href={`/posts/${it.id}`}>
							<UXCardview key={idx} {...it} />
						</Link>
					</Col>
				))}
			</Row>
		</section>
	);
}
