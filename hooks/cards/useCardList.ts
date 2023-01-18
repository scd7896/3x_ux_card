import { useEffect, useState } from "react";
import { ICard } from "../../types/card";

interface IFilter {
	category?: string;
	step?: string;
	members?: string;
}

export default function useCardList() {
	const [cards, setCards] = useState<ICard[]>();
	const [filter, setFilter] = useState<IFilter>();

	useEffect(() => {
		fetch("/list.json")
			.then((res) => res.json())
			.then((data) => {
				setCards(data.map(({ data, _id }: any) => ({ ...data, members: data.members?.split(", "), id: _id })));
			});
	}, []);

	return { cards };
}
