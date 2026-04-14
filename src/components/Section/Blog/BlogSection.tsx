 
import BlogCard from "../../Ui/Cards/BlogCard";
import { Link } from "../../common/link";
import CategoryCard from "../../Ui/Cards/CategoryCard"; 
import PostCard from "../../Ui/Cards/PostCard";
import TagCard from "../../Ui/Cards/TagCard"; 
import blogs from "../../../db/blogs";

const BlogSection = () => {
 
  return (
    <div className="section zubuz-section-padding2">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            {blogs.map((post) => (
              <BlogCard key={post?.id} post={post} />
            ))}
            <div className="zubuz-navigation">
              <nav className="navigation pagination" aria-label="Posts">
                <div className="nav-links">
                  <span aria-current="page" className="page-numbers current">
                    1
                  </span>
                  <Link className="page-numbers" to="">
                    2
                  </Link>
                  <Link className="next page-numbers" to="">
                    next
                  </Link>
                </div>
              </nav>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="right-sidebar">
              <div className="widget">
                <div className="wp-block-search__inside-wrapper">
                  <input
                    type="search"
                    placeholder="Search..."
                    className="wp-block-search__input"
                  />
                  <button id="wp-block-search__button" type="submit">
                    <img src="/assets/images/icon/search.svg" alt="" />
                  </button>
                </div>
              </div>
              <CategoryCard />
              <PostCard />
              <TagCard />
              <div className="zubuz-blog-contact">
                <h3>How can we help you?</h3>
                <p>
                  We are here to help you! Tell us how we can help and we’ll get
                  in touch within next 24hrs
                </p>
                <Link to="">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
