import CtaTwo from "../Section/Common/Cta-2/CtaTwo";
import FooterTwo from "../Section/Common/Footer-2/FooterTwo";
import HomeHeaderTwo from "../Section/Common/Header/HomeHeaderTwo";   
import IntegrationSection from "../Section/Common/Integration/Integration";
import Wrapper from "../Section/Common/Wrapper";
import BrandSection from "../Section/Home-2/Brand/Brand";
import ContentSectionOne from "../Section/Home-2/Content/ContentOne";
import ContentSectionTwo from "../Section/Home-2/Content/ContentTwo";
import FeatureSection from "../Section/Home-2/Feature/Feature";
import HeroSection from "../Section/Home-2/Hero/Hero";
import PricingSection from "../Section/Home-2/Pricing/Pricing";
import TestimonialSection from "../Section/Home-2/Testimonial/Testimonial";

 
const HomeTwo = () => {
  return (
    <Wrapper>
      <HomeHeaderTwo />
      <HeroSection />
      <BrandSection />
      <FeatureSection />
      <TestimonialSection />
      <ContentSectionOne />
      <ContentSectionTwo />
      <PricingSection />
      <IntegrationSection />
      <CtaTwo />
      <FooterTwo />
    </Wrapper>
  );
};

export default HomeTwo;