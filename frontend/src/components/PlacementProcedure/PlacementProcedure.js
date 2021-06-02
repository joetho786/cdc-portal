import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import './placementProcedure.module.css';
import 'react-vertical-timeline-component/style.min.css';
import Footer from '../Footer/Footer';
import StarsIcon from '@material-ui/icons/Stars';
import Button from '@material-ui/core/Button';
const PlacementProcedureComponent = () => {
  return (
    <>
      <div>
        <h1 className="title"> Placement Procedure</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: 'black' }}
          >
            <p>
              CDC sends invitation to companies and organizations. companies can
              also send us a mail at{' '}
              <a
                href={
                  'https://mail.google.com/mail/?view=cm&fs=1&to=placement@iitj.ac.in'
                }
              >
                placement@iitj.ac.in
              </a>{' '}
              for same.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          >
            <p>
              Companies participating in Annual Placement Meet at IIT Jodhpur
              will be required to register at the Career Development Cell (CDC)
              website
              <span> </span>
              <a href="http://osp.iitj.ac.in">(http://osp.iitj.ac.in)</a>.
            </p>
            <div style={{ marginTop: 10, marginRight: 5 }}>
              <Button
                href="https://spc.iitj.ac.in/login/"
                variant="outlined"
                size="medium"
                color="primary"
                target="_blank"
              >
                Register Now
              </Button>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          >
            <p>
              fill out the JAF (Job Announcement Form)/ IAF (Intern Announcement
              Form) and send a soft copy of the same to the Placement Team. The
              CDC will verify the information provided by the company, following
              which a login ID and a password for the online CDC Portal will be
              provided to the companies.
            </p>
            <div style={{ marginTop: 10 }}>
              <Button
                href="https://spc.iitj.ac.in/login/"
                variant="outlined"
                size="medium"
                color="primary"
                style={{ marginInlineEnd: 10 }}
                target="_blank"
              >
                JAF
              </Button>
              <Button
                href="https://spc.iitj.ac.in/login/"
                variant="outlined"
                size="medium"
                color="primary"
                style={{ marginInlineEnd: 10 }}
                target="_blank"
              >
                IAF
              </Button>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          >
            <p>
              The dates of the Pre Placement Talks (PPT) will be decided with
              the mutual consent of CDC and the Organisation.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          >
            <p>
              Based on the PPT and profile of the job, students will be asked to
              apply for the job.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          >
            <p>
              Placement Session starts in the month of October. Early
              recruitment offers will be entertained based on the students'
              response for the same. A suitable date and time slot will be
              provided to the company based on criteria like: Student
              Preference, The Job Profile, Pay Package offered, The growth
              prospects.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          >
            <p>
              The company/organisation is required to furnish the results by the
              end of the day of recruitment.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
            icon={<StarsIcon />}
          ></VerticalTimelineElement>
        </VerticalTimeline>
      </div>
      <Footer />
    </>
  );
};

export default PlacementProcedureComponent;
