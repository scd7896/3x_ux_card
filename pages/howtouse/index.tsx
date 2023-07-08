import { BodyLayout } from "../../components/layout/Layout";
import HowtouseBody from "../../components/services/howtouse/HowtouseBody";
import HowtouseHeader from "../../components/services/howtouse/HowtouseHeader";

export default function HowtousePage() {
	return (
		<section>
			<HowtouseHeader />
			<BodyLayout>
				<HowtouseBody />
			</BodyLayout>
		</section>
	);
}
