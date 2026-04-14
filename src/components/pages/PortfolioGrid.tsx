import Footer from "../Section/Common/Footer/Footer";
import Header from "../Section/Common/Header/Header";
import PageHeader from "../Section/Common/PageHeader/PageHeader";
import Wrapper from "../Section/Common/Wrapper";
import PortfolioGrid from "../Section/Portfolio/Grid/PortfolioGrid";

const Portfolio = () => {
	return (
		<Wrapper>
			<Header />
			<PageHeader title="Portfolio Grid" />
			<PortfolioGrid />
			<Footer />
		</Wrapper>
	);
};

export default Portfolio;
