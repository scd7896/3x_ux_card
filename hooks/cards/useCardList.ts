import { useCallback, useEffect, useMemo, useState } from "react";
import { ESituation, ICard } from "../../types/card.d";

interface IFilter {
	situation?: ESituation;
	process?: string;
	members?: string[];
}

export default function useCardList() {
	const [cards, setCards] = useState<ICard[]>();
	const [filter, setFilter] = useState<IFilter>();

	useEffect(() => {
		fetch("/list.json")
			.then((res) => res.json())
			.then((data) => {
				setCards(
					data.map(({ data, _id, createdAt }: any) => ({
						...data,
						members: data.members?.split(", "),
						id: _id,
						createdAt: createdAt,
					}))
				);
			});
	}, []);

	const setMembers = useCallback((members: string[]) => {
		setFilter((prev) => {
			if (prev) {
				return {
					...prev,
					members,
				};
			}
			return { members };
		});
	}, []);

	const setProcess = useCallback((process: string) => {
		setFilter((prev) => {
			if (prev) {
				return {
					...prev,
					process,
					situation: undefined,
				};
			}
			return {
				process,
			};
		});
	}, []);

	const setSituation = useCallback((situation: ESituation) => {
		setFilter((prev) => {
			if (prev) {
				return {
					...prev,
					situation,
					process: undefined,
				};
			}

			return {
				situation,
			};
		});
	}, []);

	const filteredCards = useMemo(() => {
		if (!filter) return cards;
		return cards
			?.filter((it) => {
				if (filter.process) return it.process === filter.process;
				return true;
			})
			.filter((it) => {
				if (filter.situation) return it.situation?.includes(filter.situation);
				return true;
			})
			.filter((it) => {
				if (!filter.members?.length) return true;

				if (it.members?.length) {
					return filter.members.reduce((acc, filterMember) => {
						return acc && it.members?.find((member) => member === filterMember) !== undefined;
					}, true);
				}

				return false;
			});
	}, [cards, filter]);

	return { cards: filteredCards, setMembers, setSituation, setProcess, filter };
}
