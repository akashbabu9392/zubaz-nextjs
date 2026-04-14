import FAQSection from "../Section/Common/FAQ/FAQSection";
import FooterSectionThree from "../Section/Common/Footer-3/FooterThree";
import HomeHeader from "../Section/Common/Header/HomeHeader"; 
import IntegrationSectionTwo from "../Section/Common/Integration-2/IntegrationTwo";
import PricingSection from "../Section/Common/Pricing/Pricing";
import Wrapper from "../Section/Common/Wrapper";
import ContentSectionTwo from "../Section/Home-3/Content-2/ContentTwo";
import ContentSection from "../Section/Home-3/Content/Content"; 
import HeroSection from "../Section/Home-3/Hero/Hero";
import ServiceSection from "../Section/Home-3/Service/Service";
import StateSection from "../Section/Home-3/State/State";

 
const HomeThree = () => {
  return (
    <Wrapper>
      <HomeHeader roundedBtn = "true" />
      <HeroSection />
      <ServiceSection />
      <ContentSection />
      <ContentSectionTwo />
      <StateSection />
      <PricingSection />
      <IntegrationSectionTwo />
      <FAQSection />
      <FooterSectionThree />
    </Wrapper>
  );
};

export default HomeThree;