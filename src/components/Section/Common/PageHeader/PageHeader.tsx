import { Link } from "../../../common/link";

type PageHeaderProps = {
  title: string;
};

const PageHeader = ({ title }: PageHeaderProps) => {
  return (
    <div className="zubuz-breadcrumb">
      <div className="container">
        <h1 className="post__title">{title}</h1>
        <nav className="breadcrumbs">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li aria-current="page">{" "}{title}</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default PageHeader;
