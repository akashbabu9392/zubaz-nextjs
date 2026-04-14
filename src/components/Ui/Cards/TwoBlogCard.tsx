 
import { Link } from "../../common/link";
import ArrowRightIcon from "../Icon/ArrowRight";

type BlogPost = {
  image: string;
  category: string;
  date: string;
  title: string;
  description: string;
  link: string;
};

type TwoBlogCardProps = {
  post: BlogPost;
};

const TwoBlogCard = ({ post }: TwoBlogCardProps) => {
  return (
    <div className="single-post-item two-column">
      <div className="post-thumbnail">
        <img src={post.image} alt="" />
      </div>
      <div className="post-content">
        <div className="post-meta">
          <div className="post-category">
            <a href="">{post.category}</a>
          </div>
          <div className="post-date">{post.date}</div>
        </div>
        <a href={post.link}>
          <h3 className="entry-title">{post.title}</h3>
        </a>
        <p>{post.description}</p>
        <Link to="" className="post-read-more">
          <ArrowRightIcon />
        </Link>
      </div>
    </div>
  );
};

export default TwoBlogCard;
