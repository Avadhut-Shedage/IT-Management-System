import React from "react";
import "./classTeacherNavbar.css";
import {Link} from 'react-router-dom';
import GhodeMadamimg from '../../assets/img/ghode-madam.svg'


function eventHandle() {
  let arrow = document.querySelectorAll(".arrow");
  for (var i = 0; i < arrow.length; i++) {
    arrow[i].addEventListener("click", (e) => {
      let arrowParent = e.target.parentElement.parentElement; //selecting main parent of arrow
      arrowParent.classList.toggle("showMenu");
    });
  }
  let sidebar = document.querySelector(".sidebar");
  let sidebarBtn = document.querySelector(".bx-menu");
  console.log(sidebarBtn);
  sidebarBtn.addEventListener("click", () => {
    sidebar.classList.toggle("close");
  });
}

function classTeacherNavbar() {
  return (
    <div>
      <div class="sidebar close">
        <div class="logo-details">
          <img alt=""
            class="gpa_logo" 
            src="https://www.gpawasari.ac.in/Images/logo.PNG"
          />
          <span class="logo_name">GPA</span>
        </div>
        <ul class="nav-links">
          <li>
            <Link to="/class-teacher-dashboard">
              <i class="bx bx-home-alt"></i>
              <span class="link_name">Dashboard</span>
            </Link>
            <ul class="sub-menu blank">
              <li>
                <Link class="link_name" to="/class-teacher-dashboard">
                  Dashboard
                </Link>
              </li>
            </ul>
          </li>

          {/* <li>
            <div class="iocn-link">
              <Link to="">
                <i class="bx bx-user"></i>
                <span class="link_name">Faculty</span>
              </Link>
              <i  onClick={eventHandle} class="bx bxs-chevron-down arrow"></i>
            </div>
            <ul class="sub-menu">
              <li>
                <Link to="" class="link_name">
                Faculty
                </Link>
              </li>
              <li>
                <Link to="/student-details">First Year</Link>
              </li>
              <li>
                <Link to="/student-details">Second Year</Link>
              </li>
              <li>
                <Link to="/student-details">Third Year</Link>
              </li>
            </ul>
          </li> */}

          <li>
            <Link to="/classfaculty">
              <i class="bx bxs-user"></i>
              <span class="link_name">Faculty</span>
            </Link>
            <ul class="sub-menu blank">
              <li>
                <Link class="link_name" to="/classfaculty">
                Faculty
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <a rel="noreferrer" target='_blank' href="https://docs.google.com/spreadsheets/d/1Z_u2e43DTCcqVu94ZlK28AmcHntjzpeFreV3FIzQO8I/edit#gid=0" >
              <i class="bx bx-file-find"></i>
              <span class="link_name">Assign Course</span>
            </a>
            <ul class="sub-menu blank">
              <li>
                <Link class="link_name" to="#">
                Assign Course
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <div class="iocn-link">
              <Link to="/student-table">
              <i class="bx bxs-user"></i>
                <span class="link_name">Students</span>
              </Link>
            </div>
            <ul class="sub-menu">
              <li>
                <Link class="link_name" to="/student-table">
                Students
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/class-detentionlist">
              <i class="bx bx-food-menu"></i>
              <span class="link_name">Detention List</span>
            </Link>
            <ul class="sub-menu blank">
              <li>
                <Link class="link_name" to="class-detentionlist">
                 Detention List
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="#">
              <i class="bx bx-spreadsheet"></i>
              <span class="link_name">Result Analysis</span>
            </Link>
            <ul class="sub-menu blank">
              <li>
                <Link class="link_name" to="#">
                Result Analysis
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <div class="iocn-link">
              <Link to="/class-feedback">
              <i class="bx bxs-comment-detail"></i>
                <span class="link_name">Feedback</span>
              </Link>
            </div>
            <ul class="sub-menu">
              <li>
                <Link class="link_name" to="/class-feedback">
                Feedback
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/class-teacher-profile">
              <i class="bx bxs-user"></i>
              <span class="link_name">My Profile</span>
            </Link>
            <ul class="sub-menu blank">
              <li>
                <Link class="link_name" to="/class-teacher-profile">
                My Profile
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/">
              <i class="bx bx-log-out"></i>
              <span class="link_name">Logout</span>
            </Link>
            <ul class="sub-menu blank">
              <li>
                <Link class="link_name" to="/">
                  Logout
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <div class="profile-details">
              <div class="profile-content">
                <img alt="" src={GhodeMadamimg} />
              </div>
              <div class="name-job">
                <div class="profile_name">Ms. P. S. Ghode</div>
                <div class="job">Class Teacher</div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="home-section">
        <div class="home-content">
          <i class="bx bx-menu" onClick={eventHandle}></i>
          <span class="text">Class Teacher Dashboard</span>
          <br />
        </div>
      </div>
    </div>
  );
}

export default classTeacherNavbar;