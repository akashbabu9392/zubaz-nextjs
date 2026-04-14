
"use client";

import { useRef, useState, useEffect } from "react";
import PortfolioFilterNav from "../Components/PortfolioFilterNav";
import { Link } from "../../../common/link";

const PortfolioGrid = () => {
 

  const isotopeRef = useRef<Isotope | null>(null);
  const [filterKey, setFilterKey] = useState<string>("*");

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("isotope-layout").then((IsotopeModule) => {
        isotopeRef.current = new IsotopeModule.default(".filter-container", {
          itemSelector: ".filter-item",
          layoutMode: "fitRows",
        });
      });
    }
  }, []);

  useEffect(() => {
    if (isotopeRef.current) {
      isotopeRef.current.arrange({
        filter: filterKey === "*" ? "*" : `.${filterKey}`,
      });
    }
  }, [filterKey]);

  const handleFilterKeyChange = (key: string) => () => {
    setFilterKey(key);
  };



  
  return (
    <div className="section zubuz-section-padding3 overflow-hidden">
      <div className="container">
        <div className="zubuz-section-title center">
          <h2>Some of our successful work</h2>
        </div>
        <PortfolioFilterNav
          filterKey={filterKey}
          handleFilterKeyChange={handleFilterKeyChange}
        />
        <div
          className="zubuz-portfolio-column filter-container"
          id="zubuz-two-column"
        >
          <div className="filter-item ui branding">
            <div className="collection-grid-item zubuz-portfolio-wrap branding ui">
              <div className="zubuz-portfolio-thumb">
                <img src="/assets/images/portfolio/p_1.png" alt="" />
                <div className="zubuz-portfolio-data">
                  <Link to="/single-portfolio">
                    <h3>E-commerce System</h3>
                  </Link>
                  <p>Website</p>
                  <Link
                    className="zubuz-portfolio-icon"
                    to="/single-portfolio"
                  >
                    <img src="/assets/images/portfolio/arrow-right.svg" alt="" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="filter-item ui website">
            <div className="collection-grid-item zubuz-portfolio-wrap ui Website">
              <div className="zubuz-portfolio-thumb">
                <img src="/assets/images/portfolio/p_2.png" alt="" />
                <div className="zubuz-portfolio-data">
                  <Link to="/single-portfolio">
                    <h3>Digital Art</h3>
                  </Link>
                  <p>Branding</p>
                  <Link
                    className="zubuz-portfolio-icon"
                    to="/single-portfolio"
                  >
                    <img src="/assets/images/portfolio/arrow-right.svg" alt="" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="filter-item ui">
            <div className="collection-grid-item zubuz-portfolio-wrap ui">
              <div className="zubuz-portfolio-thumb">
                <img src="/assets/images/portfolio/p_3.png" alt="" />
                <div className="zubuz-portfolio-data">
                  <Link to="/single-portfolio">
                    <h3>Creative Work</h3>
                  </Link>
                  <p>UI/UX</p>
                  <Link
                    className="zubuz-portfolio-icon"
                    to="/single-portfolio"
                  >
                    <img src="/assets/images/portfolio/arrow-right.svg" alt="" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="filter-item ui branding website">
            <div className="collection-grid-item zubuz-portfolio-wrap branding ui Website">
              <div className="zubuz-portfolio-thumb">
                <img src="/assets/images/portfolio/p_4.png" alt="" />
                <div className="zubuz-portfolio-data">
                  <Link to="/single-portfolio">
                    <h3>Development</h3>
                  </Link>
                  <p>Technology</p>
                  <Link
                    className="zubuz-portfolio-icon"
                    to="/single-portfolio"
                  >
                    <img src="/assets/images/portfolio/arrow-right.svg" alt="" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioGrid;
