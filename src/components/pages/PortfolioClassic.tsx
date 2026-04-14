import Footer from "../Section/Common/Footer/Footer";
import Header from "../Section/Common/Header/Header";
import PageHeader from "../Section/Common/PageHeader/PageHeader";
import Wrapper from "../Section/Common/Wrapper";
import PortfolioClassic from "../Section/Portfolio/Classic/PortfolioClassic";

 
const PortfolioClassicArea = () => {
  return (
    <Wrapper>
       <Header />
      <PageHeader title="Portfolio Classic" />
      <PortfolioClassic />
      <Footer />
    </Wrapper>
  );
};

export default PortfolioClassicArea;