import { useEffect, useMemo, useState } from "react";

const processTabs = [
	{ key: "전체" },
	{ key: "공감" },
	{ key: "아이디어" },
	{ key: "프로토타입" },
	{ key: "테스트" },
	{ key: "출시" },
];

const situationTabs = [
	{
		key: "전체",
	},
	{
		key: "개인작업",
	},
	{
		key: "신규런칭",
	},
	{
		key: "리뉴얼 고도화",
		label: "리뉴얼 · 고도화",
	},
];

enum ECategoryKey {
	PROCESS = "process",
	SITUATION = "situation",
}

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
