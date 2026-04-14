import Footer from "../Section/Common/Footer/Footer";
import Header from "../Section/Common/Header/Header";
import PageHeader from "../Section/Common/PageHeader/PageHeader";
import PricingSection from "../Section/Common/Pricing/Pricing";
import Wrapper from "../Section/Common/Wrapper";
import PricingSectionTwo from "../Section/Pricing/Pricing-2/Pricing";
  


const Pricing = () => {
  return (
    <Wrapper>
       <Header />
      <PageHeader title="Our Pricing Plan" />
      <PricingSection />
      <PricingSectionTwo />
      <Footer />
    </Wrapper>
  );
};

export default Pricing;