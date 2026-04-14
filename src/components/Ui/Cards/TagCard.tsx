import { Link } from "../../common/link";

 
const TagCard = () => {
  return (
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
  );
};

export default TagCard;
