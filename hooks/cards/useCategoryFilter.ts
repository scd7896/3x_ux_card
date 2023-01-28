import { useEffect, useMemo, useState } from "react";
import { ECategoryKey, EProcess, ESituation } from "../../types/card.d";

const processTabs = [
	{ key: "전체" },
	{ key: EProcess.EMPATHY },
	{ key: EProcess.IDEA },
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
	const [category, setCategory] = useState<string>(ECategoryKey.PROCESS);
	const [value, setValue] = useState<string>("전체");

	const process = useMemo(() => {
		if (category === ECategoryKey.PROCESS) return processTabs;
		if (category === ECategoryKey.SITUATION) return situationTabs;
		return [];
	}, [category]);

	useEffect(() => {
		setValue("전체");
	}, [category]);

	return {
		category,
		setCategory,
		process,
		value,
		categories,
		setValue,
	};
}
