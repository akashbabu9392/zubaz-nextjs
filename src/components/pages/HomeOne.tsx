import Cta from "../Section/Common/Cta/Cta";
import Footer from "../Section/Common/Footer/Footer";
import HomeHeader from "../Section/Common/Header/HomeHeader";
import TestimonialSection from "../Section/Common/Testimonial/Testimonial";
import Wrapper from "../Section/Common/Wrapper";
import BrandSection from "../Section/Home-1/Brand/Brand";
import ContentSectionOne from "../Section/Home-1/Content/ContentOne";
import ContentSectionTwo from "../Section/Home-1/Content/ContentTwo";
import Faq from "../Section/Home-1/Faq/Faq";
import FeatureSection from "../Section/Home-1/Feature/Feature";
import HeroSection from "../Section/Home-1/Hero/HeroSection";
import NewsSection from "../Section/Home-1/News/News";

 

 

const HomeOne = () => {
  return (
    <Wrapper>
      <HomeHeader />
      <HeroSection />
      <BrandSection />
      <ContentSectionOne />
      <ContentSectionTwo />
      <FeatureSection />
      <Faq />
      <TestimonialSection />
      <NewsSection />
      <Cta />
      <Footer />
    </Wrapper>
  );
};

export default HomeOne;