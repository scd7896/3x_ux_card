import { PropsWithChildren, useEffect } from "react";
import { createPortal } from "react-dom";
import SubTitle from "../text/SubTitle";
import styles from "./Modal.module.css";

interface IProp extends PropsWithChildren {
	isOpen?: boolean;
	onClose?: () => void;
	title?: string;
	position?: "bottom" | "middle";
}

export default function Modal({ isOpen, children, onClose, title, position }: IProp) {
	useEffect(() => {
		function escHandler(e: KeyboardEvent) {
			if (e.key.toLowerCase() === "escape") {
				onClose?.();
			}
		}

		if (isOpen) {
			document.body.style.overflow = "hidden";
			document.body.addEventListener("keydown", escHandler);
		}

		return () => {
			document.body.removeEventListener("keydown", escHandler);
		};
	}, [isOpen, onClose]);

	if (!isOpen) return null;

	return createPortal(
		<div className={styles.wrapper} onClick={onClose}>
			<section className={`${styles.contentWrapper} ${position && styles[position]}`}>
				{title && (
					<div className={styles.title}>
						<SubTitle level={2}>{title}</SubTitle>
					</div>
				)}
				<div className={styles.childrenWrapper}>{children}</div>
			</section>
		</div>,
		document.body
	);
}
