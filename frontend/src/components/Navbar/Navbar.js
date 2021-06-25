import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Grid from '@material-ui/core/Grid';
import logo from '../../assets/cdclogo.png';
import iitjLogo from '../../assets/iitjKogo.png';
function Logout(event) {
  event.preventDefault();
  localStorage.setItem('cdc_LoggedIn', false);
  localStorage.setItem('cdc_auth_token', '');
  window.location = '/';
}
export default function Navbar() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Grid container style={{ marginBottom: 68 }}>
      <div className="wrapper">
        <nav>
          <input
            onChange={(event) => setIsChecked(event.currentTarget.checked)}
            checked={isChecked}
            type="checkbox"
            id="show-menu"
          />
          <label htmlFor="show-menu" className="menu-icon">
            <i className="fas fa-bars"></i>
          </label>
          <div className="content">
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="logo" width="69px" heigth="64px" />
              </Link>
              <Link to="/">
                <img src={iitjLogo} alt="logo" width="55px" heigth="58px" />
              </Link>
            </div>
            <ul className="links">
              <li>
                <Link to="#" className="desktop-link">
                  Home <i className="fa fa-caret-down"></i>
                </Link>
                <input type="checkbox" id="show-home" />
                <label htmlFor="show-home">
                  Home <i className="fa fa-caret-down"></i>
                </label>
                <ul>
                  <li onClick={() => setIsChecked(!isChecked)}>
                    <Link to="/Invitation">Invitation</Link>
                  </li>
                  <li onClick={() => setIsChecked(!isChecked)}>
                    <Link to="/DirectorMessage">Director's Message</Link>
                  </li>
                  <li onClick={() => setIsChecked(!isChecked)}>
                    <Link to="/ChairmanMessage">Chairman's Message</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="#" className="desktop-link">
                  Academics <i className="fa fa-caret-down"></i>
                </Link>
                <input type="checkbox" id="show-academics" />
                <label htmlFor="show-academics">
                  Academics <i className="fa fa-caret-down"></i>
                </label>
                <ul>
                  <li onClick={() => setIsChecked(!isChecked)}>
                    <Link to="/GradeSystem">Grade System</Link>
                  </li>
                  <li onClick={() => setIsChecked(!isChecked)}>
                    <Link to="/Programmes">Programmes</Link>
                  </li>
                  <li onClick={() => setIsChecked(!isChecked)}>
                    <Link to="/AdmissionProcedure">Admission Procedure</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="#" className="desktop-link">
                  Students <i className="fa fa-caret-down"></i>
                </Link>
                <input type="checkbox" id="show-students" />
                <label htmlFor="show-students">
                  Students <i className="fa fa-caret-down"></i>
                </label>
                <ul>
                  <li onClick={() => setIsChecked(!isChecked)}>
                    <Link to="/Achievements">Achievements</Link>
                  </li>
                  <li onClick={() => setIsChecked(!isChecked)}>
                    <Link to="/Prospective">Prospective</Link>
                  </li>
                  <li onClick={() => setIsChecked(!isChecked)}>
                    <Link to="/StudentGuidelines">Norms/Guidelines</Link>
                  </li>
                  <li onClick={() => setIsChecked(!isChecked)}>
                    <Link to="/Internships">Internships</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="#" className="desktop-link">
                  Recruiter <i className="fa fa-caret-down"></i>
                </Link>
                <input type="checkbox" id="show-recruiter" />
                <label htmlFor="show-recruiter">
                  Recruiter <i className="fa fa-caret-down"></i>
                </label>
                <ul>
                  <li onClick={() => setIsChecked(!isChecked)}>
                    <Link to="/WhyRecruit">Why Recruit?</Link>
                  </li>
                  <li onClick={() => setIsChecked(!isChecked)}>
                    <Link to="/Brochure">Brochure</Link>
                  </li>
                  <li onClick={() => setIsChecked(!isChecked)}>
                    <Link to="/PlacementStatistics">Placement Statistics</Link>
                  </li>
                  <li onClick={() => setIsChecked(!isChecked)}>
                    <Link to="/PlacementProcedure">Placement Procedure</Link>
                  </li>
                  <li onClick={() => setIsChecked(!isChecked)}>
                    <Link to="/RecruiterGuidelines">Norms/Guidelines</Link>
                  </li>
                  <li onClick={() => setIsChecked(!isChecked)}>
                    <Link to="/PastRecruiters">Past Recruiters</Link>
                  </li>
                  <li onClick={() => setIsChecked(!isChecked)}>
                    <Link to="/AIPCNorms">AIPC Norms</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="#" className="desktop-link">
                  Forms <i className="fa fa-caret-down"></i>
                </Link>
                <input type="checkbox" id="show-forms" />
                <label htmlFor="show-forms">
                  Forms <i className="fa fa-caret-down"></i>
                </label>
                <ul>
                  <li onClick={() => setIsChecked(!isChecked)}>
                    <Link to="/JAF">JAF</Link>
                  </li>
                  <li onClick={() => setIsChecked(!isChecked)}>
                    <Link to="/IAF">IAF</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="#" className="desktop-link">
                  CDC Team <i className="fa fa-caret-down"></i>
                </Link>
                <input type="checkbox" id="show-cdc-team" />
                <label htmlFor="show-cdc-team">
                  CDC-Team <i className="fa fa-caret-down"></i>
                </label>
                <ul>
                  <li onClick={() => setIsChecked(!isChecked)}>
                    <Link to="/ContactUs">Contact Us</Link>
                  </li>
                  <li onClick={() => setIsChecked(!isChecked)}>
                    <Link to="/ReachUs">Reach Us</Link>
                  </li>
                  <li onClick={() => setIsChecked(!isChecked)}>
                    <Link to="/PlacementTeam">Placement Team</Link>
                  </li>
                  <li onClick={() => setIsChecked(!isChecked)}>
                    <Link to="/CareerCounselling">
                      Career Counselling Committee Members
                    </Link>
                  </li>
                </ul>
              </li>
              {localStorage.getItem('cdc_LoggedIn') === 'true' ? (
                <li>
                  <Link
                    className="desktop-link"
                    to={
                      localStorage.getItem('cdc_loginType') === 'Student'
                        ? '/StudentDashboard'
                        : '/RecruiterDashboard'
                    }
                  >
                    <span>
                      {localStorage.getItem('cdc_Dname')}{' '}
                      <i className="fa fa-caret-down"></i>
                    </span>
                  </Link>
                  <input type="checkbox" id="show-cdc-team" />
                  <label htmlFor="show-cdc-team">
                    {localStorage.getItem('cdc_Dname')}{' '}
                    <i className="fa fa-caret-down"></i>
                  </label>
                  {localStorage.getItem('cdc_loginType') === 'Student' ? (
                    /* Student Zone */
                    <ul>
                      <li onClick={() => setIsChecked(!isChecked)}>
                        <Link to="/StudentDashboard/uploadresume">Profile</Link>
                      </li>
                      <li onClick={() => setIsChecked(!isChecked)}>
                        <Link to="/StudentDashboard/uploadresume">
                          Upload Resume
                        </Link>
                      </li>
                      <li onClick={Logout}>
                        <Link to="#">Logout</Link>
                      </li>
                    </ul>
                  ) : (
                    /* Compant Zone */
                    <ul>
                      <li onClick={() => setIsChecked(!isChecked)}>
                        <Link to="/CareerCounselling">Profile</Link>
                      </li>
                      <li onClick={Logout}>
                        <Link to="#">Logout</Link>
                      </li>
                    </ul>
                  )}
                </li>
              ) : (
                <li>
                  <Link to="#" className="desktop-link">
                    Login <i className="fa fa-caret-down"></i>
                  </Link>
                  <input type="checkbox" id="show-login" />
                  <label htmlFor="show-login">
                    Login <i className="fa fa-caret-down"></i>
                  </label>
                  <ul>
                    <li onClick={() => setIsChecked(!isChecked)}>
                      <Link to="/RecruiterLogin">Recruiter Login</Link>
                    </li>
                    <li onClick={() => setIsChecked(!isChecked)}>
                      <Link to="/StudentLogin">Student Login</Link>
                    </li>
                  </ul>
                </li>
              )}
            </ul>
          </div>
        </nav>
      </div>
    </Grid>
  );
}
