import CtaThree from "../Section/Common/Cta-3/CtaThree";
import FAQSection from "../Section/Common/FAQ/FAQSection";
import Footer from "../Section/Common/Footer/Footer";
import Header from "../Section/Common/Header/Header";
import PageHeader from "../Section/Common/PageHeader/PageHeader";
import Wrapper from "../Section/Common/Wrapper";

const Faq = () => {
	return (
		<Wrapper>
			<Header />
			<PageHeader title=" Faq" />
			<FAQSection />
			<CtaThree title="Still, you have any questions?" btnText="Contact Us" />
			<Footer />
		</Wrapper>
	);
};

export default Faq;
