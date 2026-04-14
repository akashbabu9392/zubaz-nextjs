import ArticleSection from "../Section/blogColumnTwo/Article/ArticleSection";
import BlogSection from "../Section/blogColumnTwo/Blog/BlogSection";
import Footer from "../Section/Common/Footer/Footer";
import Header from "../Section/Common/Header/Header";
import PageHeader from "../Section/Common/PageHeader/PageHeader";
import Wrapper from "../Section/Common/Wrapper";
 


const BlogColumnTwo = () => {
	return (
		<Wrapper>
			<Header />
			<PageHeader title="Our Blog" />
			<BlogSection />
			<ArticleSection />
			<Footer />
		</Wrapper>
	);
};

export default BlogColumnTwo;
