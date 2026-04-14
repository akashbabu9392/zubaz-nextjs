import { Link } from "../../common/link";

type CareerJob = {
  title: string;
  description: string;
  location: string;
  type: string;
  salary: string;
};

type CareerCardProps = {
  job: CareerJob;
};

const CareerCard = ({ job }: CareerCardProps) => {
  return (
    <div className="zubuz-jobs-item">
      <div className="zubuz-jobs-item-content">
        <h3>{job.title}</h3>
        <p>{job.description}</p>
      </div>
      <div className="zubuz-jobs-item-content">
        <span>{job.location}</span>
        <span>
          {job.type}, Salary: {job.salary}
        </span>
      </div>
      <div className="zubuz-jobs-item-content">
        <div className="zubuz-jobs-apply-btn">
          <Link className="zubuz-default-btn" to="/contact-us">
            <span>Apply now</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CareerCard;
