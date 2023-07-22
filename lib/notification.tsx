import styles from "./notification.module.css";
import { createRoot } from "react-dom/client";
import CheckIcon from "../components/icon/CheckIcon";

interface IArgsProps {
	message: React.ReactNode;
	type?: "check";
}

const iconMap = {
	check: <CheckIcon />,
};

function Notification({ message, type }: IArgsProps) {
	return (
		<div className={styles.wrapper}>
			{type && <div className={styles.iconWrapper}>{iconMap[type]}</div>}
			{message}
		</div>
	);
}

export const push = ({ message, type }: IArgsProps) => {
	const notiElement = document.createElement("div");
	notiElement.style.zIndex = "9999";
	document.body.appendChild(notiElement);

	const root = createRoot(notiElement);

	root.render(<Notification message={message} type={type} />);

	setTimeout(() => {
		root.unmount();
		notiElement.remove();
	}, 1000);
};
