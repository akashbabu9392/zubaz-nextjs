 
import FeatureCard from "../../../Ui/Cards/Feature";
import feature_data from "../../../../db/feature-data";

const FeatureSection = () => {
 

  return (
    <div className="section zubuz-section-padding3 light-bg">
      <div className="container">
        <div className="zubuz-section-title center">
          <h2>Features to improve your financial life</h2>
        </div>
        <div className="row">
          {feature_data?.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature?.title}
              icon={feature?.icon}
              description={feature?.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
