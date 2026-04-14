import CtaThree from "../Section/Common/Cta-3/CtaThree";
import Footer from "../Section/Common/Footer/Footer";
import Header from "../Section/Common/Header/Header";
import PageHeader from "../Section/Common/PageHeader/PageHeader";
import TestimonialSection from "../Section/Common/Testimonial/Testimonial";
import Wrapper from "../Section/Common/Wrapper";

const Testimonials = () => {
	return (
		<Wrapper>
			<Header />
			<PageHeader title="Testimonial" />
			<TestimonialSection button="false" />
			<CtaThree title="Still, you have any questions?" btnText="Contact Us" />
			<Footer />
		</Wrapper>
	);
};

export default Testimonials;
