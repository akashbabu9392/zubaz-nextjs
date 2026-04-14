
"use client";

import { useEffect,  useState } from "react";
import { FaAngleDown, FaAngleLeft } from "react-icons/fa";
import { Link } from "../../../common/link";
import BrandLogo from "../../../Ui/Logo/BrandLogo";

type HomeHeaderProps = {
  logoSrc?: string;
  roundedBtn?: boolean;
};

const HomeHeader = ({ logoSrc, roundedBtn }: HomeHeaderProps) => {
 
 
  const [isActive, setIsActive] = useState<boolean>(false);
  const [subMenuArray, setSubMenuArray] = useState<string[]>([]);
  const [subMenuTextArray, setSubMenuTextArray] = useState<string[]>([]);
  const [scrollClassName, setScrollClassName] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrollClassName("sticky-menu");
      } else {
        setScrollClassName("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

 
  const menuMainClickHandler = (e: React.MouseEvent<HTMLElement>) => {
    if (typeof window !== "undefined" && window.innerWidth <= 991) {
      const target = e.target as HTMLElement;
      const hasChildren = target.closest(".nav-item-has-children") as HTMLElement | null;
  
      if (hasChildren) {
        e.preventDefault();
  
        const subMenu = hasChildren.querySelector(":scope > .sub-menu") as HTMLElement | null;
        const dropTrigger = hasChildren.querySelector(":scope > .drop-trigger") as HTMLElement | null;
        
        if (subMenu && dropTrigger) {
          // Store submenu ID and text
          const submenuId = subMenu.id;
          const menuTitle = dropTrigger.textContent || "";
  
          // Activate the submenu
          setSubMenuArray((prev) => [...prev, submenuId]);
          setSubMenuTextArray((prev) => [...prev, menuTitle]);
  
          subMenu.classList.add("active");
          subMenu.style.animation = "slideLeft 0.5s ease forwards";
  
          const titleElement = document.querySelector(".current-menu-title") as HTMLElement | null;
          if (titleElement) titleElement.innerHTML = menuTitle;
  
          const mobileMenuHead = document.querySelector(".mobile-menu-head") as HTMLElement | null;
          if (mobileMenuHead) mobileMenuHead.classList.add("active");
        }
      }
    }
  };
   
  const goBackClickHandler = () => {
    const lastItem = subMenuArray.slice(-1)[0];
    const lastItemText = subMenuTextArray.slice(-2)[0];

    setSubMenuArray((prev) => prev.slice(0, -1));
    setSubMenuTextArray((prev) => prev.slice(0, -1));

    if (lastItem) {
      const element = document.getElementById(lastItem);
      if (element && !element.classList.contains("nav-item-has-children")) {
        element.style.animation = "slideRight 0.5s ease forwards";
        const titleElement = document.querySelector(".current-menu-title") as HTMLElement | null;
        if (titleElement) titleElement.innerHTML = lastItemText;

        setTimeout(() => {
          element.classList.remove("active");
        }, 300);
      } else {
        const goBack = document.querySelector(".go-back") as HTMLElement | null;
        if (goBack) goBack.classList.remove("active");
      }
    }

    if (subMenuArray.length === 1) {
      const mobileMenuHead = document.querySelector(".mobile-menu-head") as HTMLElement | null;
      if (mobileMenuHead) mobileMenuHead.classList.remove("active");
    }
  };

  const menuTriggerClickHandler = () => {
    toggleMenu();
  };

  const closeMenuClickHandler = () => {
    toggleMenu();
    document.querySelectorAll(".sub-menu").forEach((submenu) => {
      submenu.classList.remove("active");
      (submenu as HTMLElement).style.animation = "";
    });

    const goBack = document.querySelector(".go-back") as HTMLElement | null;
    if (goBack) goBack.classList.remove("active");
  };

  

  const toggleMenu = () => {
    setIsActive((prev) => !prev);
    const overlay = document.querySelector(".menu-overlay");
    overlay?.classList.toggle("active");
  };
 

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined" && window.innerWidth > 991 && isActive) {
        toggleMenu();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isActive]);



  return (
    <header
      className={`site-header site-header--menu-center zubuz-header-section bg-white ${scrollClassName}`}
      id="sticky-menu"
    >
      <div className="container">
        <nav className="navbar site-navbar">
          <BrandLogo imageSrc={logoSrc} />
          <div className="menu-block-wrapper">
            <div className={`menu-overlay ${isActive ? "active" : ""}`} onClick={closeMenuClickHandler}></div>
            <nav
              className={`menu-block ${isActive ? "active" : ""}`}
              id="append-menu-header"
            >
              <div className="mobile-menu-head">
                <div className="go-back" onClick={goBackClickHandler}>
                  <FaAngleLeft />
                </div>
                <div className="current-menu-title"></div>
                <div
                  className="mobile-menu-close"
                  onClick={closeMenuClickHandler}
                >
                  
                  &times;
                </div>
              </div>

              <ul className="site-menu-main" onClick={menuMainClickHandler}>
                <li className="nav-item nav-item-has-children">
                  <Link to="" className="nav-link-item drop-trigger">
                    Demo
                    <i>
                      <FaAngleDown />
                    </i>
                  </Link>
                  <ul className="sub-menu" id="submenu-1">
                    <li className="sub-menu--item">
                      <Link to="/">
                        <span className="menu-item-text">Finance App</span>
                      </Link>
                    </li>
                    <li className="sub-menu--item">
                      <Link to="/home-2">
                        <span className="menu-item-text">CRM Platform</span>
                      </Link>
                    </li>
                    <li className="sub-menu--item">
                      <Link to="/home-3">
                        <span className="menu-item-text">SaaS Startups</span>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link to="/about-us" className="nav-link-item">
                    About Us
                  </Link>
                </li>
                <li className="nav-item nav-item-has-children">
                  <Link to="" className="nav-link-item drop-trigger">
                    Pages
                    <i>
                      <FaAngleDown />
                    </i>
                  </Link>
                  <ul className="sub-menu" id="submenu-2">
                    <li className="sub-menu--item">
                      <Link to="/about-us">
                        <span className="menu-item-text">About Us</span>
                      </Link>
                    </li>
                    <li className="sub-menu--item">
                      <Link to="/pricing">
                        <span className="menu-item-text">Pricing</span>
                      </Link>
                    </li>
                    <li className="sub-menu--item nav-item-has-children nav-item-has-inner-children">
                      <Link to="" data-menu-get="h3" className="drop-trigger">
                        blog
                        <i>
                          <FaAngleDown />
                        </i>
                      </Link>
                      <ul className="sub-menu shape-none" id="submenu-3">
                        <li className="sub-menu--item">
                          <Link to="/blog">
                            <span className="menu-item-text">Our Blog</span>
                          </Link>
                        </li>
                        <li className="sub-menu--item">
                          <Link to="/blog-column-one">
                            <span className="menu-item-text">
                              blog column one
                            </span>
                          </Link>
                        </li>
                        <li className="sub-menu--item">
                          <Link to="/blog-column-two">
                            <span className="menu-item-text">
                              blog column two
                            </span>
                          </Link>
                        </li>
                        <li className="sub-menu--item">
                          <Link to="/single-blog">
                            <span className="menu-item-text">blog details</span>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="sub-menu--item nav-item-has-children">
                      <Link to="" data-menu-get="h3" className="drop-trigger">
                        Service
                        <i>
                          <FaAngleDown />
                        </i>
                      </Link>
                      <ul className="sub-menu shape-none" id="submenu-4">
                        <li className="sub-menu--item">
                          <Link to="/service">
                            <span className="menu-item-text">service</span>
                          </Link>
                        </li>
                        <li className="sub-menu--item">
                          <Link to="/single-service">
                            <span className="menu-item-text">service details</span>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="sub-menu--item nav-item-has-children">
                      <Link to="" data-menu-get="h3" className="drop-trigger">
                        Team
                        <i>
                          <FaAngleDown />
                        </i>
                      </Link>
                      <ul className="sub-menu shape-none" id="submenu-5">
                        <li className="sub-menu--item">
                          <Link to="/team">
                            <span className="menu-item-text">team</span>
                          </Link>
                        </li>
                        <li className="sub-menu--item">
                          <Link to="/single-team">
                            <span className="menu-item-text">team details</span>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="sub-menu--item nav-item-has-children">
                      <Link to="" data-menu-get="h3" className="drop-trigger">
                        Career
                        <i>
                          <FaAngleDown />
                        </i>
                      </Link>
                      <ul className="sub-menu shape-none" id="submenu-6">
                        <li className="sub-menu--item">
                          <Link to="/career">
                            <span className="menu-item-text">Career</span>
                          </Link>
                        </li>
                        <li className="sub-menu--item">
                          <Link to="/single-career">
                            <span className="menu-item-text">Career details</span>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="sub-menu--item nav-item-has-children">
                      <Link to="" data-menu-get="h3" className="drop-trigger">
                        Portfolio
                        <i>
                          <FaAngleDown />
                        </i>
                      </Link>
                      <ul className="sub-menu shape-none" id="submenu-7">
                        <li className="sub-menu--item">
                          <Link to="/portfolio-grid">
                            <span className="menu-item-text">portfolio gird</span>
                          </Link>
                        </li>
                        <li className="sub-menu--item">
                          <Link to="/portfolio-classic">
                            <span className="menu-item-text">
                              portfolio classic
                            </span>
                          </Link>
                        </li>
                        <li className="sub-menu--item">
                          <Link to="/single-portfolio">
                            <span className="menu-item-text">Single Portfolio</span>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="sub-menu--item nav-item-has-children">
                      <Link to="" data-menu-get="h3" className="drop-trigger">
                        Utility
                        <i>
                          <FaAngleDown />
                        </i>
                      </Link>
                      <ul className="sub-menu shape-none" id="submenu-8">
                        <li className="sub-menu--item">
                          <Link to="/faq">
                            <span className="menu-item-text">faq</span>
                          </Link>
                        </li>
                        <li className="sub-menu--item">
                          <Link to="/errors-404">
                            <span className="menu-item-text">Error 404</span>
                          </Link>
                        </li>
                        <li className="sub-menu--item">
                          <Link to="/integrations">
                            <span className="menu-item-text">integrations</span>
                          </Link>
                        </li>
                        <li className="sub-menu--item">
                          <Link to="/testimonials">
                            <span className="menu-item-text">testimonials</span>
                          </Link>
                        </li>
                        <li className="sub-menu--item">
                          <Link to="/coming-soon">
                            <span className="menu-item-text">Coming Soon</span>
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="nav-item nav-item-has-children">
                  <Link to="" className="nav-link-item drop-trigger">
                    Blog{" "}
                    <i>
                      <FaAngleDown />
                    </i>
                  </Link>
                  <ul className="sub-menu" id="submenu-10">
                    <li className="sub-menu--item">
                      <Link to="/blog">
                        <span className="menu-item-text">Our Blog</span>
                      </Link>
                    </li>
                    <li className="sub-menu--item">
                      <Link to="/blog-column-one">
                        <span className="menu-item-text">blog column one</span>
                      </Link>
                    </li>
                    <li className="sub-menu--item">
                      <Link to="/blog-column-two">
                        <span className="menu-item-text">blog column two</span>
                      </Link>
                    </li>
                    <li className="sub-menu--item">
                      <Link to="/single-blog">
                        <span className="menu-item-text">blog details</span>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link to="/contact-us" className="nav-link-item">
                    Contact Us
                  </Link>
                </li>
              </ul>

            </nav>
          </div>

          <div className="header-btn header-btn-l1 ms-auto d-none d-xs-inline-flex">
            <div className="zubuz-header-btn-wrap">
              <Link className="zubuz-login-btn" to="sign-in">
                Login
              </Link>
            </div>
            <Link
              className={` ${roundedBtn
                ? "zubuz-default-btn zubuz-header-btn pill"
                : "zubuz-default-btn zubuz-header-btn"
                }`}
              to="contact-us"
            >
              <span>Get Started</span>
            </Link>
          </div>
          <div
            className="mobile-menu-trigger light"
            onClick={menuTriggerClickHandler}
          >
            <span></span>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default HomeHeader;
