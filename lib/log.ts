class GALogger {
  clickHomeTopBanner() {
    (window as any).dataLayer.push({
      event: "custom_click",
      value: "click_home_topbanner",
    });
  }

  clickGnbLogo() {
    (window as any).dataLayer.push({
      event: "custom_click",
      value: "click_gnb_logo",
    });
  }

  clickGnbHowtouse() {
    (window as any).dataLayer.push({
      event: "custom_click",
      value: "click_gnb_howtouse",
    });
  }

  clickGnbCards() {
    (window as any).dataLayer.push({
      event: "custom_click",
      value: "click_gnb_cards",
    });
  }

  clickGnbContact() {
    (window as any).dataLayer.push({
      event: "custom_click",
      value: "click_gnb_contact",
    });
  }

  clickHomePersonal() {
    (window as any).dataLayer.push({
      event: "custom_click",
      value: "click_home_personal",
    });
  }

  clickHomeRenewal() {
    (window as any).dataLayer.push({
      event: "custom_click",
      value: "click_home_renewal",
    });
  }

  clickHomeLaunching() {
    (window as any).dataLayer.push({
      event: "custom_click",
      value: "click_home_lauching",
    });
  }

  clickHomePrints() {
    (window as any).dataLayer.push({
      event: "custom_click",
      value: "click_home_prints",
    });
  }

  clickHomeCardList() {
    (window as any).dataLayer.push({
      event: "custom_click",
      value: "click_home_cardlist",
    });
  }

  clickHowtouseHandbookDownload() {
    (window as any).dataLayer.push({
      event: "custom_click",
      value: "click_howtouse_handbook_download",
    });
  }

  clickHowtouseWorksheetDownload() {
    (window as any).dataLayer.push({
      event: "custom_click",
      value: "click_howtouse_worksheet_download",
    });
  }

  clickCardListCategory(category: string) {
    (window as any).dataLayer.push({
      event: "custom_click",
      value: `click_cardlist_filter_category_${category}`,
    });
  }

  clickCardListFilterValue(category: string, value: string) {
    console.log(dataLayer, (window as any).dataLayer);
    (window as any).dataLayer.push({
      event: "custom_click",
      value: `click_cardlist_filter_${category}_${value}`,
    });
  }

  clickCardListMemberFilter(member: string, isEnable: boolean = true) {
    (window as any).dataLayer.push({
      event: "custom_click",
      value: `click_cardlist_member_${member}_${
        isEnable ? "enable" : "disable"
      }`,
    });
  }

  clickCardList(name: string) {
    (window as any).dataLayer.push({
      event: "custom_click",
      value: `click_cardlist_${name}`,
    });
  }

  clickPostIframe(name: string) {
    (window as any).dataLayer.push({
      event: "custom_click",
      value: `click_carddetail_iframe_${name}`,
    });
  }

  clickCardDetailWorksheetDownload(name: string) {
    (window as any).dataLayer.push({
      event: "custom_click",
      value: `click_carddetail_worksheet_download_${name}`,
    });
  }

  clickCardDetailWroksheetGoFigma(name: string) {
    (window as any).dataLayer.push({
      event: "custom_click",
      value: `click_carddetail_worksheet_gofigma_${name}`,
    });
  }

  clickCardDetailGotoList(name: string) {
    (window as any).dataLayer.push({
      event: "custom_click",
      value: `click_carddetail_gotolist_${name}`,
    });
  }

  clickCardDetailShare(name: string) {
    (window as any).dataLayer.push({
      event: "custom_click",
      value: `click_carddetail_share_${name}`,
    });
  }

  clickCardDetailDownloadAllHandbook(name: string) {
    (window as any).dataLayer.push({
      event: "custom_click",
      value: `click_carddetail_download_all_handbook_${name}`,
    });
  }

  clickCardDetailDownloadAllWorksheet(name: string) {
    (window as any).dataLayer.push({
      event: "custom_click",
      value: `click_carddetail_download_all_worksheet_${name}`,
    });
  }

  clickContactMember(member: string) {
    (window as any).dataLayer.push({
      event: "custom_click",
      value: `click_contact_member_${member}`,
    });
  }

  clickContactMail() {
    (window as any).dataLayer.push({
      event: "custom_click",
      value: `click_contact_member`,
    });
  }
}

const gaLogger = new GALogger();

export default gaLogger;
