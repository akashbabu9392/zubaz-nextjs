import Footer from "../Section/Common/Footer/Footer";
import Header from "../Section/Common/Header/Header";
import IntegrationSectionTwo from "../Section/Common/Integration-2/IntegrationTwo";
import PageHeader from "../Section/Common/PageHeader/PageHeader";
import PricingSection from "../Section/Common/Pricing/Pricing";
import Wrapper from "../Section/Common/Wrapper";
import ServiceSection from "../Section/Service/Service/Service";
 


const Service = () => {
  return (
    <Wrapper>
      <Header />
      <PageHeader title="Our Services" />
      <ServiceSection />
      <PricingSection />
      <IntegrationSectionTwo />
      <Footer />
    </Wrapper>
  );
};

export default Service;