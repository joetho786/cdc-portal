import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <div class="body header">
      <div class="container">
        <input type="checkbox" name="" id="check" />
        <div class="logo-container">
          <a href="/">
            <img src="../assets/cdclogo" alt="logo"></img>
          </a>
        </div>

        <div class="nav-btn">
          <div class="nav-links">
            <ul>
              <li class="nav-link">
                <a href="/">
                  Extra<i class="fas fa-caret-down"></i>
                </a>
                <div class="dropdown">
                  <ul>
                    <li class="dropdown-link">
                      <Link to="/Invitation">Invitation</Link>
                    </li>
                    <li class="dropdown-link">
                      <Link to="/ChairmanMessage">Chairman's Message</Link>
                    </li>
                    <li class="dropdown-link">
                      <Link to="/DirectorMessage">Director's Message</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="nav-link">
                <a href="/">
                  Recruiters<i class="fas fa-caret-down"></i>
                </a>
                <div class="dropdown">
                  <ul>
                    <li class="dropdown-link">
                      <Link to="/WhyRecruit">Why Recruit ?</Link>
                    </li>
                    <li class="dropdown-link">
                      <Link to="/Brochure">Brochure</Link>
                    </li>
                    <li class="dropdown-link">
                      <Link to="/PlacementStatistics">
                        Placement Statistics
                      </Link>
                    </li>
                    <li class="dropdown-link">
                      <Link to="/PlacementProcedure">Placement Procedure</Link>
                    </li>
                    <li class="dropdown-link">
                      <Link to="/RecruiterGuidelines">Norms/Guidelines</Link>
                    </li>
                    <li class="dropdown-link">
                      <Link to="/PastRecruiters">Past Recruiters</Link>
                    </li>
                    <li class="dropdown-link">
                      <Link to="/AIPCNorms">AIPC Norms</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="nav-link">
                <a href="/">
                  Students<i class="fas fa-caret-down"></i>
                </a>
                <div class="dropdown">
                  <ul>
                    <li class="dropdown-link">
                      <Link to="/Achievements">Achievements</Link>
                    </li>
                    <li class="dropdown-link">
                      <Link to="/Prospective">Prospective</Link>
                    </li>
                    <li class="dropdown-link">
                      <Link to="/StudentGuidelines">Norms/Guidelines</Link>
                    </li>
                    <li class="dropdown-link">
                      <Link to="/Internships">Internships</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="nav-link">
                <a href="/">
                  Forms<i class="fas fa-caret-down"></i>
                </a>
                <div class="dropdown">
                  <ul>
                    <li class="dropdown-link">
                      <Link to="/JAF">JAF</Link>
                    </li>
                    <li class="dropdown-link">
                      <Link to="/IAF">IAF</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="nav-link">
                <a href="/">
                  CDC Team<i class="fas fa-caret-down"></i>
                </a>
                <div class="dropdown">
                  <ul>
                    <li class="dropdown-link">
                      <Link to="/ContactUs">Contact Us</Link>
                    </li>
                    <li class="dropdown-link">
                      <Link to="/ReachUs">Reach Us</Link>
                    </li>
                    <li class="dropdown-link">
                      <Link to="/PlacementTeam">Placement Team</Link>
                    </li>
                    <li class="dropdown-link">
                      <Link to="/CareerCounselling">
                        Career Counselling Committee
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="nav-link">
                <a href="/">
                  Login|Register<i class="fas fa-caret-down"></i>
                </a>
                <div class="dropdown">
                  <ul>
                    <li class="dropdown-link">
                      <Link to="/StudentLogin">Student Login</Link>
                    </li>
                    <li class="dropdown-link">
                      <Link to="/RecruiterLogin">Recruiter Login</Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="hamburger-menu-container">
          <div class="hamburger-menu">
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
