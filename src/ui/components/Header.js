import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Header.css";
import "../styles/UniversalStyle.css";
import SearchBar from "./SearchBar";
import { useAuth } from "../../context/AuthProvider";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLargeFill } from "react-icons/ri";
import { TiArrowSortedDown } from "react-icons/ti";

export default function Header() {
  const [number, setNumber] = useState("123456789");
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuActive, setMenuActive] = useState("");

  const { isLoggedIn } = useAuth();

  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
    if (menuOpen) {
      setMenuActive("");
    } else {
      setMenuActive("menu-active");
    }
  };
  const navigate = useNavigate();
  return (
    <div className="header-box">
      <div className="header-upper-box">
        <div className="my-container-1">
          <div className="tobar-left">
            <ul>
              <li className="logo-1">
                <Link to="https://www.india.gov.in/">
                  <img
                    src="https://www.startupindia.gov.in/content/dam/invest-india/newhomepage/Gov%20of%20IND.png"
                    alt=""
                  />
                </Link>
              </li>
              <li className="logo-2">
                <Link to="https://commerce.gov.in/">
                  <img
                    src="https://www.startupindia.gov.in/content/dam/invest-india/newhomepage/MOCAI.png"
                    alt=""
                  />
                </Link>
              </li>
            </ul>
          </div>
          <div className="tobar-right">
            <div className="help-number">
              <strong>Our Toll Free Number : </strong>
              <a href="tel:1800115565">{number}</a>
              <span>(10:00 AM to 05:30 PM)</span>
            </div>
          </div>
        </div>
      </div>
      <div className="header-content">
        {menuOpen ? (
          <RiCloseLargeFill className="menu-icon" onClick={handleMenuOpen} />
        ) : (
          <GiHamburgerMenu className="menu-icon" onClick={handleMenuOpen} />
        )}
        <div className="midbar-left">
          <ul>
            <li className="startup-cell-logo">
              <Link to="https://startupcelllnjpitchapra.in/">
                <img src="/images/startup-cell.png" alt="" />
              </Link>
            </li>
            <li className="logo-2">
              <Link to="https://commerce.gov.in/">
                <img
                  src="https://startup.bihar.gov.in/static/media/new_logo.efdd49a20c5fb7fe0b73.png"
                  alt=""
                />
              </Link>
            </li>
            <li className="logo-2">
              <Link to="https://commerce.gov.in/">
                <img src="/images/atal-incubation.jpg" alt="" />
              </Link>
            </li>
          </ul>
        </div>
        <div className="midbar-right">
          <SearchBar />

          <img
            src="/images/icons/man.png"
            alt="profile-image"
            onClick={() => {
              navigate("/user-profile");
            }}
          ></img>
        </div>
      </div>
      <div className="header-nav-box">
        <div className="my-container-3">
          <ul className="nav-list">
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/about">About</Link>
              <div className="dropdown">
                <ul>
                  <li>
                    <Link to="/about/story">Our Story</Link>
                  </li>
                  <div className="horizontal-devider" />
                  <li>
                    <Link to="/about/mission">Mission & Vision</Link>
                  </li>
                  <div className="horizontal-devider" />
                  <li>
                    <Link to="/about/team">Our Team</Link>
                  </li>
                  <div className="horizontal-devider" />
                  <li>
                    <Link to="/about/faqs">FAQs</Link>
                  </li>
                </ul>
              </div>
            </li>
            {/* <li>
              <Link to="/aic">AIC</Link>
              <div className="dropdown">
                <ul>
                  <li>
                    <Link to="/aic/about-aic">What is AIC?</Link>
                  </li>
                  <div className="horizontal-devider" />
                  <li>
                    <Link to="/aic/details">Details</Link>
                  </li>
                  <div className="horizontal-devider" />
                  <li>
                    <Link to="/aic/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </li> */}
            <li>
              <Link to="/initiatives">Initiatives</Link>
              <div className="dropdown">
                <ul>
                  <li>
                    <Link to="/initiatives/impact">Initiative Vision</Link>
                  </li>
                  <div className="horizontal-devider" />
                  <li>
                    <Link to="/initiatives/program">Startup Programs</Link>
                  </li>
                  <div className="horizontal-devider" />
                  <li>
                    <Link to="/initiatives/workshop">Workshops</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <Link to="/idea-submission">Idea Submission</Link>
              <div className="dropdown">
                <ul>
                  <li>
                    <Link to="/idea-submission/registration-form">
                      Submit Your Idea
                    </Link>
                  </li>
                  <div className="horizontal-devider" />
                  <li>
                    <Link to="/idea-submission/guidlines">
                      Submission Guidelines
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
              <div className="dropdown">
                <ul>
                  <li>
                    <Link to="/gallery/event-gallery-section">Images</Link>
                  </li>
                  <div className="horizontal-devider" />
                  <li>
                    <Link to="/gallery/videos">Videos</Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className={`menu-box dark-charcoal ${menuActive}`}>
        <div className="menu-content">
          <div className="greet">
            <h4>Welcome</h4>
            <img
              src="/images/icons/namaste.png"
              alt="namste icon"
              style={{ width: "22px", height: "22px" }}
            />
            <RiCloseLargeFill
              style={{ fontSize: "24px", marginLeft: "50%" }}
              onClick={handleMenuOpen}
            />
          </div>

          <div className="menu-list">
            <ul className="nav-list">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link>
                  About <TiArrowSortedDown />
                </Link>
                <div className="nav-sub-list">
                  <ul>
                    <li>
                      <Link to="/about/story">Our Story</Link>
                    </li>
                    <div className="horizontal-devider" />
                    <li>
                      <Link to="/about/mission">Mission & Vision</Link>
                    </li>
                    <div className="horizontal-devider" />
                    <li>
                      <Link to="/about/team">Our Team</Link>
                    </li>
                    <div className="horizontal-devider" />
                    <li>
                      <Link to="/about/faqs">FAQs</Link>
                    </li>
                  </ul>
                </div>
              </li>
              {/* <li>
              <Link to="/aic">AIC</Link>
              <div className="dropdown">
                <ul>
                  <li>
                    <Link to="/aic/about-aic">What is AIC?</Link>
                  </li>
                  <div className="horizontal-devider" />
                  <li>
                    <Link to="/aic/details">Details</Link>
                  </li>
                  <div className="horizontal-devider" />
                  <li>
                    <Link to="/aic/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </li> */}
              <li>
                <Link>
                  Initiatives <TiArrowSortedDown />
                </Link>
                <div className="nav-sub-list">
                  <ul>
                    <li>
                      <Link to="/initiatives/impact">Initiative Vision</Link>
                    </li>
                    <div className="horizontal-devider" />
                    <li>
                      <Link to="/initiatives/program">Startup Programs</Link>
                    </li>
                    <div className="horizontal-devider" />
                    <li>
                      <Link to="/initiatives/workshop">Workshops</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Link>
                  Idea Submission <TiArrowSortedDown />
                </Link>
                <div className="nav-sub-list">
                  <ul>
                    <li>
                      <Link to="/idea-submission/registration-form">
                        Submit Your Idea
                      </Link>
                    </li>
                    <div className="horizontal-devider" />
                    <li>
                      <Link to="/idea-submission/guidlines">
                        Submission Guidelines
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Link to="/blogs">Blogs</Link>
              </li>
              <li>
                <Link>
                  Gallery <TiArrowSortedDown />
                </Link>
                <div className="nav-sub-list">
                  <ul>
                    <li>
                      <Link to="/gallery/event-gallery-section">Images</Link>
                    </li>
                    <div className="horizontal-devider" />
                    <li>
                      <Link to="/gallery/videos">Videos</Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
