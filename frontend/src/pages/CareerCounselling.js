import React, { useState, useEffect } from 'react';
import instance from '../api/axios';
import styles from '../styles/pages/CareerCounselling.module.css';
import C3MemberCard from '../components/C3MemberCard';
import Loading from '../components/Loading';
import Grid from '@material-ui/core/Grid';
import MenuIcon from '@material-ui/icons/Menu';

const CareerCounselling = () => {
  const [loading, setLoding] = useState(true);
  const [chairman, setChairman] = useState([]);
  const [facultyIncharge, setFacultyIncharge] = useState([]);
  const [members, setMembers] = useState([]);

  useEffect(() => {
    instance
      .get('main/career_committee/')
      .then((res) => {
        setChairman(
          res.data.filter((member) =>
            member.designation.designation.includes('Chairman')
          )
        );
        setFacultyIncharge(
          res.data.filter((member) =>
            member.designation.designation.includes('Faculty Incharge')
          )
        );
        setMembers(
          res.data.filter((member) =>
            member.designation.designation.includes('Member')
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
          <div className={styles.chairman}>
            <MenuIcon
              fontSize="large"
              style={{ margin: '0 0.5rem 0 0', paddingTop: '0.2rem' }}
            />
            CHAIRMAN
          </div>
          <hr className={styles.hr}></hr>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={5}
            style={{ width: '100%', margin: 'auto' }}
          >
            {chairman.map((member) => {
              return (
                <Grid key={member.email} item xs={12} sm={6} md={4} lg={3}>
                  <C3MemberCard data={member} />
                </Grid>
              );
            })}
          </Grid>
          <hr className={styles.hr} style={{ marginTop: '5rem' }}></hr>
          <div className={styles.facultyIncharge}>
            <MenuIcon
              fontSize="large"
              style={{ margin: '0 0.5rem 0 0', paddingTop: '0.2rem' }}
            />
            FACULTY INCHARGE
          </div>
          <hr className={styles.hr}></hr>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={5}
            style={{ width: '100%', margin: 'auto' }}
          >
            {facultyIncharge.map((member) => {
              return (
                <Grid key={member.email} item xs={12} sm={6} md={4} lg={3}>
                  <C3MemberCard data={member} />
                </Grid>
              );
            })}
          </Grid>
          <hr className={styles.hr} style={{ marginTop: '5rem' }}></hr>
          <div className={styles.members}>
            <MenuIcon
              fontSize="large"
              style={{ margin: '0 0.5rem 0 0', paddingTop: '0.2rem' }}
            />
            MEMBERS
          </div>
          <hr className={styles.hr}></hr>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={5}
            style={{ width: '100%', margin: 'auto' }}
          >
            {members.map((member) => {
              return (
                <Grid key={member.email} item xs={12} sm={6} md={4} lg={3}>
                  <C3MemberCard data={member} />
                </Grid>
              );
            })}
          </Grid>
          <hr className={styles.hr} style={{ marginTop: '2rem' }}></hr>
        </>
      )}
    </div>
  );
};

export default CareerCounselling;
