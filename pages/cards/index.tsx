import { useCallback } from "react";
import { BodyLayout } from "../../components/layout/Layout";
import CardList from "../../components/services/cards/CardList";
import CardsHeader from "../../components/services/cards/Header";
import MemberFilter from "../../components/services/cards/MemberFilter";
import MemberFilterMobile from "../../components/services/cards/MemberFilterMobile";
import StepDescription from "../../components/services/cards/StepDescription";
import useCardList from "../../hooks/cards/useCardList";
import useWindowSize from "../../hooks/useWindowSize";

export default function CardsPage() {
	const { isMobile } = useWindowSize();
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
				{!isMobile && <StepDescription descriptionKey={filter?.process || filter?.situation} />}
				{isMobile ? <MemberFilterMobile onChange={setMembers} /> : <MemberFilter onChange={setMembers} />}

				<CardList cards={cards || []} />
			</BodyLayout>
		</section>
	);
}
