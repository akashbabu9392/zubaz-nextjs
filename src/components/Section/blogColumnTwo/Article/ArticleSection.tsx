import article_data from "../../../../db/article-data";
import ArticleCard from "../../../Ui/Cards/ArticleCard";

 
const ArticleSection = () => {
 
  return (
    <div className="section zubuz-section-padding3 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="zubuz-section-title">
              <h2>Latest articles</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {article_data.map((article, i) => (
            <ArticleCard key={i} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticleSection;
