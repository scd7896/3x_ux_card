const dataLayer = typeof window === "undefined" ? [] : (window as any)?.dataLayer || [];

class GALogger {
	clickHomeTopBanner() {
		console.log("called");
		dataLayer.push({ event: "custom_click", value: "click_home_topbanner" });
	}

	clickGnbLogo() {
		dataLayer.push({ event: "custom_click", value: "click_gnb_logo" });
	}

	clickGnbHowtouse() {
		dataLayer.push({ event: "custom_click", value: "click_gnb_howtouse" });
	}

	clickGnbCards() {
		dataLayer.push({ event: "custom_click", value: "click_gnb_cards" });
	}

	clickGnbContact() {
		dataLayer.push({ event: "custom_click", value: "click_gnb_contact" });
	}

	clickHomePersonal() {
		dataLayer.push({ event: "custom_click", value: "click_home_personal" });
	}

	clickHomeRenewal() {
		dataLayer.push({ event: "custom_click", value: "click_home_renewal" });
	}

	clickHomeLaunching() {
		dataLayer.push({ event: "custom_click", value: "click_home_lauching" });
	}

	clickHomePrints() {
		dataLayer.push({ event: "custom_click", value: "click_home_prints" });
	}

	clickHomeCardList() {
		dataLayer.push({ event: "custom_click", value: "click_home_cardlist" });
	}

	clickHowtouseHandbookDownload() {
		dataLayer.push({ event: "custom_click", value: "click_howtouse_handbook_download" });
	}

	clickHowtouseWorksheetDownload() {
		dataLayer.push({ event: "custom_click", value: "click_howtouse_worksheet_download" });
	}

	clickCardListCategory(category: string) {
		dataLayer.push({ event: "custom_click", value: `click_cardlist_filter_category_${category}` });
	}

	clickCardListFilterValue(category: string, value: string) {
		dataLayer.push({ event: "custom_click", value: `click_cardlist_filter_${category}_${value}` });
	}

	clickCardListMemberFilter(member: string, isEnable: boolean = true) {
		dataLayer.push({
			event: "custom_click",
			value: `click_cardlist_member_${member}_${isEnable ? "enable" : "disable"}`,
		});
	}

	clickCardList(name: string) {
		dataLayer.push({
			event: "custom_click",
			value: `click_cardlist_${name}`,
		});
	}

	clickPostIframe(name: string) {
		dataLayer.push({
			event: "custom_click",
			value: `click_carddetail_iframe_${name}`,
		});
	}

	clickCardDetailWorksheetDownload(name: string) {
		dataLayer.push({
			event: "custom_click",
			value: `click_carddetail_worksheet_download_${name}`,
		});
	}

	clickCardDetailWroksheetGoFigma(name: string) {
		dataLayer.push({
			event: "custom_click",
			value: `click_carddetail_worksheet_gofigma_${name}`,
		});
	}

	clickCardDetailGotoList(name: string) {
		dataLayer.push({
			event: "custom_click",
			value: `click_carddetail_gotolist_${name}`,
		});
	}

	clickCardDetailShare(name: string) {
		dataLayer.push({
			event: "custom_click",
			value: `click_carddetail_share_${name}`,
		});
	}

	clickCardDetailDownloadAllHandbook(name: string) {
		dataLayer.push({
			event: "custom_click",
			value: `click_carddetail_download_all_handbook_${name}`,
		});
	}

	clickCardDetailDownloadAllWorksheet(name: string) {
		dataLayer.push({
			event: "custom_click",
			value: `click_carddetail_download_all_worksheet_${name}`,
		});
	}

	clickContactMember(member: string) {
		dataLayer.push({
			event: "custom_click",
			value: `click_contact_member_${member}`,
		});
	}

	clickContactMail() {
		dataLayer.push({
			event: "custom_click",
			value: `click_contact_member`,
		});
	}
}

const gaLogger = new GALogger();

export default gaLogger;
