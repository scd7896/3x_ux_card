import PageLayout from "../components/layout/PageLayout";
import HomeBanner from "../components/services/home/Banner";
import CardSection from "../components/services/home/CardSection";

export default function Home() {
	return (
		<PageLayout>
			<HomeBanner />
			<CardSection />
		</PageLayout>
	);
}
