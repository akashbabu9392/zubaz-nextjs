import CareerSection from "../Section/Career/CareerSection/CareerSection";
import ContentSection from "../Section/Career/Content/ContentSection";
import FeatureSection from "../Section/Career/Feature/FeatureSection";
import StatSection from "../Section/Career/Stat/StatSection";
import CtaThree from "../Section/Common/Cta-3/CtaThree";
import Footer from "../Section/Common/Footer/Footer";
import Header from "../Section/Common/Header/Header";
import PageHeader from "../Section/Common/PageHeader/PageHeader";
import Wrapper from "../Section/Common/Wrapper";

const Career = () => {
	return (
		<Wrapper>
			<Header />
			<PageHeader title="Career" />
			<CareerSection />
			<ContentSection />
			<StatSection />
			<FeatureSection />
			<CtaThree title="Still, you have any questions?" btnText="Contact Us" />
			<Footer />
		</Wrapper>
	);
};

export default Career;
