import React from 'react';
import { Dropdown } from 'react-bootstrap';
import './subject.css';


function subject(){

    return (
        <div className='subject-main'>
        <div className='sub_section'>
        <div className="sub sub1">

    <label className="s1">Programming in C</label>
    <a rel="noreferrer" target='_blank' href='https://docs.google.com/spreadsheets/d/1JdKMJ7M-X0fMoIhBd1Dcl7ul_2csuosdVWpwTOEERFc/edit#gid=0'><div className="attendance">
      <span className="attend_label">Attendance</span>
    </div></a>

      <div>      
      <Dropdown>
        <Dropdown.Toggle className="ut" variant="success" id="dropdown-basic">
          <span className='attend_label1'> Unit Test</span>
        </Dropdown.Toggle>

      <Dropdown.Menu>
          <Dropdown.Item target="_blank" rel="noopener noreferrer" href="https://drive.google.com/drive/folders/1qDSBJ77AvSN4M1cH80bxhLvIHqHFCEh4?usp=sharing">Question Paper</Dropdown.Item>
          <Dropdown.Item target="_blank" rel="noopener noreferrer" href="https://drive.google.com/drive/folders/1geIeHMmN3-PeLCZPXQhAgRVJFpLTadkG?usp=sharing">Answer Key</Dropdown.Item>
          <Dropdown.Item target="_blank" rel="noopener noreferrer" href="#/ds-format">DS Format</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
      </div>
    {/* </div> */}

    <a rel="noreferrer" target='_blank' href='https://docs.google.com/spreadsheets/d/1JdKMJ7M-X0fMoIhBd1Dcl7ul_2csuosdVWpwTOEERFc/edit#gid=0'><div className="microproject">
      <span className="attend_label">Microprojects</span>
    </div></a>

    <a rel="noreferrer" target='_blank' href='https://docs.google.com/spreadsheets/d/1JdKMJ7M-X0fMoIhBd1Dcl7ul_2csuosdVWpwTOEERFc/edit#gid=0'><div className="term_work">
      <span className="attend_label">Term Work</span>
    </div></a>

      <Dropdown>
        <Dropdown.Toggle className="learn " variant="success" id="dropdown-basic">
        <span className="learn_label">Learning Materials</span>
        </Dropdown.Toggle>

      <Dropdown.Menu>
          <Dropdown.Item rel="noreferrer" target='_blank' href="https://drive.google.com/drive/folders/1Fy5jKLQaovn-Vk9sTrk5aib2y9282t6m?usp=sharing">Assignments</Dropdown.Item>
          <Dropdown.Item href="/subject-teacher/priyanka-ghode/study-material">Study Materials</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

  </div>
  </div>
  </div>
  );
}

export default subject;