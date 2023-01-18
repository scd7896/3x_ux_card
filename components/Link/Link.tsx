import NextLink from "next/link";
import React, { useMemo } from "react";
import { checkUrlByHtml } from "../../lib/url";
import styles from "./Link.module.css";

export default function Link(props: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
	const href = useMemo(() => {
		if (process.env.NODE_ENV === "production") {
			return checkUrlByHtml(props.href || "");
		}
		return props.href;
	}, [props.href]);

	return (
		<NextLink href={href || ""} {...props} className={`${styles.anchor} ${props.className}`}>
			{props.children}
		</NextLink>
	);
}
