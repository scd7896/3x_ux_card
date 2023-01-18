import { checkUrlByHtml } from "./url";

describe("URL util test", () => {
	describe("env가 production일 경우", () => {
		it("pathname 뒤에는 .html이 붙어야 한다.", () => {
			const result = checkUrlByHtml("/cards", "production");

			expect(result).toBe("/cards.html");
		});

		it("pathname이 / 일경우 /index.html이 되어야 한다", () => {
			const result = checkUrlByHtml("/", "production");

			expect(result).toBe("/index.html");
		});
	});
});
