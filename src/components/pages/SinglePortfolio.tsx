import Footer from "../Section/Common/Footer/Footer";
import Header from "../Section/Common/Header/Header";
import PageHeader from "../Section/Common/PageHeader/PageHeader";
import Wrapper from "../Section/Common/Wrapper";
import PortfolioDetailsSection from "../Section/SinglePortfolio/PortfolioDetails/PortfolioDetails";

const SinglePortfolio = () => {
	return (
		<Wrapper>
			<Header />
			<PageHeader title="Portfolio Details" />
			<PortfolioDetailsSection />
			<Footer />
		</Wrapper>
	);
};

export default SinglePortfolio;
