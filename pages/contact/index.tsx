import { BodyLayout } from "../../components/layout/Layout";
import ContactBody from "../../components/services/contact/ContactBody";
import ContactTitle from "../../components/services/contact/ContactTitle";

export default function ContactPage() {
	return (
		<BodyLayout>
			<section>
				<ContactTitle />
				<ContactBody />
			</section>
		</BodyLayout>
	);
}
