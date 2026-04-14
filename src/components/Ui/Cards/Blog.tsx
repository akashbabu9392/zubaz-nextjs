 
import { Link } from "../../common/link";
import ArrowRightIcon from "../Icon/ArrowRight";

type BlogCardProps = {
  title: string;
  category: string;
  image: string;
  date: string;
  link: string;
};

const BlogCard = ({ title, category, image, date, link }: BlogCardProps) => {
  return (
    <div className="col-xl-4 col-lg-6">
      <div className="zubuz-blog-wrap">
        <Link to={link}>
          <div className="zubuz-blog-thumb">
            <img src={image} alt="" />
            <div className="zubuz-blog-categorie">{category}</div>
          </div>
        </Link>
        <div className="zubuz-blog-data">
          <p>{date}</p>
          <Link to={link}>
            <h3>{title}</h3>
          </Link>
          <Link to={link} className="zubuz-blog-btn">
            <ArrowRightIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
