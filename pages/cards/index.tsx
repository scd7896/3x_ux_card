import { useCallback } from "react";
import { BodyLayout } from "../../components/layout/Layout";
import CardList from "../../components/services/cards/CardList";
import CardsHeader from "../../components/services/cards/Header";
import StepDescription from "../../components/services/cards/StepDescription";
import useCardList from "../../hooks/cards/useCardList";

export default function CardsPage() {
	const { cards, setMembers, setProcess, setSituation, filter } = useCardList();

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
			<BodyLayout>
				<StepDescription descriptionKey={filter?.process || filter?.situation} />
				<CardList cards={cards || []} />
			</BodyLayout>
		</section>
	);
}
