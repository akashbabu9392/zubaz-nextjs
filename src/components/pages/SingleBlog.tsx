import Footer from "../Section/Common/Footer/Footer";
import Header from "../Section/Common/Header/Header";
import PageHeader from "../Section/Common/PageHeader/PageHeader";
import Wrapper from "../Section/Common/Wrapper";
import SingleBlogSection from "../Section/SingleBlog/SingleBlogSection";

const SingleBlog = () => {
	return (
		<Wrapper>
			<Header />
			<PageHeader title="Our Blog" />
			<SingleBlogSection />
			<Footer />
		</Wrapper>
	);
};

export default SingleBlog;
