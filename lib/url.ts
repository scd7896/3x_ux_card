export const checkUrlByHtml = (url: string, env?: string) => {
	if (env === "production") {
		let [pathname, search] = url.split("?");
		const paths = pathname.split("/");
		let lastPath = paths.pop();
		if (lastPath === "") {
			pathname = "/index.html";
		} else {
			lastPath = `${lastPath}.html`;
			paths.push(lastPath);
			pathname = paths.join("/");
		}
		return `${pathname}${search ? `?${search}` : ""}`;
	}

	return url;
};
