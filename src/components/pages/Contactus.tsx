import FAQSection from "../Section/Common/FAQ/FAQSection";
import Footer from "../Section/Common/Footer/Footer";
import Header from "../Section/Common/Header/Header";
import PageHeader from "../Section/Common/PageHeader/PageHeader";
import Wrapper from "../Section/Common/Wrapper";
import CallUsSection from "../Section/ContactUs/CallUs/CallUsSection";
import ContactSection from "../Section/ContactUs/Contact/ContactSection";

const Contactus = () => {
	return (
		<Wrapper>
			<Header />
			<PageHeader title="Contact Us" />
			<ContactSection />
			<CallUsSection />
			<FAQSection />
			<Footer />
		</Wrapper>
	);
};

export default Contactus;
