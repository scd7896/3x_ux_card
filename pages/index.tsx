import PageLayout from "../components/layout/PageLayout";
import HomeBanner from "../components/services/home/Banner";
import CardSection from "../components/services/home/CardSection";
import SheetDownloadSection from "../components/services/home/SheetDownloadSection";

export default function Home() {
	return (
		<PageLayout>
			<HomeBanner />
			<CardSection />
			<SheetDownloadSection />
		</PageLayout>
	);
}
