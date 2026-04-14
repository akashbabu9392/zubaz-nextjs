import Footer from "../Section/Common/Footer/Footer";
import Header from "../Section/Common/Header/Header";
import PageHeader from "../Section/Common/PageHeader/PageHeader";
import Wrapper from "../Section/Common/Wrapper";
import IntegrationSection from "../Section/Integrations/Integration/Integration";

const Integrations = () => {
	return (
		<Wrapper>
			<Header />
			<PageHeader title="Integrations" />
			<IntegrationSection />
			<Footer />
		</Wrapper>
	);
};

export default Integrations;
