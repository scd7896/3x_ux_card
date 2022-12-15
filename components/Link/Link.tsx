import Link from "next/link";
import React from "react";
import styles from "./Link.module.css";

export default function (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
	return (
		<Link href={props.href || ""} {...props} className={`${props.className}`}>
			<span className={`${styles.anchor}`}>{props.children}</span>
		</Link>
	);
}
