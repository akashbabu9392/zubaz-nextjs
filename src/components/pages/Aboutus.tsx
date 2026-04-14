 

import AboutSection from "../Section/AboutUs/About/AboutSection";
import ContentSection from "../Section/AboutUs/Content/ContentSection";
import StateSection from "../Section/AboutUs/State/StateSection";
import TeamSection from "../Section/AboutUs/Team/TeamSection";
import FAQSection from "../Section/Common/FAQ/FAQSection";
import Footer from "../Section/Common/Footer/Footer";
import Header from "../Section/Common/Header/Header";
import PageHeader from "../Section/Common/PageHeader/PageHeader"; 
import Wrapper from "../Section/Common/Wrapper";

const Aboutus = () => {
  return (
    <Wrapper>
      <Header />
      <PageHeader title="About Us" />
      <AboutSection />
      <StateSection />
      <ContentSection />
      <TeamSection />
      <FAQSection />
      <Footer />
    </Wrapper>
  );
};

export default Aboutus;