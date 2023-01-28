import { useCallback } from "react";
import CardList from "../../components/services/cards/CardList";
import CardsHeader from "../../components/services/cards/Header";
import useCardList from "../../hooks/cards/useCardList";

export default function CardsPage() {
	const { cards, setMembers, setProcess, setSituation } = useCardList();

	const headerChangeListener = useCallback((param: any) => {
		if (param.category === "process") {
			setProcess(param.value);
		}
		if (param.category === "situation") {
			setSituation(param.value);
		}
	}, []);

	return (
		<section>
			<CardsHeader onChange={headerChangeListener} />
			<CardList cards={cards || []} />
		</section>
	);
}
