import Footer from "../Section/Common/Footer/Footer";
import Header from "../Section/Common/Header/Header";
import PageHeader from "../Section/Common/PageHeader/PageHeader";
import Wrapper from "../Section/Common/Wrapper";
import SingleCareerSection from "../Section/SingleCareer/SingleCareerSection";

const SingleCareer = () => {
	return (
		<Wrapper>
			<Header />
			<PageHeader title="Career Details" />
			<SingleCareerSection />
			<Footer />
		</Wrapper>
	);
};

export default SingleCareer;
