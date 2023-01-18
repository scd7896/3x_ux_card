import NextLink from "next/link";
import React, { useMemo } from "react";
import { IS_PRODUCTION } from "../../lib/env";
import { checkUrlByHtml } from "../../lib/url";
import styles from "./Link.module.css";

export default function Link(props: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
	const href = useMemo(() => {
		const result = checkUrlByHtml(props.href || "", IS_PRODUCTION ? "production" : "");
		console.log(result);
		return result;
	}, [props.href]);

	return (
		<NextLink href={href} {...props} className={`${styles.anchor} ${props.className}`} as={href}>
			{props.children}
		</NextLink>
	);
}
