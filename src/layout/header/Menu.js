import Link from "next/link";

import { Fragment, useState } from "react";
const Menu = ({ singleMenu }) => {
  return (
    <Fragment>
      {singleMenu ? (
        <SingleMenu />
      ) : (
        <Fragment>
          <DaskTopMenu />
          <MobileMenu />
        </Fragment>
      )}
    </Fragment>
  );
};
export default Menu;

const DaskTopMenu = () => {
  return (
    <ul className="navigation d-none d-lg-flex desktop-menu">
      <li className="dropdown">
        <a href="/">Home</a>
     
       
      </li>
      <li>
        <Link legacyBehavior href="about">
          About Us
        </Link>
      </li>
      {/* <li className="dropdown">
        <a href="#">pages</a>
        <ul>
          <li>
            <Link legacyBehavior href="faqs">
              faqs
            </Link>
          </li>
          <li className="dropdown">
            <a href="#">Products</a>
            <ul>
              <li>
                <Link legacyBehavior href="shop">
                  our Products
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="product-details">
                  Product Details
                </Link>
              </li>
            </ul>
            <div className="dropdown-btn">
              <span className="far fa-plus" />
            </div>
          </li>
          <li className="dropdown">
            <a href="#">Team</a>
            <ul>
              <li>
                <Link legacyBehavior href="team">
                  Team Members
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="team-details">
                  Team Details
                </Link>
              </li>
            </ul>
            <div className="dropdown-btn">
              <span className="far fa-plus" />
            </div>
          </li>
          <li>
            <Link legacyBehavior href="contact">
              Contact us
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="pricing">
              Pricing Plan
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="404">
              404 error
            </Link>
          </li>
        </ul>
        <div className="dropdown-btn">
          <span className="far fa-plus" />
        </div>
      </li> */}
      <li className="dropdown">
        <a href="services">Services</a>
      
      </li>
      <li className="dropdown">
        <a href="projects">Projects</a>
     
        <div className="dropdown-btn">
        </div>
      </li>



      <li className="dropdown">
        <a href="contact">Contact</a>
     
        <div className="dropdown-btn">
        </div>
      </li>
      {/* <li className="dropdown">
        <a href="#">blog</a>
        <ul>
          <li>
            <Link legacyBehavior href="blog">
              blog Grid
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="blog-standard">
              blog standard
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="blog-details">
              blog details
            </Link>
          </li>
        </ul>
        <div className="dropdown-btn">
          <span className="far fa-plus" />
        </div>
      </li> */}
    </ul>
  );
};

const MobileMenu = () => {
  const [activeMenu, setActiveMenu] = useState("");
  const [multiMenu, setMultiMenu] = useState("");
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" };
  const multiMenuSet = (value) =>
      setMultiMenu(multiMenu === value ? "" : value),
    multiMenuActiveLi = (value) =>
      value === multiMenu ? { display: "block" } : { display: "none" };
  return (
    <ul className="navigation d-block d-lg-none mobile-menu">
      <li className="dropdown">
        <a href="/">Home</a>
        
      </li>
      <li>
        <Link legacyBehavior href="about">
          About Us
        </Link>
      </li>
     
      <li className="dropdown">
        <a href="services">Services</a>
      
   
      </li>
      <li className="dropdown">
        <a href="projects">Projects</a>
     
      </li>

      <li className="dropdown">
        <a href="contact">Contact</a>
     
      </li>
   
    </ul>
  );
};

const SingleMenu = () => {
  return (
    <ul className="navigation onepage clearfix">
      <li>
        <a href="#home">Home</a>
      </li>
      <li>
        <a href="#about">about</a>
      </li>
      <li>
        <a href="#services">services</a>
      </li>
      <li>
        <a href="#projects">project</a>
      </li>
      <li>
        <a href="#pricing">pricing</a>
      </li>
      <li>
        <a href="#news">news</a>
      </li>
    </ul>
  );
};
