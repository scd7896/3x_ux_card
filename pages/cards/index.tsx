import CardList from "../../components/services/cards/CardList";
import CardsHeader from "../../components/services/cards/Header";
import useCardList from "../../hooks/cards/useCardList";

export default function CardsPage() {
	const { cards } = useCardList();
	return (
		<section>
			<CardsHeader onChange={(param) => {}} />
			<CardList cards={cards || []} />
		</section>
	);
}
