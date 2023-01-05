import NextLink from "next/link";
import React from "react";
import styles from "./Link.module.css";

export default function Link(props: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
	return (
		<NextLink href={props.href || ""} {...props} className={`${styles.anchor} ${props.className}`}>
			{props.children}
		</NextLink>
	);
}
