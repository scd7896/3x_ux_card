export enum EProcess {
	EMPATHY = "공감",
	DESIGN = "설계",
	PROTOTYPE = "프로토타입",
	TEST = "테스트",
	PUBLISH = "출시",
}

export enum ESituation {
	PRIVATE_WORK = "개인작업",
	NEW_LUNCH = "신규런칭",
	RENEWAL = "리뉴얼고도화",
}

export enum ECategoryKey {
	PROCESS = "process",
	SITUATION = "situation",
}

export interface ICard {
	id: string;
	process: EProcess;
	title: string;
	author: string;
	enTitle?: string;
	members?: string[];
	icon?: string;
	description?: string;
	level?: string;
	situation?: ESituation;
	createdAt?: string;
	duration?: number;
}
