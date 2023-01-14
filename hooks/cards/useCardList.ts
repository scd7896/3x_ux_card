import { useEffect, useState } from "react";

interface IFilter {
	category?: string;
	step?: string;
	members?: string;
}

interface ICard {
	data: {
		title: string;
		author: string;
	};
}

export default function useCardList() {
	const [cards, setCards] = useState<ICard[]>();
	const [filter, setFilter] = useState<IFilter>();

	useEffect(() => {
		fetch("/list.json")
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setCards(data.data);
			});
	}, []);

	return {};
}
