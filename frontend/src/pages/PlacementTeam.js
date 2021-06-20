import React, { useState, useEffect } from 'react';
import instance from '../api/axios';
import styles from '../styles/pages/PlacementTeam.module.css';
import ContactCard from '../components/ContactCard';
import Loading from '../components/Loading';
import Grid from '@material-ui/core/Grid';
import MenuIcon from '@material-ui/icons/Menu';
import Volunteers from '../components/Volunteers';
import ContactUsTeam from './ContactUs.js';

const PlacementTeam = () => {
  const [loading, setLoding] = useState(true);
  const [webDev, setWebDev] = useState([]);
  const [sophomoreVolunteers, setSophomoreVolunteers] = useState([]);
  const [preFinalVolunteers, setPreFinalVolunteers] = useState([]);
  const [pgVolunteers, setPgVolunteers] = useState([]);

  useEffect(() => {
    instance
      .get('main/core_team_contacts/')
      .then((res) => {
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
    <div style={{ height: 'auto', width: '100%' }}>
      {loading ? (
        <Loading />
      ) : (
        <>
          <ContactUsTeam />
          <hr className={styles.hr} style={{ marginTop: '2rem' }}></hr>
          <div className={styles.members}>
            <MenuIcon
              fontSize="large"
              style={{ margin: '0 0.5rem 0 0', paddingTop: '0rem' }}
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
              style={{ margin: '0 0.5rem 0 0', paddingTop: '0rem' }}
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
