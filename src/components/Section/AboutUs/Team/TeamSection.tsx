 
import { Link } from "../../../common/link";
import TeamCard from "../../../Ui/Cards/TeamCard"; 
import team_data from "../../../../db/team-data";
const TeamSection = () => {
  
  return (
    <div className="section zubuz-section-padding3 dark-bg">
      <div className="container">
        <div className="zubuz-section-title light zubuz-two-column-title">
          <div className="row">
            <div className="col-lg-6">
              <h2>We’ve a team of creatives</h2>
            </div>
            <div className="col-lg-6 d-flex align-items-center">
              <div className="zubuz-title-btn">
                <Link className="zubuz-default-btn pill" to="/team">
                  <span>Join Our Team</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {team_data?.slice(0, 3).map((member, index) => (
            <TeamCard key={index} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
