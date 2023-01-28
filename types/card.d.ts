export interface ICard {
	id: string;
	process: "공감" | "아이디어" | "프로토타입" | "테스트" | "출시";
	title: string;
	author: string;
	enTitle?: string;
	members?: string[];
	icon?: string;
	description?: string;
	level?: string;
	situation?: string;
}
