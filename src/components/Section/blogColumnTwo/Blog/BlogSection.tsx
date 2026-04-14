 
import TwoBlogCard from "../../../Ui/Cards/TwoBlogCard";
import { Link } from "../../../common/link";
import blog_data_2 from "../../../../db/blog-data2";

const BlogSection = () => {
  
  return (
    <div className="section zubuz-section-padding2">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            {blog_data_2.map((post) => (
              <TwoBlogCard key={post?.id} post={post} />
            ))}
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
              <div className="widget">
                <h3 className="wp-block-heading">Categories:</h3>
                <ul>
                  <li>
                    <Link to="">SaaS</Link>
                  </li>
                  <li>
                    <Link to="">Marketing</Link>
                  </li>
                  <li>
                    <Link to="">Technology</Link>
                  </li>
                  <li>
                    <Link to="">SaaS Metrics</Link>
                  </li>
                  <li>
                    <Link to="">Development</Link>
                  </li>
                </ul>
              </div>
              <div className="widget zubuz_recent_posts_Widget">
                <h3 className="wp-block-heading">Recent Posts:</h3>
                <div className="post-item">
                  <div className="post-thumb">
                    <Link to="">
                      <img src="/assets/images/blog/blog1.png" alt="" />
                    </Link>
                  </div>
                  <div className="post-text">
                    <div className="post-date">June 18, 2024</div>
                    <Link className="post-title" to="">
                      7 businesses for easy money
                    </Link>
                  </div>
                </div>
                <div className="post-item">
                  <div className="post-thumb">
                    <Link to="">
                      <img src="/assets/images/blog/blog2.png" alt="" />
                    </Link>
                  </div>
                  <div className="post-text">
                    <div className="post-date">June 18, 2024</div>
                    <Link className="post-title" to="">
                      My 3 tips for business ideas
                    </Link>
                  </div>
                </div>
                <div className="post-item">
                  <div className="post-thumb">
                    <Link to="">
                      <img src="/assets/images/blog/blog3.png" alt="" />
                    </Link>
                  </div>
                  <div className="post-text">
                    <div className="post-date">June 18, 2024</div>
                    <Link className="post-title" to="">
                      12 Halloween costume ideas
                    </Link>
                  </div>
                </div>
              </div>
              <div className="widget">
                <h3 className="wp-block-heading">Tags:</h3>
                <div className="wp-block-tag-cloud">
                  <Link to="">Marketing</Link>
                  <Link to="">Business</Link>
                  <Link to="">SaaS</Link>
                  <Link to="">Development</Link>
                  <Link to="">UI/UX</Link>
                  <Link to="">Brand</Link>
                </div>
              </div>
              <div className="zubuz-blog-contact">
                <h3>How can we help you?</h3>
                <p>
                  We are here to help you! Tell us how we can help and we’ll get
                  in touch within next 24hrs
                </p>
                <Link to="contact-us">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
