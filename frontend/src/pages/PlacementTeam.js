import React, { useState, useEffect } from 'react';
import instance from '../api/axios';
import styles from '../styles/pages/PlacementTeam.module.css';
import ContactCard from '../components/ContactCard';
import Loading from '../components/Loading';
import Grid from '@material-ui/core/Grid';
import MenuIcon from '@material-ui/icons/Menu';
import ContactDetails from '../components/ContactDetails';
import Volunteers from '../components/Volunteers';

const PlacementTeam = () => {
  const [loading, setLoding] = useState(true);
  const [facultyIncharge, setFacultyIncharge] = useState([]);
  const [senior, setSenior] = useState([]);
  const [studentCoordinator, setStudentCoordinator] = useState([]);
  const [internshipCoordinator, setInternshipCoordinator] = useState([]);
  const [representative, setRepresentative] = useState([]);
  const [webDev, setWebDev] = useState([]);
  const [sophomoreVolunteers, setSophomoreVolunteers] = useState([]);
  const [preFinalVolunteers, setPreFinalVolunteers] = useState([]);
  const [pgVolunteers, setPgVolunteers] = useState([]);

  useEffect(() => {
    instance
      .get('main/core_team_contacts/')
      .then((res) => {
        setFacultyIncharge(
          res.data.filter((member) =>
            member.designation.designation.includes('Faculty Incharge')
          )
        );
        setSenior(
          res.data.filter((member) =>
            member.designation.designation.includes('Senior Assistant')
          )
        );
        setStudentCoordinator(
          res.data.filter((member) =>
            member.designation.designation.includes('Student Co-ordinator')
          )
        );
        setInternshipCoordinator(
          res.data.filter((member) =>
            member.designation.designation.includes('Internship Co-ordinator')
          )
        );
        setRepresentative(
          res.data.filter((member) =>
            member.designation.designation.includes(
              'Departmental Representative'
            )
          )
        );
        setWebDev(
          res.data.filter((member) =>
            member.designation.designation.includes('Web Development Team')
          )
        );
        return instance.get('main/volunteers/');
      })
      .then((res) => {
        setSophomoreVolunteers(
          res.data.filter((volunteer) =>
            volunteer.year.year.includes('UG Sophomore Year')
          )
        );
        setPreFinalVolunteers(
          res.data.filter((volunteer) =>
            volunteer.year.year.includes('UG Pre-Final Year')
          )
        );
        setPgVolunteers(
          res.data.filter((volunteer) =>
            volunteer.year.year.includes('Post Graduation')
          )
        );
      })
      .then(() => setLoding(false))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      {loading ? (
        <Loading />
      ) : (
        <>
          <ContactDetails />
          <hr className={styles.hr} style={{ marginTop: '2rem' }}></hr>
          <div className={styles.members}>
            <MenuIcon
              fontSize="large"
              style={{ margin: '0 0.5rem 0 0', paddingTop: '0.2rem' }}
            />
            PLACEMENT TEAM
          </div>
          <hr className={styles.hr}></hr>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={5}
            style={{ width: '100%', margin: '2rem auto auto' }}
          >
            {facultyIncharge.map((member) => {
              return (
                <Grid key={member.user.email} item xs={12} sm={6} md={4} lg={3}>
                  <ContactCard data={member} />
                </Grid>
              );
            })}
          </Grid>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={5}
            style={{ width: '100%', margin: 'auto' }}
          >
            {senior.map((member) => {
              return (
                <Grid key={member.user.email} item xs={12} sm={6} md={4} lg={3}>
                  <ContactCard data={member} />
                </Grid>
              );
            })}
          </Grid>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={5}
            style={{ width: '100%', margin: 'auto' }}
          >
            {studentCoordinator.map((member) => {
              return (
                <Grid key={member.user.email} item xs={12} sm={6} md={4} lg={3}>
                  <ContactCard data={member} />
                </Grid>
              );
            })}
            {internshipCoordinator.map((member) => {
              return (
                <Grid key={member.user.email} item xs={12} sm={6} md={4} lg={3}>
                  <ContactCard data={member} />
                </Grid>
              );
            })}
          </Grid>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={5}
            style={{ width: '100%', margin: 'auto' }}
          >
            {representative.map((member) => {
              return (
                <Grid key={member.user.email} item xs={12} sm={6} md={4} lg={3}>
                  <ContactCard data={member} />
                </Grid>
              );
            })}
          </Grid>
          <hr className={styles.hr} style={{ marginTop: '2rem' }}></hr>
          <div className={styles.members}>
            <MenuIcon
              fontSize="large"
              style={{ margin: '0 0.5rem 0 0', paddingTop: '0.2rem' }}
            />
            WEB DEVELOPMENT TEAM
          </div>
          <hr className={styles.hr}></hr>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={5}
            style={{ width: '100%', margin: '2rem auto auto' }}
          >
            {webDev.map((member) => {
              return (
                <Grid key={member.user.email} item xs={12} sm={6} md={4} lg={3}>
                  <ContactCard data={member} />
                </Grid>
              );
            })}
          </Grid>
          <hr className={styles.hr} style={{ marginTop: '2rem' }}></hr>
          <div className={styles.members}>
            <MenuIcon
              fontSize="large"
              style={{ margin: '0 0.5rem 0 0', paddingTop: '0.2rem' }}
            />
            VOLUNTEERS
          </div>
          <hr className={styles.hr}></hr>
          <Grid
            container
            direction="row"
            justify="center"
            spacing={5}
            style={{
              width: '100%',
              margin: '2rem auto auto',
            }}
          >
            <Volunteers year="SOPHOMORE YEAR" data={sophomoreVolunteers} />
            <Volunteers year="PRE-FINAL YEAR" data={preFinalVolunteers} />
            <Volunteers year="POST GRADUATES" data={pgVolunteers} />
          </Grid>
        </>
      )}
    </div>
  );
};

export default PlacementTeam;
