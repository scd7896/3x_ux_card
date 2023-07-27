import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import { ECategoryKey, EProcess, ESituation } from "../../types/card.d";

const processTabs = [
	{ key: "전체" },
	{ key: EProcess.EMPATHY },
	{ key: EProcess.DESIGN },
	{ key: EProcess.PROTOTYPE },
	{ key: EProcess.TEST },
	{ key: EProcess.PUBLISH },
];

const situationTabs = [
	{
		key: "전체",
	},
	{
		key: ESituation.PRIVATE_WORK,
	},
	{
		key: ESituation.NEW_LUNCH,
	},
	{
		key: ESituation.RENEWAL,
		label: "리뉴얼 · 고도화",
	},
];

const categories = [
	{
		key: ECategoryKey.PROCESS,
		label: "프로세스별 보기",
	},
	{
		key: ECategoryKey.SITUATION,
		label: "상황별 보기",
	},
];

export default function useCategoryFilter() {
	const { query, replace } = useRouter();
	const filterValue = useMemo(() => {
		return {
			value: (query.cardFilterValue as string) || "전체",
			category: (query.category as string) || ECategoryKey.PROCESS,
		};
	}, [query]);

	const process = useMemo(() => {
		if (filterValue.category === ECategoryKey.PROCESS) return processTabs;
		if (filterValue.category === ECategoryKey.SITUATION) return situationTabs;
		return [];
	}, [filterValue]);

	return {
		category: filterValue.category,
		setCategory: (nextCategory: string) => {
			replace(`/cards?cardFilterValue=전체&category=${nextCategory}`);
		},
		process,
		value: filterValue.value,
		categories,
		setValue: (value: string) => {
			replace(`/cards?cardFilterValue=${value}&category=${filterValue.category}`);
		},
	};
}
