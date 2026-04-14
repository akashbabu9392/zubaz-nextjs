
"use client";

import { useRef, useState, useEffect } from "react"
import type Isotope from "isotope-layout";
import { Link } from "../../../common/link";
import PortfolioFilterNav from "../Components/PortfolioFilterNav";

type IsotopeRefType = {
  container: HTMLDivElement | null;
  isoInstance: Isotope | null;
};


const PortfolioClassic = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isotopeRef = useRef<IsotopeRefType>({
    container: null,
    isoInstance: null,
  });

  const [filterKey, setFilterKey] = useState<string>("*");

  useEffect(() => {
    let iso: Isotope | null = null;
    const current = isotopeRef.current;

    import("isotope-layout").then((IsotopeModule) => {
      if (containerRef.current) {
        iso = new IsotopeModule.default(containerRef.current, {
          itemSelector: ".filter-item",
          layoutMode: "fitRows",
        });

        current.isoInstance = iso;
      }
    });

    // Cleanup
    return () => {
      if (iso) {
        iso.destroy();
      }
    };
  }, []);

  useEffect(() => {
    const iso = isotopeRef.current.isoInstance;
    if (iso) {
      iso.arrange({ filter: filterKey === "*" ? "*" : `.${filterKey}` });
    }
  }, [filterKey]);

  const handleFilterKeyChange = (key: string) => () => {
    setFilterKey(key);
  };

  return (
    <div className="section zubuz-section-padding3 overflow-hidden">
      <div className="container">
        <div className="zubuz-section-title center">
          <h2>Our successful work</h2>
        </div>
        <PortfolioFilterNav
          filterKey={filterKey}
          handleFilterKeyChange={handleFilterKeyChange}
        />
        <div 
          ref={containerRef}
          className="zubuz-portfolio-column zubuz-portfolio-column2 filter-container"
          id="zubuz-one-column"

        >
          <div className="filter-item ui branding">
            <div className="collection-grid-item zubuz-portfolio-wrap2">
              <div className="zubuz-portfolio-thumb2">
                <img src="/assets/images/portfolio/p_1.png" alt="" />
              </div>
              <div className="zubuz-portfolio-data2">
                <Link to="/single-portfolio">
                  <h3>E-commerce System</h3>
                </Link>
                <p>Website</p>
                <Link className="zubuz-portfolio-icon2" to="/single-portfolio">
                  <svg
                    width="48"
                    height="38"
                    viewBox="0 0 48 38"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M29 1.5L46.5 19M46.5 19L29 36.5M46.5 19L1.5 19"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="filter-item ui website">
            <div className="collection-grid-item zubuz-portfolio-wrap2 ui Website">
              <div className="zubuz-portfolio-thumb2">
                <img src="/assets/images/portfolio/p_2.png" alt="" />
              </div>
              <div className="zubuz-portfolio-data2">
                <Link to="/single-portfolio">
                  <h3>Digital Art</h3>
                </Link>
                <p>Branding</p>
                <Link className="zubuz-portfolio-icon2" to="/single-portfolio">
                  <svg
                    width="48"
                    height="38"
                    viewBox="0 0 48 38"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M29 1.5L46.5 19M46.5 19L29 36.5M46.5 19L1.5 19"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="filter-item ui">
            <div className="collection-grid-item zubuz-portfolio-wrap2 ui">
              <div className="zubuz-portfolio-thumb2">
                <img src="/assets/images/portfolio/p_3.png" alt="" />
              </div>
              <div className="zubuz-portfolio-data2">
                <Link to="/single-portfolio">
                  <h3>Creative Work</h3>
                </Link>
                <p>UI/UX</p>
                <Link className="zubuz-portfolio-icon2" to="/single-portfolio">
                  <svg
                    width="48"
                    height="38"
                    viewBox="0 0 48 38"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M29 1.5L46.5 19M46.5 19L29 36.5M46.5 19L1.5 19"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="filter-item ui branding website">
            <div className="collection-grid-item zubuz-portfolio-wrap2 branding ui Website">
              <div className="zubuz-portfolio-thumb2">
                <img src="/assets/images/portfolio/p_4.png" alt="" />
              </div>
              <div className="zubuz-portfolio-data2">
                <Link to="/single-portfolio">
                  <h3>Development</h3>
                </Link>
                <p>Technology</p>
                <Link className="zubuz-portfolio-icon2" to="/single-portfolio">
                  <svg
                    width="48"
                    height="38"
                    viewBox="0 0 48 38"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M29 1.5L46.5 19M46.5 19L29 36.5M46.5 19L1.5 19"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioClassic;
