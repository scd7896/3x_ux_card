import { PropsWithChildren, useEffect, useRef } from "react";
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
		} else {
			document.body.style.overflow = "auto";
		}

		return () => {
			document.body.removeEventListener("keydown", escHandler);
		};
	}, [isOpen, onClose]);

	const contentRef = useRef<HTMLDivElement>(null);

	if (!isOpen) return null;

	return createPortal(
		<div
			className={styles.wrapper}
			onClick={(e) => {
				let target: HTMLElement | null = e.target as HTMLDivElement;
				while (target) {
					if (contentRef.current === target) return;
					target = target.parentElement;
				}
				onClose?.();
			}}
		>
			<section ref={contentRef} className={`${styles.contentWrapper} ${position && styles[position]}`}>
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
