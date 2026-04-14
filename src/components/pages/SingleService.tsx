import Footer from "../Section/Common/Footer/Footer";
import Header from "../Section/Common/Header/Header";
import IntegrationSection from "../Section/Common/Integration/Integration";
import PageHeader from "../Section/Common/PageHeader/PageHeader";
import TestimonialSection from "../Section/Common/Testimonial/Testimonial";
import Wrapper from "../Section/Common/Wrapper";
import ContentSection from "../Section/SingleService/Content/Content";
import SupportSection from "../Section/SingleService/Support/Support";
 



const SingleService = () => {
  return (
    <Wrapper>
      <Header />
      <PageHeader title="Services Details" />
      <SupportSection />
      <ContentSection />
      <TestimonialSection />
      <IntegrationSection />
      <Footer />
    </Wrapper>
  );
};

export default SingleService;