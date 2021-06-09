import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import './placementProcedure.module.css';
import 'react-vertical-timeline-component/style.min.css';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Container, Typography } from '@material-ui/core';
import StarsIcon from '@material-ui/icons/Stars';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    marginBottom: 10,
    [theme.breakpoints.down(460)]: {
      padding: 2,
    },
  },
  paper: {
    padding: theme.spacing(2),
    width: 'auto',
    color: theme.palette.text.secondary,
    textAlign: 'center',
  },
}));

const IconStyle = {
  background: '#1d1642',
  color: 'white',
  fontWeight: 800,
  justifyContent: 'center',
  alignItems: 'center',
  display: 'flex',
  fontSize: 'x-large',
};

const PlacementProcedureComponent = () => {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="lg" className={classes.root}>
        <Grid container spacing={3}>
          <Grid style={{ marginTop: '10px' }} item xs={12}>
            <Paper className={classes.paper}>
              <Typography component="h5" variant="h5" style={{ fontSize: 30 }}>
                Placement Procedure
              </Typography>
            </Paper>
          </Grid>
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              iconStyle={IconStyle}
              icon={1}
            >
              <p>
                CDC sends invitation to companies and organizations. companies
                can also send us a mail at{' '}
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
              iconStyle={IconStyle}
              icon={2}
            >
              <p>
                Companies participating in Annual Placement Meet at IIT Jodhpur
                will be required to register at the Career Development Cell
                (CDC) website
                <span> </span>
                <a href="https://spc.iitj.ac.in/">(https://spc.iitj.ac.in)</a>.
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
              iconStyle={IconStyle}
              icon={3}
            >
              <p>
                fill out the JAF (Job Announcement Form)/ IAF (Intern
                Announcement Form) and send a soft copy of the same to the
                Placement Team. The CDC will verify the information provided by
                the company, following which a login ID and a password for the
                online CDC Portal will be provided to the companies.
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
              iconStyle={IconStyle}
              icon={4}
            >
              <p>
                The dates of the Pre Placement Talks (PPT) will be decided with
                the mutual consent of CDC and the Organisation.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              iconStyle={IconStyle}
              icon={5}
            >
              <p>
                Based on the PPT and profile of the job, students will be asked
                to apply for the job.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              iconStyle={IconStyle}
              icon={6}
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
              iconStyle={IconStyle}
              icon={7}
            >
              <p>
                The company/organisation is required to furnish the results by
                the end of the day of recruitment.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
              icon={<StarsIcon />}
            ></VerticalTimelineElement>
          </VerticalTimeline>
        </Grid>
      </Container>
    </>
  );
};

export default PlacementProcedureComponent;
