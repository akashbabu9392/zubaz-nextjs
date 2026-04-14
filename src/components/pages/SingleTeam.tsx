import Footer from "../Section/Common/Footer/Footer";
import Header from "../Section/Common/Header/Header";
import PageHeader from "../Section/Common/PageHeader/PageHeader";
import Wrapper from "../Section/Common/Wrapper";
import AboutSection from "../Section/SingleTeam/About/About";
import ExperienceSection from "../Section/SingleTeam/Experience/Experience";

const SingleTeam = () => {
	return (
		<Wrapper>
			<Header />
			<PageHeader title="Team Details" />
			<AboutSection />
			<ExperienceSection />
			<Footer />
		</Wrapper>
	);
};

export default SingleTeam;
