import BlogSection from "../Section/blogColumnOne/Blog/BlogSection";
import Footer from "../Section/Common/Footer/Footer";
import Header from "../Section/Common/Header/Header";
import PageHeader from "../Section/Common/PageHeader/PageHeader";
import Wrapper from "../Section/Common/Wrapper";
 
 

const BlogColumnOne = () => {
  return (
    <Wrapper>
      <Header />
      <PageHeader title="Our Blog" />
      <BlogSection />
      <Footer />
    </Wrapper>
  );
};

export default BlogColumnOne;