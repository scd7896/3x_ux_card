import { useState } from "react";
import CardsHeader from "../../components/services/cards/Header";
import useCardList from "../../hooks/cards/useCardList";

export default function CardsPage() {
	const {} = useCardList();
	return (
		<section>
			<CardsHeader
				onChange={(param) => {
					console.log(param);
				}}
			/>
		</section>
	);
}
