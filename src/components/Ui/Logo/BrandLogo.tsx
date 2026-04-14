import { Link } from "../../common/link";

 
const BrandLogo = ({ imageSrc } : any) => {
  const defaultImageSrc = "/assets/images/logo/logo-dark.svg";
  const logoSrc = imageSrc || defaultImageSrc;

  return (
    <div className="brand-logo">
      <Link to="/">
        <img src={logoSrc} alt="" className="light-version-logo" />
      </Link>
    </div>
  );
};

export default BrandLogo;
