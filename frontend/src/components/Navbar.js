import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Navbar.css';

function Navbar() {
  return (
    <div className="body header">
      <div className="container">
        <input type="checkbox" name="" id="check" />
        <div className="logo-container">
          <a href="/">
            <img src="../assets/cdclogo" alt="logo"></img>
          </a>
        </div>

        <div className="nav-btn">
          <div className="nav-links">
            <ul>
              <li className="nav-link">
                <a href="/">
                  Extra<i className="fas fa-caret-down"></i>
                </a>
                <div className="dropdown">
                  <ul>
                    <li className="dropdown-link">
                      <Link to="/Invitation">Invitation</Link>
                    </li>
                    <li className="dropdown-link">
                      <Link to="/ChairmanMessage">Chairman's Message</Link>
                    </li>
                    <li className="dropdown-link">
                      <Link to="/DirectorMessage">Director's Message</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-link">
                <a href="/">
                  Recruiters<i className="fas fa-caret-down"></i>
                </a>
                <div className="dropdown">
                  <ul>
                    <li className="dropdown-link">
                      <Link to="/WhyRecruit">Why Recruit ?</Link>
                    </li>
                    <li className="dropdown-link">
                      <Link to="/Brochure">Brochure</Link>
                    </li>
                    <li className="dropdown-link">
                      <Link to="/PlacementStatistics">
                        Placement Statistics
                      </Link>
                    </li>
                    <li className="dropdown-link">
                      <Link to="/PlacementProcedure">Placement Procedure</Link>
                    </li>
                    <li className="dropdown-link">
                      <Link to="/RecruiterGuidelines">Norms/Guidelines</Link>
                    </li>
                    <li className="dropdown-link">
                      <Link to="/PastRecruiters">Past Recruiters</Link>
                    </li>
                    <li className="dropdown-link">
                      <Link to="/AIPCNorms">AIPC Norms</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-link">
                <a href="/">
                  Students<i className="fas fa-caret-down"></i>
                </a>
                <div className="dropdown">
                  <ul>
                    <li className="dropdown-link">
                      <Link to="/Achievements">Achievements</Link>
                    </li>
                    <li className="dropdown-link">
                      <Link to="/Prospective">Prospective</Link>
                    </li>
                    <li className="dropdown-link">
                      <Link to="/StudentGuidelines">Norms/Guidelines</Link>
                    </li>
                    <li className="dropdown-link">
                      <Link to="/Internships">Internships</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-link">
                <a href="/">
                  Forms<i className="fas fa-caret-down"></i>
                </a>
                <div className="dropdown">
                  <ul>
                    <li className="dropdown-link">
                      <Link to="/JAF">JAF</Link>
                    </li>
                    <li className="dropdown-link">
                      <Link to="/IAF">IAF</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-link">
                <a href="/">
                  CDC Team<i className="fas fa-caret-down"></i>
                </a>
                <div className="dropdown">
                  <ul>
                    <li className="dropdown-link">
                      <Link to="/ContactUs">Contact Us</Link>
                    </li>
                    <li className="dropdown-link">
                      <Link to="/ReachUs">Reach Us</Link>
                    </li>
                    <li className="dropdown-link">
                      <Link to="/PlacementTeam">Placement Team</Link>
                    </li>
                    <li className="dropdown-link">
                      <Link to="/CareerCounselling">
                        Career Counselling Committee
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-link">
                <a href="/">
                  Login|Register<i className="fas fa-caret-down"></i>
                </a>
                <div className="dropdown">
                  <ul>
                    <li className="dropdown-link">
                      <Link to="/StudentLogin">Student Login</Link>
                    </li>
                    <li className="dropdown-link">
                      <Link to="/RecruiterLogin">Recruiter Login</Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="hamburger-menu-container">
          <div className="hamburger-menu">
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
