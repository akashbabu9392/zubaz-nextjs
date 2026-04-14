import { Link } from "../../../common/link";
import blog_data from "../../../../db/blog-data";
import ArrowRightIcon from "../../../Ui/Icon/ArrowRight";

 
const NewsSection = () => {
 

  return (
    <div className="section zubuz-section-padding2 light-bg">
      <div className="container">
        <div className="zubuz-section-title center">
          <h2>We've earned a 4.8-star Trustpilot rating</h2>
        </div>
        <div className="row">
          {blog_data?.map((blog, index) => (
            <div className="col-xl-4 col-lg-6" key={index}>
              <div className="zubuz-blog-wrap">
                <Link to={blog?.link}>
                  <div className="zubuz-blog-thumb">
                    <img src={blog?.image} alt="" />
                    <div className="zubuz-blog-categorie">{blog?.category}</div>
                  </div>
                </Link>
                <div className="zubuz-blog-data">
                  <p>{blog?.date}</p>
                  <Link to={blog?.link}>
                    <h3>{blog?.title}</h3>
                  </Link>
                  <Link to={blog?.link} className="zubuz-blog-btn">
                    <ArrowRightIcon />
                  </Link>
                </div>
              </div>
            </div>
          
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
