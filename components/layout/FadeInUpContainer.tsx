import { useRef, useEffect } from "react";
import styles from "./FadeInUpContainer.module.css";

interface IProp extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode;
}

export default function FadeInUpContainer({ children, ...props }: IProp) {
	const wrapperRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (wrapperRef.current) {
			const observer = new IntersectionObserver((entries) => {
				const target = entries[0];
				if (target.isIntersecting && wrapperRef.current) {
					wrapperRef.current.classList.add(styles.fadeUp);
					observer.unobserve(wrapperRef.current);
				}
			});

			observer.observe(wrapperRef.current);
		}
	}, []);

	return (
		<div {...props} className={`${styles.wrapper} ${props.className}`} ref={wrapperRef}>
			{children}
		</div>
	);
}
