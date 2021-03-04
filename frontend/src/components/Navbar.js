import React from 'react';
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
                      <a href="/Invitation">Invitation</a>
                    </li>
                    <li class="dropdown-link">
                      <a href="/ChairmanMessage">Chairman's Message</a>
                    </li>
                    <li class="dropdown-link">
                      <a href="DirectorMessage">Director's Message</a>
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
                      <a href="/WhyRecruit">Why Recruit?</a>
                    </li>
                    <li class="dropdown-link">
                      <a href="/Brochure">Brochure</a>
                    </li>
                    <li class="dropdown-link">
                      <a href="/PlacementStatistics">Placement Statistics</a>
                    </li>
                    <li class="dropdown-link">
                      <a href="/PlacementProcedure">Placement Procedure</a>
                    </li>
                    <li class="dropdown-link">
                      <a href="/RecruiterGuidelines">Norms/Guidelines</a>
                    </li>
                    <li class="dropdown-link">
                      <a href="/PastRecruiters">Past Recruiters</a>
                    </li>
                    <li class="dropdown-link">
                      <a href="/AIPCNorms">AIPC Norms</a>
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
                      <a href="/Achievements">Achievements</a>
                    </li>
                    <li class="dropdown-link">
                      <a href="/Prospective">Prospective</a>
                    </li>
                    <li class="dropdown-link">
                      <a href="/StudentGuidelines">Norms/Guidelines</a>
                    </li>
                    <li class="dropdown-link">
                      <a href="/Internships">Internships</a>
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
                      <a href="/JAF">JAF</a>
                    </li>
                    <li class="dropdown-link">
                      <a href="/IAF">IAF</a>
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
                      <a href="/ContactUs">Contact Us</a>
                    </li>
                    <li class="dropdown-link">
                      <a href="/ReachUs">Reach Us</a>
                    </li>
                    <li class="dropdown-link">
                      <a href="/PlacementTeam">Placement Team</a>
                    </li>
                    <li class="dropdown-link">
                      <a href="/CareerCounselling">
                        Career Counselling Committee
                      </a>
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
                      <a href="/StudentLogin">Student Login</a>
                    </li>
                    <li class="dropdown-link">
                      <a href="/RecruiterLogin">Recruiter Login</a>
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
