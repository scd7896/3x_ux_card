import styles from "./ArrowLeft.module.css";

interface IProp {
	isReverse?: boolean;
}

export default function ArrowLeft({ isReverse }: IProp) {
	return (
		<div className={`${styles.wrapper} ${isReverse ? styles.reverse : undefined}`}>
			<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
				<rect opacity="0.2" width="16" height="16" fill="white" />
				<rect opacity="0.2" x="2" y="2" width="12" height="12" fill="white" />
				<path d="M9.5 3.5L5 8.25L9.5 13" stroke="#333333" stroke-linecap="round" stroke-linejoin="round" />
			</svg>
		</div>
	);
}

export const ArrowDown16 = () => {
	return (
		<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect opacity="0.2" y="16" width="16" height="16" transform="rotate(-90 0 16)" fill="white" />
			<rect opacity="0.2" x="2" y="14" width="12" height="12" transform="rotate(-90 2 14)" fill="white" />
			<path d="M3.5 6.5L8.25 11L13 6.5" stroke="#333333" stroke-linecap="round" stroke-linejoin="round" />
		</svg>
	);
};
